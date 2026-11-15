# State Management Architecture: Ithere Care HMIS

## 1. Overview & Architectural Boundary

The **Ithere Care** healthcare management application enforces a strict separation of concerns between **Server State** and **Client State** to eliminate cache synchronization issues, avoid stale data across browser tabs, and prevent duplicate network requests (resolving **FE-02: Competing State Management Patterns**).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Ithere Care Frontend                            │
├───────────────────────────────────┬────────────────────────────────────┤
│           SERVER STATE            │            CLIENT STATE            │
│       (@tanstack/react-query)     │             (zustand)              │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Remote API data (Patients, HMO) │ • Authentication session & token   │
│ • Caching, invalidation, gc       │ • Local UI visibility (modals)     │
│ • Optimistic / background updates │ • Transient table selections       │
│ • Cross-tab sync (BroadcastChan)  │ • Client drawer / preview toggles  │
│ • Loading, error, fetching states │ • User theme & layout preferences  │
└───────────────────────────────────┴────────────────────────────────────┘
```

---

## 2. Why TanStack Query for Server State?

Server state has fundamentally different operational characteristics than local client state:
- It is owned remotely (PostgreSQL / NestJS backend).
- It can be modified concurrently by other clinicians, nurses, or administrative staff.
- It requires caching, background revalidation, stale-time policies, request deduplication, and retry logic.

Using Zustand to manually hold `data[]`, `loading`, and `error` led to:
1. **Cache desynchronization:** Creating a patient in one view didn't invalidate the cache in another.
2. **Stale tabs:** Opening multiple browser tabs resulted in desynchronized data without cross-tab messaging.
3. **Redundant requests / boilerplate:** Multiple components independently dispatched fetch calls with fragile `useEffect` hooks.

By standardizing server state on **TanStack Query (v5)**:
- Requests are automatically deduplicated.
- Components subscribe to queries declaratively; when mutations succeed, relevant queries are invalidated globally.
- Browser focus revalidation and network reconnect revalidation keep clinical records fresh.

---

## 3. What Zustand is Responsible For

Zustand remains an integral part of the Ithere Care architecture for **genuine client-side UI and session state**:

1. **Authentication State (`store/auth.store.ts`)**:
   - Stores the active user profile and JWT access token.
   - Synchronized to `localStorage` via Zustand's `persist` middleware.
   - Provides synchronous `isAuthenticated()` checks for router guards and Axios interceptors.

2. **Patient UI State (`store/patient.store.ts`)**:
   - Manages client-only interface state:
     - `selectedPatient`: Transient patient object selected for profile modals or drawer inspection.
     - `filtersVisible`: Toggle state of the patient directory filter bar.
     - `isProfileOpen` / `isOpdProfileOpen`: Visibility flags for modal dialogs.
     - `activeTab`: Local tab selection in multi-step or tabbed views.

---

## 4. Query-Key Conventions

All query keys are centralized in `src/constants/queryKeys.ts` using a hierarchical array convention:

```typescript
export const queryKeys = {
  patients: {
    all: ["patients"] as const,
    lists: () => [...queryKeys.patients.all, "list"] as const,
    list: (params?: Record<string, unknown>) =>
      params
        ? ([...queryKeys.patients.lists(), params] as const)
        : ([...queryKeys.patients.lists()] as const),
    details: () => [...queryKeys.patients.all, "detail"] as const,
    detail: (id: number | string) =>
      [...queryKeys.patients.details(), id] as const,
  },
  hmos: {
    all: ["hmos"] as const,
    lists: () => [...queryKeys.hmos.all, "list"] as const,
    list: (params?: Record<string, unknown>) =>
      params
        ? ([...queryKeys.hmos.lists(), params] as const)
        : ([...queryKeys.hmos.lists()] as const),
    details: () => [...queryKeys.hmos.all, "detail"] as const,
    detail: (id: number | string) =>
      [...queryKeys.hmos.details(), id] as const,
  },
} as const;
```

### Benefits of Hierarchical Query Keys:
- **Broad Invalidation:** Invalidating `queryKeys.patients.all` (`["patients"]`) matches both list queries and detail queries, ensuring entire entity caches update after additions or deletions.
- **Granular Invalidation:** Updating a single patient detail invalidates `queryKeys.patients.detail(id)` without invalidating unaffected cached records.
- **Filter-Aware Caching:** `queryKeys.patients.list(params)` caches filtered queries independently (e.g., in-patients vs. out-patients) while allowing bulk invalidation via `queryKeys.patients.lists()`.

---

## 5. Patient Data-Fetching Architecture

Patient state is located under `src/features/patient/usePatients.ts` (re-exported by `src/features/patient/index.ts` and `src/features/patients/index.ts`).

### Implemented Hooks:
- `usePatients(params?: GetPatientsParams)`:
  - Fetches patient lists with support for search, HMO filter, patient type (`is_out_patient`), and date ranges.
  - Automatically deduplicates and caches responses.
- `usePatient(id?: number | string | null)`:
  - Fetches an individual patient record when `id` is present (`enabled: Boolean(id)`).
- `useCreatePatient()`:
  - Mutation that posts a new patient record via `patientService.createPatient`.
  - On success: invalidates `queryKeys.patients.all` and broadcasts cross-tab invalidation.
- `useUpdatePatient()`:
  - Mutation that updates a patient record via `patientService.updatePatient`.
  - On success: invalidates `queryKeys.patients.all` and `queryKeys.patients.detail(id)`, then broadcasts cross-tab invalidation.
- `useDeletePatient()`:
  - Mutation that deletes a patient record via `patientService.deletePatient`.
  - On success: invalidates `queryKeys.patients.all`, removes detail cache, and broadcasts cross-tab invalidation.

---

## 6. HMO Data-Fetching Architecture

HMO data is managed in `src/features/hmo/useHmos.ts`:
- `useHmos()`: Queries the HMO provider directory with `queryKeys.hmos.all`.
- `useHmo(id)`: Queries individual HMO details with `queryKeys.hmos.detail(id)`.
- **Cache Strategy:** Reference data such as HMO underwriting directories changes infrequently. A `staleTime` of 5 minutes (`1000 * 60 * 5`) is configured to avoid repeated API requests when opening registration modals or dropdowns.

---

## 7. Global Cache & Synchronization Strategy

The global `QueryClient` (`src/app/queryClient.ts`) is configured with the following production defaults:

| Option | Value | Purpose |
| :--- | :--- | :--- |
| `staleTime` | `1 minute` (`60,000 ms`) | Prevents refetch waterfalls when users navigate between tabs and views. |
| `gcTime` | `10 minutes` (`600,000 ms`) | Preserves inactive query cache in memory across department navigation. |
| `refetchOnWindowFocus` | `true` | Refetches stale queries when the user returns to the application tab. |
| `refetchOnReconnect` | `true` | Restores fresh data upon recovering network connection. |
| `retry` | `1` (queries), `0` (mutations) | Prevents infinite retry loops on backend errors. |

### Cross-Tab Synchronization (`BroadcastChannel`)
To resolve stale data across browser tabs without adding third-party dependencies:
1. `src/app/queryClient.ts` initializes a native browser `BroadcastChannel` named `"ithere-care-cache-sync"`.
2. When a mutation (such as patient registration) succeeds in Tab A, `broadcastQueryInvalidation(queryKeys.patients.all)` broadcasts a lightweight message:
   ```json
   { "type": "invalidate-queries", "queryKey": ["patients"] }
   ```
3. Tab B receives the message and triggers `queryClient.invalidateQueries({ queryKey, refetchType: 'active' })`.
4. Any active view in Tab B automatically re-fetches and displays the latest patient records.

---

## 8. Guide for Introducing New Server-State Features

When adding new domain resources (e.g., Pharmacy Orders, Lab Results, Appointments):

1. **Define API Service (`src/services/<domain>.service.ts`)**:
   Implement standard Axios calls with envelope unwrapping.

2. **Register Query Keys (`src/constants/queryKeys.ts`)**:
   ```typescript
   export const queryKeys = {
     ...,
     lab: {
       all: ["lab"] as const,
       requests: () => [...queryKeys.lab.all, "requests"] as const,
       requestList: (params?: Record<string, unknown>) =>
         params ? ([...queryKeys.lab.requests(), params] as const) : ([...queryKeys.lab.requests()] as const),
       detail: (id: string | number) => [...queryKeys.lab.all, "detail", id] as const,
     }
   };
   ```

3. **Create Custom Hooks (`src/features/<domain>/use<Domain>.ts`)**:
   - Use `useQuery` for reads.
   - Use `useMutation` for writes, updates, and deletes.
   - In `onSuccess`, call `queryClient.invalidateQueries({ queryKey: queryKeys.<domain>.all })` and `broadcastQueryInvalidation(queryKeys.<domain>.all)`.

4. **Reserve Zustand for Client State Only**:
   Only create Zustand stores if there is global UI state (modals, drafts, step-progress, local filters) that is NOT persisted on the server.
