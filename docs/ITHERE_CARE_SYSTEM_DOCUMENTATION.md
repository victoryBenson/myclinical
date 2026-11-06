# ITHERE SYSTEMS — HOSPITAL EDITION
## Powered by Ithere Care
### Comprehensive Application Walkthrough, Functional Inventory & Technical System Documentation

---

| Document Control | Details |
| :--- | :--- |
| **Document Title** | Ithere Systems — Hospital Edition: System Documentation & Functional Inventory |
| **Primary Product** | **Ithere Care** (Healthcare Management Information System) |
| **Deployment Edition** | **Ithere Systems — Hospital Edition** |
| **Product Attribution** | Powered by Ithere Care |
| **Parent Organization** | **Ithere Technology Group** (*"The Future Has an Address."*) |
| **Application Version** | `0.1.0` (`v0.1.0 — Development`) |
| **Document Classification** | Official Product & Engineering System Reference |
| **Repository Branch / Baseline** | `refactor` (`ae06a5b`) |
| **Date Prepared** | November 2026 |

---

## Table of Contents

1. [Document Overview](#1-document-overview)
2. [Brand and Product Overview](#2-brand-and-product-overview)
3. [Version Information](#3-version-information)
4. [Executive Summary of the Application](#4-executive-summary-of-the-application)
5. [System Architecture Overview](#5-system-architecture-overview)
6. [User Roles and Access Control](#6-user-roles-and-access-control)
7. [Complete Application Walkthrough](#7-complete-application-walkthrough)
8. [Module-by-Module Functional Breakdown](#8-module-by-module-functional-breakdown)
9. [Core Hospital Workflows](#9-core-hospital-workflows)
10. [Database and Data Model Summary](#10-database-and-data-model-summary)
11. [API and Backend Overview](#11-api-and-backend-overview)
12. [Frontend Structure Overview](#12-frontend-structure-overview)
13. [Configuration and Environment Overview](#13-configuration-and-environment-overview)
14. [Current Implementation Status](#14-current-implementation-status)
15. [Known Limitations and Pending Completion](#15-known-limitations-and-pending-completion)
16. [Future Ecosystem Readiness](#16-future-ecosystem-readiness)
17. [Appendix](#17-appendix)

---

## 1. Document Overview

### 1.1 Purpose of This Document
This document provides an authoritative, evidence-based technical and functional reference for **Ithere Care**, deployed as **Ithere Systems — Hospital Edition**. It captures the findings of a complete end-to-end codebase inspection and application walkthrough, documents the transition from the legacy internal development identity (`myClinical` / `MyClinic`) to the official **Ithere Technology Group** brand architecture, establishes the canonical version baseline (`v0.1.0`), and catalogs the exact implementation status of all **13 hospital departments** and **169 application views**.

### 1.2 Intended Audience
- **Executive Leadership & Product Strategy (Ithere Technology Group):** Clear visibility into product scope, brand alignment, implementation maturity, and multi-product ecosystem readiness.
- **Hospital Administrators, Medical Directors & Implementation Consultants:** Comprehensive walkthrough of hospital departments, clinical and operational capabilities, and workflows.
- **Software Architects, Frontend & Backend Engineers:** Detailed blueprint of the React 19 / TypeScript architecture, state management, routing topology, API contracts, data entities, and version governance.
- **Quality Assurance & Operations Teams:** Accurate matrix distinguishing live API-integrated workflows from interactive mock modules and staged enterprise screens.

### 1.3 Scope and Verification Methodology
Every statement in this document is verified directly against the actual source code in the repository (`src/`, `index.html`, `package.json`, and Git commit history). In accordance with strict engineering integrity standards:
- No unimplemented module is presented as backend-complete.
- Every module is classified into one of five transparent verification tiers:
  1. **Fully Implemented & Functional (Frontend + Live Backend API Wired)**
  2. **Partially Implemented (Interactive UI + Partial/Scoped API or Local State Persistence)**
  3. **UI Only — Interactive Mock State (No Confirmed Backend Persistence)**
  4. **Planned / UI Staging Shell (`HmisPlaceholderPage` Blueprint)**
  5. **Inaccessible / External Dependency Required**

---

## 2. Brand and Product Overview

### 2.1 Parent Organization
- **Organization Name:** **Ithere Technology Group**
- **Corporate Tagline:** *"The Future Has an Address."*
- **Strategic Vision:** *One platform. Multiple independent products. Shared infrastructure. Flexible subscriptions.*

### 2.2 The Ithere Product Ecosystem
Ithere Technology Group is structured around five distinct, complementary enterprise offerings:

```
+-----------------------------------------------------------------------------------+
|                             ITHERE TECHNOLOGY GROUP                               |
|                          "The Future Has an Address."                             |
+-----------------------------------------------------------------------------------+
          |                  |                  |                  |
          v                  v                  v                  v
+------------------+ +------------------+ +------------------+ +------------------+
|   ITHERE CARE    | | ITHERE ENTERPRISE| |  ITHERE TALENT   | |   ITHERE LEARN   |
| Healthcare, HMIS,| | ERP, Finance,    | | HR, Payroll,     | | LMS, Clinical    |
| EMR & Clinical   | | Accounting &     | | Rostering &      | | CME, Training &  |
| Operations       | | Procurement      | | Workforce Mgmt   | | Assessments      |
+------------------+ +------------------+ +------------------+ +------------------+
          \                  |                  |                  /
           \                 |                  |                 /
            v                v                  v                v
+-----------------------------------------------------------------------------------+
|                                  ITHERE SYSTEMS                                   |
|         Custom Enterprise Solutions & Integrated Multi-Product Deployments        |
|                                                                                   |
|     Current Deployment:  ITHERE SYSTEMS — HOSPITAL EDITION                        |
|     Product Attribution: Powered by Ithere Care                                   |
+-----------------------------------------------------------------------------------+
```

| Product / Offering | Domain Focus | Current Ecosystem Status |
| :--- | :--- | :--- |
| **Ithere Care** | Healthcare Management Information System (HMIS), Electronic Medical Records (EMR), Clinical Orders, Pharmacy, Laboratory, Radiology, and Ward Operations | **Active Core Product** (This Repository — `v0.1.0`) |
| **Ithere Systems** | Integrated Enterprise Solution & Custom Implementation Delivery Umbrella | **Active Deployment Identity** (*Ithere Systems — Hospital Edition*) |
| **Ithere Enterprise** | Enterprise Resource Planning (ERP), General Ledger, Accounts Payable/Receivable, Budgeting, Fixed Assets, and Supply Chain | **Planned Standalone Product** (Currently represented as hospital-scoped Finance & Procurement modules within the Hospital Edition) |
| **Ithere Talent** | Human Resource Management, Staff Directory, Shift Rostering, Leave Management, Payroll, and Appraisal | **Planned Standalone Product** (Currently represented as hospital-scoped HR modules within the Hospital Edition) |
| **Ithere Learn** | Learning Management System (LMS), Continuing Medical Education (CME) Credits, Assessments, and Institutional Training | **Planned Standalone Product** (Currently represented as CME & Training tracking within the Hospital Edition) |

### 2.3 Brand Hierarchy Applied in This Application
Throughout the user interface, metadata, and system settings, the following brand hierarchy is enforced consistently:
- **Primary Application Name:** `Ithere Care`
- **Integrated Deployment Identity:** `Ithere Systems — Hospital Edition`
- **Product Attribution:** `Powered by Ithere Care`
- **Parent Attribution:** `A product of Ithere Technology Group`

---

## 3. Version Information

### 3.1 Codebase Version Audit Findings
Prior to this standardization, an inspection of the repository revealed the following version indicators:
1. **`package.json`:** Contained `"version": "0.0.0"` (the uninitialized Vite TypeScript template default).
2. **Git Repository History:** Contained 16 commits across `main` and `refactor` branches (from initial commit `6d7fa06` on 2026-02-23 through `ae06a5b` *"Add enterprise multi-department HMIS architecture and navigation"*), with **zero Git release tags**.
3. **Mock UI Strings:** `src/pages/ict/SystemConfiguration.tsx` previously displayed a hardcoded static metric `"v2.4.0 Release"`, which did not correspond to any real build or release tag.

### 3.2 Canonical Version Establishment (`v0.1.0`)
To establish a single, truthful source of version governance without fabricating production release history:
- **Canonical Version Number:** `0.1.0`
- **Version Status:** `Development` (`v0.1.0 (Development)` / `v0.1.0-dev`)
- **Single Source of Truth:** [`src/app/appInfo.ts`](../src/app/appInfo.ts) (`APP_INFO`) and [`package.json`](../package.json) (`"version": "0.1.0"`).

### 3.3 Where Version Information Is Displayed
| Location | File | Display Format |
| :--- | :--- | :--- |
| **Application Constants** | `src/app/appInfo.ts` | `version: "0.1.0"`, `status: "Development"`, `versionLabel: "v0.1.0 (Development)"` |
| **Package Manifest** | `package.json` | `"version": "0.1.0"` |
| **Login Screen (Left Hero & Header)** | `src/pages/auth/Login.tsx` | `Ithere Care • v0.1.0 (Development)` |
| **Main Departmental Sidebar Footer** | `src/components/navigation/MainSidebar.tsx` | `Ithere Systems — Hospital Edition` / `Powered by Ithere Care • v0.1.0-dev` |
| **Top Header Profile Flyout** | `src/components/Header.tsx` | `Ithere Care • v0.1.0-dev` |
| **Hospital Profile & Config** | `src/pages/system-admin/HospitalConfig.tsx` | `Powered by Ithere Care (v0.1.0-dev)` |
| **Global System Settings** | `src/pages/system-admin/SystemSettings.tsx` | `Application Version: v0.1.0 (Development)` |
| **ICT System Configuration** | `src/pages/ict/SystemConfiguration.tsx` | `Application Version: v0.1.0 (Development)` |

---

## 4. Executive Summary of the Application

### 4.1 What Ithere Care Does
**Ithere Care** is a modern, web-based Hospital Management Information System (HMIS) and Electronic Medical Record (EMR) frontend platform engineered for multispecialty hospitals and clinical networks. Delivered under **Ithere Systems — Hospital Edition**, it unifies clinical care delivery, diagnostic workflows, pharmacy operations, patient registration, health insurance (HMO) claims, hospital finance, human resources, supply chain, and executive governance within a single two-tier navigation workspace.

### 4.2 Target Users
- **Front-Desk & Medical Records Officers:** Patient registration (inpatient, outpatient/OPD, corporate/family), folder/card retrieval, and appointment scheduling.
- **Physicians, Surgeons & Specialists:** Outpatient consultations, inpatient ward rounds, clinical notes, prescriptions, and diagnostic test requests.
- **Nurses & Ward Matrons:** Vital signs triage, Electronic Medication Administration Record (eMAR), bed occupancy, and nursing handovers.
- **Medical Laboratory Scientists & Radiographers:** Test request intake, sample collection queues, result entry, reference range validation, and printable clinical lab reports.
- **Pharmacists & Dispensary Staff:** Prescription fulfillment, medication catalog management, batch/expiry inventory tracking, point-of-sale (POS) dispensing, and supplier orders.
- **Billing, Finance & HMO Officers:** Patient billing, cashier collections, HMO tariff management, pre-authorization codes, and claims adjudication.
- **Hospital Administrators, HR & ICT Teams:** Staff rostering, facility engineering, compliance audits, RBAC permissions, and system configuration.

### 4.3 Current Development Stage
The repository is an active **React 19 + TypeScript + Vite 7** single-page application (SPA) at **Version `0.1.0` (Development)**:
- **Backend API Integration:** Live REST integration (via Axios + TanStack React Query) is wired for **Staff Authentication (`POST /auth/login`)**, **Patient Directory & Registration (`GET /patients`, `POST /patients`)**, and **HMO Provider Lookup (`GET /hmos`)** against a configurable backend service (`VITE_API_URL=http://localhost:3000`).
- **Interactive Rich Modules:** **Hospital Command Dashboard**, **Patient Overview**, **Medical Laboratory (6 full screens + result/report modals)**, and **Pharmacy Operations (8 full screens)** feature rich interactive tables, search/filter controls, charts, and modals operating on local component state.
- **Enterprise Architecture Blueprint:** **144 specialized department sub-pages** across all 13 hospital divisions are wired into the router and navigation rail using the structured `HmisPlaceholderPage` component, providing department-specific KPIs, interactive sub-tab switching, and workflow capability specifications ready for progressive backend connection.

---

## 5. System Architecture Overview

### 5.1 High-Level Architecture Diagram

```
+-----------------------------------------------------------------------------------+
|                        CLIENT BROWSER (Staff Workstation)                         |
|                  Ithere Systems — Hospital Edition (Ithere Care)                  |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | PRESENTATION & NAVIGATION LAYER (React 19 + Tailwind CSS + Ant Design 6)    |  |
|  |  • Public Route: Login.tsx (/login)                                         |  |
|  |  • Protected Shell: DashboardLayout.tsx                                     |  |
|  |     ├── MainSidebar.tsx (13 Primary Hospital Departments)                   |  |
|  |     ├── DepartmentSubSidebar.tsx (Categorized Sub-Modules & Badges)         |  |
|  |     ├── Header.tsx (Breadcrumbs, Global Search, Dark Mode, Profile Flyout)  |  |
|  |     └── AppRoutes.tsx (169 Route Views across 13 Department Domains)        |  |
|  +-----------------------------------------------------------------------------+  |
|                                        |                                          |
|                                        v                                          |
|  +-----------------------------------------------------------------------------+  |
|  | STATE MANAGEMENT LAYER                                                      |  |
|  |  • Zustand Persisted Store: auth.store.ts (localStorage: "auth-storage")    |  |
|  |  • Zustand Domain Store: patient.store.ts (patients[], hmos[], loading)     |  |
|  |  • Server Cache: TanStack React Query v5 (QueryClientProvider)              |  |
|  |  • UI Theme Context: ThemeContext.tsx (Light/Dark + AntD ConfigProvider)    |  |
|  +-----------------------------------------------------------------------------+  |
|                                        |                                          |
|                                        v                                          |
|  +-----------------------------------------------------------------------------+  |
|  | SERVICE & HTTP CLIENT LAYER (src/services/* & src/features/*)               |  |
|  |  • Axios Instance (src/services/api.ts):                                    |  |
|  |     - baseURL: import.meta.env.VITE_API_URL                                 |  |
|  |     - Request Interceptor: Injects Authorization: Bearer <token>            |  |
|  |     - Response Interceptor: Catches HTTP 401 -> logout() -> /login          |  |
|  |  • Domain Services: auth.service.ts, patient.service.ts, hmo.service.ts     |  |
|  +-----------------------------------------------------------------------------+  |
+----------------------------------------|------------------------------------------+
                                         |
                            HTTPS / REST JSON API
                      (VITE_API_URL = http://localhost:3000)
                                         |
                                         v
+-----------------------------------------------------------------------------------+
|                         BACKEND API & DATABASE SERVER                             |
|                     (External Service at VITE_API_URL)                            |
|   • POST /auth/login       -> Staff JWT Authentication                            |
|   • GET  /patients         -> Paginated & Filtered Patient Records                |
|   • POST /patients         -> Multi-Category Patient Registration                 |
|   • GET  /hmos             -> Active HMO / Insurance Providers                    |
+-----------------------------------------------------------------------------------+
```

### 5.2 Technology Stack Summary
| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core UI Framework** | React + React DOM | `^19.2.0` | Component rendering and hooks architecture |
| **Language & Type System** | TypeScript | `~5.9.3` | Static typing across API payloads, stores, and props |
| **Build Tool & Dev Server** | Vite | `^7.3.1` | Fast ES module bundling and HMR |
| **Routing Engine** | React Router DOM | `^7.13.1` | Nested client-side routing and route guards |
| **Component Library** | Ant Design (`antd`) | `^6.3.1` | Enterprise tables, tabs, modals, drawers, and badges |
| **Styling System** | Tailwind CSS + PostCSS | `^3.4.17` | Utility-first styling with custom clinical color tokens |
| **Client State Management** | Zustand | `^5.0.11` | Persisted authentication store and patient store |
| **Async / Server State** | TanStack React Query | `^5.90.21` | Mutation lifecycle and server state synchronization |
| **HTTP Client** | Axios | `^1.13.6` | Centralized REST client with JWT & 401 interceptors |
| **Data Visualization** | Chart.js + `react-chartjs-2` | `^4.5.1` | Clinical telemetry, revenue, and lab analytics charts |
| **Iconography** | Lucide React + AntD Icons | `^0.575.0` | Medical, departmental, and UI action icons |
| **Notifications** | React Hot Toast | `^2.6.0` | Non-blocking toast alerts for API mutations |

---

## 6. User Roles and Access Control

### 6.1 Current Authentication Implementation
1. **Login Entry (`src/pages/auth/Login.tsx`):**
   - Staff enter `username` and `password`.
   - Submits via TanStack React Query `useMutation` calling `loginUser` (`POST /auth/login`).
   - On success, extracts `res.data.user` and `res.data.access_token`, stores them via `useAuthStore.getState().setAuth(user, token)`, displays a success toast, and redirects to `/`.
2. **State Persistence (`src/store/auth.store.ts`):**
   - Uses Zustand's `persist` middleware under key `"auth-storage"` in `localStorage`.
   - Stores `{ user: { id, name, email, role } | null, token: string | null, isAuthenticated: boolean }`.
3. **Route Protection (`src/routes/ProtectedRoutes.tsx`):**
   - Wraps the entire `DashboardLayout` tree in `AppRoutes.tsx`.
   - Checks `useAuthStore((s) => s.isAuthenticated)`. If `false`, redirects immediately to `/login`.
4. **HTTP Token Injection & Expiry Handling (`src/services/api.ts`):**
   - **Request Interceptor:** Reads `token` from `useAuthStore.getState()` and attaches `Authorization: Bearer ${token}` to outgoing requests.
   - **Response Interceptor:** Detects HTTP `401 Unauthorized`, invokes `useAuthStore.getState().logout()`, and redirects the browser to `/login`.

### 6.2 Role-Based Access Control (RBAC) Status
- **Current State:** Authentication is binary (`isAuthenticated: true | false`). Once authenticated, a staff member can navigate to all 13 departments in the frontend UI. The logged-in user's role (`user?.role || "Administrator"`) is displayed in the `Header` and `MainSidebar`.
- **RBAC Administration UI:** `src/pages/system-admin/RolePermissions.tsx` (`/system-admin/permissions`) and `src/pages/system-admin/UserAccounts.tsx` (`/system-admin/users`) define the administrative UI structure for managing hospital roles (Medical Director, Consultant, Resident Doctor, Nursing Officer, Pharmacist, Lab Scientist, Cashier, HMO Officer, HR Manager, System Admin), currently rendered as staged `HmisPlaceholderPage` views pending backend RBAC policy enforcement.

---

## 7. Complete Application Walkthrough

### 7.1 Authentication & Login Screen (`/login`)
- **File:** [`src/pages/auth/Login.tsx`](../src/pages/auth/Login.tsx)
- **Visual & Functional Layout:**
  - **Left Split Hero Panel (Desktop):** Features high-contrast dark clinical imagery with emerald ambient lighting, the **Ithere Care** brand emblem, the **Ithere Systems • Hospital Edition** badge, a live status pill (*"Ithere Systems — Hospital Edition • Powered by Ithere Care"*), headline *"Integrated care, synchronized in real time"*, and bottom corporate attribution (*"Ithere Technology Group — The Future Has an Address."* + `Ithere Care • v0.1.0 (Development)`).
  - **Right Authentication Panel:** Displays the `Ithere Systems — Hospital Edition` overline, *"Staff Sign In"* heading, `Powered by Ithere Care • v0.1.0 (Development)` subtitle, `username` and `password` fields, loading spinner button (*"Authorize & Enter"*), shake animation on invalid credentials, and inline error banner.

### 7.2 Main Application Shell & Two-Tier Navigation
- **Files:** [`src/layouts/DashboardLayouts.tsx`](../src/layouts/DashboardLayouts.tsx), [`src/components/navigation/MainSidebar.tsx`](../src/components/navigation/MainSidebar.tsx), [`src/components/navigation/DepartmentSubSidebar.tsx`](../src/components/navigation/DepartmentSubSidebar.tsx), [`src/components/Header.tsx`](../src/components/Header.tsx)
- **Navigation Architecture:**
  1. **Primary Departmental Rail (`MainSidebar.tsx`):** Dark slate glassmorphic left sidebar displaying the **Ithere Systems / Ithere Care (Hospital Edition)** brand block, instant department filter (`Filter 13 depts...`), all **13 hospital departments** with active emerald indicators, a logged-in staff card (`Dr. Alex / Administrator`), quick links to System Settings (`/system-admin/settings`) and Sign Out, and the footer (`Ithere Systems — Hospital Edition • Powered by Ithere Care • v0.1.0-dev • © 2026 Ithere Technology Group`).
  2. **Contextual Department Sub-Sidebar (`DepartmentSubSidebar.tsx`):** Dynamically updates whenever a department is selected in the primary rail, grouping that department's modules into logical categories with collapsible sections and live badge counters (`Live`, `Queue`, `24`, `STAT`, `8`, `5`).
  3. **Top Application Header (`Header.tsx`):** Displays dynamic breadcrumbs (`Department > Current Module`), a global command search input (`Search patients (UHID, Name), clinical modules, lab orders...`), quick action buttons (**+ Patient** -> `/patients/create`, **Lab Queue** -> `/lab/queue`), active department status pill, Dark/Light theme toggle, notification bell with unread indicator, and User Profile flyout showing `Ithere Care • v0.1.0-dev`.

### 7.3 Walkthrough of the 13 Hospital Departments

#### Department 1: Command Center (`/`)
- **Primary View:** [`HospitalDashboard.tsx`](../src/pages/dashboard/HospitalDashboard.tsx) — Executive Hospital Command Center featuring:
  - Live institutional banner (*"Hospital Enterprise Command Center"*), link to Register Patient (`/patients/create`) and Analytics Hub (`/reports`).
  - **6 Primary KPI Cards:** Total Registered Patients (`28,450`), Outpatient Visits Today (`342`), Inpatient Bed Occupancy (`186 / 220` — `84.5%`), Emergency Triage Queue (`14 Active`), Daily Revenue Collected (`₦ 18.4M`), and Pending Lab & Imaging (`47 Orders`).
  - **12-Department Quick-Launch Grid:** Interactive cards routing directly to every hospital division with live status metrics.
  - **Critical Clinical & Operational Alerts Panel:** Real-time alerts for ICU Ventilator Bay 4, Blood Bank O-Negative threshold, HMO Claims batch submission, and Pharmacy cold-chain telemetry.
  - **Live Ward & Bed Occupancy Breakdown:** Progress bars across ICU (`93%`), Maternity (`83%`), Male/Female Medical & Surgical Wards (`88%`), Pediatrics (`75%`), and Private Executive Suites (`70%`).
- **Additional Sub-Views (5):** Executive KPIs (`/dashboard/executive`), Clinical & Triage Command (`/dashboard/clinical`), Bed & Ward Occupancy Map (`/dashboard/bed-occupancy`), Revenue & Billing Pulse (`/dashboard/revenue-pulse`), and Departmental Performance (`/dashboard/performance`).

#### Department 2: Patient Management (`/patients/*`)
- **Patient Overview (`/patients/dashboard`):** [`PatientDashboard.tsx`](../src/pages/patients/PatientDashboard.tsx) — Displays summary cards, monthly admission bar chart (Chart.js), and recent registrations table.
- **Patient Directory (`/patients/list`):** [`Patients.tsx`](../src/pages/patients/Patients.tsx) — **Live Backend API Integrated** (`usePatientStore.fetchPatients`). Supports real-time debounced search (`350ms`), category filtering (`All`, `General`, `Private`, `Corporate`, `Insurance`, `Family`, `OPD`), status filtering (`Active`, `Inactive`, `Pending`), server pagination, and opens detailed patient profile drawers/modals (`PatientProfile.tsx` and `OpdPatientProfile.tsx`).
- **Patient Registration Hub (`/patients/create`):** [`CreatePatientDashboard.tsx`](../src/pages/patients/CreatePatientDashboard.tsx) — Interactive multi-flow registration workspace supporting:
  - **Inpatient / Full Registration (`CreateNewPatient.tsx`):** Multi-step form for General, Private, Corporate, Insurance (with live `GET /hmos` dropdown), and Family categories, including demographic data, next-of-kin, and category-specific fields, submitting to `POST /patients`.
  - **Outpatient / OPD Quick Registration (`CreateOPDPatient.tsx`):** Streamlined outpatient intake form submitting to `POST /patients`.
- **Additional Sub-Views (6):** Admission & Bed Assignment (`/patients/admissions`), Referrals & Transfers (`/patients/referrals`), Discharge Summary (`/patients/discharges`), Medical Records & Archive (`/patients/records`), Birth & Death Registry (`/patients/vital-registry`), and Patient Portal & Consents (`/patients/consents`).

#### Department 3: Clinical Services (`/clinical/*` & `/appointments`)
- **Appointments & Scheduling (`/appointments`):** [`src/pages/appointments/Home.tsx`](../src/pages/appointments/Home.tsx) — Connects to `usePatientStore` to manage outpatient queues and quick registration.
- **Clinical Sub-Views (16):** Outpatient (OPD) Clinic (`/clinical/opd`), Triage & Vitals Station (`/clinical/triage`), Doctor's Consultation (`/clinical/consultation`), Inpatient (IPD) & Ward Rounds (`/clinical/ipd`), Electronic Medical Record (`/clinical/emr`), Nursing Station & Care Plans (`/clinical/nursing`), Intensive Care Unit (`/clinical/icu`), Emergency & Trauma (`/clinical/emergency`), Operating Theatre & Surgery (`/clinical/theatre`), Maternity, Labor & NICU (`/clinical/maternity`), Antenatal (ANC) & Immunization (`/clinical/anc`), Physiotherapy & Rehab (`/clinical/physiotherapy`), Dietary & Clinical Nutrition (`/clinical/dietary`), Dental & Maxillofacial (`/clinical/dental`), Ophthalmology & ENT (`/clinical/ophthalmology`), and Mental Health & Psychiatry (`/clinical/mental-health`).

#### Department 4: Diagnostics & Allied (`/lab/*` & `/diagnostics/*`)
- **Laboratory Dashboard (`/lab/dashboard`):** [`LabDashboard.tsx`](../src/pages/lab/LabDashboard.tsx) — Interactive metrics, Chart.js workload analytics, and recent test activity.
- **New Lab Requests (`/lab/new-requests`):** [`NewLabRequests.tsx`](../src/pages/lab/NewLabRequests.tsx) — Interactive intake table for incoming doctor lab orders with priority badges (`Emergency`, `Urgent`, `Normal`) and one-click acceptance/rejection.
- **All Lab Requests (`/lab/requests`):** [`LabRequests.tsx`](../src/pages/lab/LabRequests.tsx) — Searchable and filterable master registry of laboratory test requests.
- **Active Test Queue (`/lab/queue`):** [`LabQueue.tsx`](../src/pages/lab/LabQueue.tsx) — Phlebotomy and bench processing queue with status progression (`Waiting`, `Sample Collected`, `Processing`, `Completed`).
- **Lab Results & Validation (`/lab/results`):** [`LabResults.tsx`](../src/pages/lab/LabResults.tsx) + [`LabResultModal.tsx`](../src/components/modal/LabResultModal.tsx) — Interactive quantitative parameter entry and pathologist validation modal.
- **Lab Reports & Printouts (`/lab/reports`):** [`LabReports.tsx`](../src/pages/lab/LabReports.tsx) + [`LabReportModal.tsx`](../src/components/modal/LabReportModal.tsx) — Formatted clinical laboratory report viewer with parameter reference ranges and print trigger.
- **Additional Diagnostic Sub-Views (4):** Radiology & Imaging (PACS) (`/diagnostics/radiology`), CT, MRI & Ultrasound (`/diagnostics/imaging`), Blood Bank & Transfusion (`/diagnostics/blood-bank`), and Histopathology & Mortuary (`/diagnostics/pathology`).

#### Department 5: Pharmacy & Dispensary (`/pharmacy/*`)
- **Pharmacy Dashboard (`/pharmacy/dashboard`):** [`PharmacyDashboard.tsx`](../src/pages/pharmacy/PharmacyDashboard.tsx) — Revenue, stock health, expiry alerts, and dispensing velocity charts.
- **Medication Catalog (`/pharmacy/medications`):** [`Medications.tsx`](../src/pages/pharmacy/Medications.tsx) — Searchable formulary table with dosage forms, strengths, categories, and pricing.
- **Stock & Batch Inventory (`/pharmacy/inventory`):** [`Inventory.tsx`](../src/pages/pharmacy/Inventory.tsx) — Batch number tracking, stock levels, reorder thresholds, and expiry alerts.
- **e-Prescriptions Queue (`/pharmacy/prescriptions`):** [`Prescriptions.tsx`](../src/pages/pharmacy/Prescriptions.tsx) — Physician prescription verification and dispensing workflow.
- **Purchase Orders (`/pharmacy/orders`):** [`PharmacyOrders.tsx`](../src/pages/pharmacy/PharmacyOrders.tsx) — Restock order creation and tracking.
- **Pharmacy POS & Sales (`/pharmacy/sales`):** [`Sales.tsx`](../src/pages/pharmacy/Sales.tsx) — Over-the-counter and outpatient prescription billing/dispensing register.
- **Pharmaceutical Suppliers (`/pharmacy/suppliers`):** [`Suppliers.tsx`](../src/pages/pharmacy/Suppliers.tsx) — Vendor directory and supply lead-time tracking.
- **Narcotics & Cold Chain (`/pharmacy/management`):** [`PharmacyManagement.tsx`](../src/pages/pharmacy/PharmacyManagement.tsx) — Multi-tab pharmacy governance screen.
- **eMAR & Ward Dispensing (`/pharmacy/emar`):** [`EmarDispensing.tsx`](../src/pages/pharmacy/EmarDispensing.tsx) — Inpatient unit-dose administration schedule.

#### Departments 6 through 13 (Enterprise Hospital Operations)
- **Department 6 — Finance & Revenue (`/finance/*`, 11 views):** Financial Overview, Patient Billing & Invoicing, Cashier & POS Collections, Inpatient Deposit & Wallet, Service Tariff & Price Book, General Ledger & Chart of Accounts, Accounts Receivable & Credit, Accounts Payable & Vouchers, Doctor Fee Split & Honorarium, Budgeting & Cost Centers, Financial Statements & Tax.
- **Department 7 — HMO & Insurance (`/hmo/*`, 12 views):** HMO & Insurance Command, Accredited HMO Directory, NHIA / State Schemes, Corporate Retainers, Enrollee Eligibility Check, Pre-Authorization Requests, Tariff & Capitation Plans, Claims Generation & Scrubbing, Claims Submission & Batching, Remittance & Reconciliation, Denials & Appeals Management, HMO Utilization Analytics.
- **Department 8 — Administration & HR (`/hr/*`, 16 views):** HR & Workforce Overview, Staff Directory & Profiles, Medical Credentialing & Licenses, Shift Scheduling & Duty Roster, Attendance & Biometrics, Leave & Absence Management, Payroll & Salary Structure, Allowances, Call Duty & Overtime, Tax, Pension & Statutory, Recruitment & Onboarding, Performance & Appraisals, CME & Training (LMS), Disciplinary & Welfare, Internal Memo & Circulars, Visitor & Front Desk Log, Mortuary & Deceased Admin.
- **Department 9 — Procurement & Supply (`/procurement/*`, 15 views):** Supply Chain Overview, Purchase Requisitions, RFQ & Tender Management, Purchase Orders (PO), Goods Received Note (GRN), Central Medical Store, Department Sub-Stores, Stock Transfers & Issues, Consumables & Surgical Kits, Vendor & Supplier Registry, Vendor SLA & Contracts, Asset & Equipment Registry, Biomedical Preventive Maint., Batch & Expiry Tracking, Stock Audit & Valuation.
- **Department 10 — Quality & Compliance (`/quality/*`, 13 views):** Quality & Safety Overview, Clinical Incident Reporting, Morbidity & Mortality (M&M), Infection Control (IPC), Clinical Audit & Pathways, Pharmacovigilance & ADR, Patient Feedback & Complaints, Accreditation & Standards, Standard Operating Procedures, Clinical Risk Register, Medical Ethics & Consent Audit, Occupational Health & Safety, Regulatory Returns & Portals.
- **Department 11 — Operations & Facilities (`/operations/*`, 14 views):** Operations Command, Housekeeping & Ward Sanitation, Laundry & Linen Management, CSSD & Sterilization, Biomedical Engineering, Ambulance & Fleet Dispatch, Medical Gas & Oxygen Plant, Power, HVAC & Utility Telemetry, Medical Waste & Hazmat, Hospital Kitchen & Catering, Security & CCTV Command, Parking & Access Control, Facility Work Orders, Disaster & Code Blue Drills.
- **Department 12 — ICT & Digital Health (`/ict/*`, 12 views):** ICT Infrastructure Overview, System Configuration (`v0.1.0`), HL7 / FHIR & PACS Integration, LIS / RIS Middleware, Telemedicine & Virtual Care, Patient Mobile App & SMS, Biometric & Smart Card ID, Network, Server & Cloud Status, Database Backup & DR, Cybersecurity & Threat Monitor, IT Helpdesk & Workstations, API Keys & Webhooks.
- **Department 13 — Reports & Analytics (`/reports/*`, 10 views) & System Administration (`/system-admin/*`, 9 views):** Enterprise Analytics Hub, HMIS Monthly Returns (NHMIS), Clinical & Disease Surveillance, Financial & Revenue Analytics, Pharmacy & Stock Analytics, Lab & Diagnostic Turnaround, Staff Productivity & Roster, Custom Report Builder, Scheduled Exports & BI, Executive Board Pack; plus System Admin Overview, User Accounts, Role & Permission Matrix, Department & Unit Setup, Ward & Bed Master Config, Notification & Alert Rules, Audit Logs, Hospital Profile (`HospitalConfig.tsx`), and Global System Settings (`SystemSettings.tsx`).

---

## 8. Module-by-Module Functional Breakdown

### 8.1 Department Summary Matrix

| # | Department | Route Prefix | Total Views | Live API Views | Interactive UI Views | Staged Blueprint Views (`HmisPlaceholderPage`) |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 1 | **Command Center** | `/`, `/dashboard/*` | 6 | 0 | 1 | 5 |
| 2 | **Patient Management** | `/patients/*` | 11 | 4 | 1 | 6 |
| 3 | **Clinical Services** | `/appointments`, `/clinical/*` | 17 | 1 | 0 | 16 |
| 4 | **Diagnostics & Allied** | `/lab/*`, `/diagnostics/*` | 10 | 0 | 6 | 4 |
| 5 | **Pharmacy & Dispensary** | `/pharmacy/*` | 9 | 0 | 8 | 1 |
| 6 | **Finance & Revenue** | `/finance/*` | 11 | 0 | 0 | 11 |
| 7 | **HMO & Insurance** | `/hmo/*` | 12 | 0 | 0 | 12 |
| 8 | **Administration & HR** | `/hr/*` | 16 | 0 | 0 | 16 |
| 9 | **Procurement & Supply** | `/procurement/*` | 15 | 0 | 0 | 15 |
| 10 | **Quality & Compliance** | `/quality/*` | 13 | 0 | 0 | 13 |
| 11 | **Operations & Facilities** | `/operations/*` | 14 | 0 | 0 | 14 |
| 12 | **ICT & Digital Health** | `/ict/*` | 12 | 0 | 0 | 12 |
| 13 | **Reports & System Admin** | `/reports/*`, `/system-admin/*` | 19 | 0 | 0 | 19 |
| **—** | **Authentication & Legacy** | `/login`, `/patients/new`, `/patients/opd/new` | 4 | 4 | 0 | 0 |
| **TOTAL** | **All Application Views** | **13 Departments + Auth** | **169** | **9** | **16** | **144** |

### 8.2 Detailed Verification of Core Implemented Modules

| Module / Screen | Route | Component File | Verification Tier | Backend API / State Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| **Staff Login** | `/login` | `src/pages/auth/Login.tsx` | **1. Fully Implemented (API Wired)** | `POST /auth/login` via `loginUser` + `useAuthStore` JWT persistence |
| **Patient Directory** | `/patients/list` | `src/pages/patients/Patients.tsx` | **1. Fully Implemented (API Wired)** | `GET /patients` with `page`, `limit`, `search`, `category`, `status` via `usePatientStore` |
| **Registration Hub** | `/patients/create` | `src/pages/patients/CreatePatientDashboard.tsx` | **1. Fully Implemented (API Wired)** | Switches between Inpatient and OPD registration flows; connected to `usePatientStore` |
| **Inpatient Registration** | `/patients/new` | `src/pages/patients/CreateNewPatient.tsx` | **1. Fully Implemented (API Wired)** | `POST /patients` & `GET /hmos`; supports General, Private, Corporate, Insurance, Family |
| **OPD Quick Registration** | `/patients/opd/new` | `src/pages/patients/CreateOPDPatient.tsx` | **1. Fully Implemented (API Wired)** | `POST /patients` (`category: "OPD"`) via `usePatientStore.addPatient` |
| **Patient Profile Modals** | Modal / Drawer | `PatientProfile.tsx`, `OpdPatientProfile.tsx` | **2. Partially Implemented** | Renders live patient attributes from `Patient` object; edit/action buttons are local UI |
| **Appointments Home** | `/appointments` | `src/pages/appointments/Home.tsx` | **2. Partially Implemented** | Reads live patient records from `usePatientStore`; appointment scheduling actions are local |
| **Hospital Command Center** | `/` | `src/pages/dashboard/HospitalDashboard.tsx` | **3. UI Only (Interactive Mock)** | Rich KPI cards, 12-department launcher, clinical alerts, and ward occupancy bars |
| **Patient Overview** | `/patients/dashboard` | `src/pages/patients/PatientDashboard.tsx` | **3. UI Only (Interactive Mock)** | Chart.js monthly admissions chart + mock recent patients table |
| **Lab Dashboard** | `/lab/dashboard` | `src/pages/lab/LabDashboard.tsx` | **3. UI Only (Interactive Mock)** | Lab KPIs, test category charts, and recent activity feed |
| **New Lab Requests** | `/lab/new-requests` | `src/pages/lab/NewLabRequests.tsx` | **3. UI Only (Interactive Mock)** | Interactive request acceptance/rejection with priority filtering |
| **All Lab Requests** | `/lab/requests` | `src/pages/lab/LabRequests.tsx` | **3. UI Only (Interactive Mock)** | Searchable table of laboratory requests |
| **Active Test Queue** | `/lab/queue` | `src/pages/lab/LabQueue.tsx` | **3. UI Only (Interactive Mock)** | Interactive status progression (`Waiting` -> `Sample Collected` -> `Processing` -> `Completed`) |
| **Lab Results & Modal** | `/lab/results` | `LabResults.tsx`, `LabResultModal.tsx` | **3. UI Only (Interactive Mock)** | Quantitative result entry modal with local state updates |
| **Lab Reports & Modal** | `/lab/reports` | `LabReports.tsx`, `LabReportModal.tsx` | **3. UI Only (Interactive Mock)** | Formatted clinical lab report preview with reference ranges |
| **Pharmacy Dashboard** | `/pharmacy/dashboard` | `src/pages/pharmacy/PharmacyDashboard.tsx` | **3. UI Only (Interactive Mock)** | Pharmacy revenue, stock alerts, and chart analytics |
| **Medications Catalog** | `/pharmacy/medications` | `src/pages/pharmacy/Medications.tsx` | **3. UI Only (Interactive Mock)** | Searchable drug formulary table with add/edit modal state |
| **Pharmacy Inventory** | `/pharmacy/inventory` | `src/pages/pharmacy/Inventory.tsx` | **3. UI Only (Interactive Mock)** | Batch stock levels and reorder alerts |
| **Prescriptions Queue** | `/pharmacy/prescriptions` | `src/pages/pharmacy/Prescriptions.tsx` | **3. UI Only (Interactive Mock)** | Prescription verification and dispensing status |
| **Pharmacy Orders** | `/pharmacy/orders` | `src/pages/pharmacy/PharmacyOrders.tsx` | **3. UI Only (Interactive Mock)** | Supplier purchase order tracking |
| **Pharmacy POS Sales** | `/pharmacy/sales` | `src/pages/pharmacy/Sales.tsx` | **3. UI Only (Interactive Mock)** | Interactive POS cart and sales transaction log |
| **Pharmacy Suppliers** | `/pharmacy/suppliers` | `src/pages/pharmacy/Suppliers.tsx` | **3. UI Only (Interactive Mock)** | Pharmaceutical vendor directory |
| **Pharmacy Management** | `/pharmacy/management` | `src/pages/pharmacy/PharmacyManagement.tsx` | **3. UI Only (Interactive Mock)** | Multi-tab pharmacy operations hub |
| **144 Enterprise Sub-Modules** | Across 13 Depts | `src/pages/*/*.tsx` (`HmisPlaceholderPage`) | **4. Planned / UI Staging Shell** | Interactive tabs, department KPIs, search filter, and structured capability blueprints |

---

## 9. Core Hospital Workflows

### 9.1 End-to-End Patient & Clinical Workflow Diagram

```
+-----------------------------------------------------------------------------------+
|                ITHERE CARE — END-TO-END HOSPITAL PATIENT WORKFLOW                 |
+-----------------------------------------------------------------------------------+

  [1. STAFF AUTHENTICATION]
       │  POST /auth/login (JWT issued & stored in auth.store.ts)
       ▼
  [2. PATIENT REGISTRATION & INTAKE] (/patients/create)
       ├──► Outpatient Quick Intake (CreateOPDPatient.tsx) ──► POST /patients (OPD)
       └──► Full Category Registration (CreateNewPatient.tsx) ──► POST /patients
              ├── General / Private
              ├── Corporate / Family
              └── Insurance / HMO (Fetches active HMOs via GET /hmos)
       │
       ▼
  [3. PATIENT DIRECTORY & RETRIEVAL] (/patients/list)
       │  GET /patients?page=1&limit=10&search=...&category=...
       │  Opens PatientProfile.tsx / OpdPatientProfile.tsx
       ▼
  [4. CLINICAL TRIAGE & CONSULTATION] (/appointments & /clinical/*)
       │  Vitals Triage ──► Doctor Consultation ──► Clinical Orders
       ├─────────────────────────────┬─────────────────────────────┐
       ▼                             ▼                             ▼
  [5A. DIAGNOSTICS & LAB]     [5B. PHARMACY & DISPENSARY]   [5C. REVENUE & HMO]
  (/lab/new-requests)         (/pharmacy/prescriptions)     (/finance/* & /hmo/*)
   • Accept Lab Order          • Verify e-Prescription       • Tariff Lookup
   • Collect Sample (/queue)   • Check Batch Stock           • Cashier POS / Deposit
   • Enter Results (/results)  • Dispense via POS (/sales)   • HMO Pre-Auth & Claims
   • Print Report (/reports)   • Update Inventory
```

### 9.2 Detailed Workflow Descriptions
1. **Patient Registration & Categorization Workflow (Live Backend Connected):**
   - Receptionist navigates to `/patients/create` (`CreatePatientDashboard.tsx`) and selects either **Inpatient / Full Registration** or **Outpatient (OPD) Registration**.
   - In full registration (`CreateNewPatient.tsx`), selecting `Insurance` dynamically queries `GET /hmos` via `usePatientStore.fetchHmos()` to populate accredited HMO providers and policy numbers.
   - Submitting dispatches `POST /patients` via `PatientService.createPatient`, normalizes the returned record (`normalizePatient`), and prepends it to the live store.
2. **Laboratory Order-to-Report Workflow (Interactive UI State):**
   - Lab scientist reviews incoming physician orders in `/lab/new-requests` (`NewLabRequests.tsx`), filtered by urgency (`Emergency`, `Urgent`, `Normal`).
   - Accepted orders move to `/lab/queue` (`LabQueue.tsx`), advancing from `Waiting` -> `Sample Collected` -> `Processing` -> `Completed`.
   - Quantitative parameters are entered in `/lab/results` (`LabResultModal.tsx`) and formatted into printable diagnostic reports in `/lab/reports` (`LabReportModal.tsx`).
3. **Pharmacy Prescription-to-Dispensing Workflow (Interactive UI State):**
   - Pharmacist inspects incoming prescriptions in `/pharmacy/prescriptions`, cross-checks drug availability and batch expiry in `/pharmacy/inventory` and `/pharmacy/medications`, and records dispensing transactions in `/pharmacy/sales`.

---

## 10. Database and Data Model Summary

### 10.1 Core Frontend Domain Entities
The frontend TypeScript data models (defined in `src/types/patient.d.ts`, `src/store/auth.store.ts`, and `src/services/hmo.service.ts`) reflect the underlying backend relational schema:

```
+---------------------------------------+       +---------------------------------------+
|                 User                  |       |                  Hmo                  |
+---------------------------------------+       +---------------------------------------+
| id: string (PK)                       |       | id: string / number (PK)              |
| name: string                          |       | name: string                          |
| email: string                         |       | code?: string                         |
| role?: string                         |       | status?: string                       |
+---------------------------------------+       +---------------------------------------+
                                                                    |
                                                                    | 1..* (hmoId)
                                                                    v
+---------------------------------------------------------------------------------------+
|                                        Patient                                        |
+---------------------------------------------------------------------------------------+
| id: number (PK)                                                                       |
| cardNumber: string (Unique Hospital / Folder Number)                                  |
| firstName: string                                                                     |
| surname: string                                                                       |
| otherName?: string                                                                    |
| gender: "Male" | "Female" | string                                                    |
| dob: string (ISO Date)                                                                |
| phoneNumber: string                                                                   |
| email?: string                                                                        |
| address?: string                                                                      |
| occupation?: string                                                                   |
| maritalStatus?: string                                                                |
| nationality?: string                                                                  |
| stateOfOrigin?: string                                                                |
| localGovernment?: string                                                              |
| religion?: string                                                                     |
| bloodGroup?: string                                                                   |
| genotype?: string                                                                     |
| category: "General" | "Private" | "Corporate" | "Insurance" | "Family" | "OPD"        |
| status: "Active" | "Inactive" | "Pending"                                             |
| nextOfKinName?: string                                                                |
| nextOfKinRelationship?: string                                                        |
| nextOfKinPhone?: string                                                               |
| nextOfKinAddress?: string                                                             |
| hmoId?: number | string (FK -> Hmo.id)                                                |
| hmoNumber?: string (Enrollee Policy ID)                                               |
| companyName?: string (For Corporate Category)                                         |
| employeeId?: string                                                                   |
| familyHeadId?: number (Self-referential FK for Family Category)                       |
| createdAt: string (ISO Timestamp)                                                     |
| updatedAt?: string (ISO Timestamp)                                                    |
+---------------------------------------------------------------------------------------+
```

### 10.2 Data Normalization Layer
In [`src/services/patient.service.ts`](../src/services/patient.service.ts), `normalizePatient()` acts as an anti-corruption adapter between backend snake_case / camelCase variations and the strict frontend `Patient` interface, ensuring consistent rendering of `cardNumber`, `firstName`, `surname`, `category`, and `status` across all tables and profile modals.

---

## 11. API and Backend Overview

### 11.1 Configured HTTP Client (`src/services/api.ts`)
- **Base URL:** `import.meta.env.VITE_API_URL` (configured in `.env` as `http://localhost:3000`).
- **Headers:** `Content-Type: application/json`, plus automatic `Authorization: Bearer <token>` injection from `useAuthStore`.
- **Error Interception:** Automatic session teardown (`logout()`) and redirect to `/login` on HTTP `401`.

### 11.2 Verified REST API Endpoints

| HTTP Method | Endpoint Path | Service Function | Request Payload / Query Params | Response Structure |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | `loginUser` (`src/features/auth/authApi.ts`) | `{ username: string, password: string }` | `{ data: { user: User, access_token: string } }` |
| `GET` | `/patients` | `PatientService.getPatients` (`src/services/patient.service.ts`) | `?page=number&limit=number&search=string&category=string&status=string` | Paginated array `{ data: Patient[], meta: { total, page, lastPage } }` |
| `POST` | `/patients` | `PatientService.createPatient` (`src/services/patient.service.ts`) | `Partial<Patient>` (Demographics, Category, NOK, HMO/Corporate fields) | Created `Patient` object |
| `GET` | `/hmos` | `HmoService.getHmos` (`src/services/hmo.service.ts`) | None | Array of accredited `Hmo` objects (`Hmo[]` or `{ data: Hmo[] }`) |

---

## 12. Frontend Structure Overview

### 12.1 Source Directory Architecture (`src/`)

```
src/
├── app/
│   └── appInfo.ts                 # Canonical Ithere Care & Ithere Systems brand/version constants
├── assets/                        # Static visual assets
├── components/
│   ├── Header.tsx                 # Top workspace bar, global search, dark mode, profile flyout
│   ├── Sidebar.tsx                # Legacy single-rail sidebar (updated to Ithere Care)
│   ├── modal/
│   │   ├── LabReportModal.tsx     # Printable laboratory report modal
│   │   ├── LabResultModal.tsx     # Quantitative lab result entry modal
│   │   └── patients/
│   │       ├── PatientProfile.tsx # Full inpatient/category profile view modal
│   │       └── OpdPatientProfile.tsx # Outpatient profile drawer/modal
│   ├── navigation/
│   │   ├── MainSidebar.tsx        # Primary 13-department navigation rail
│   │   └── DepartmentSubSidebar.tsx # Secondary contextual module navigation rail
│   └── ui/
│       └── HmisPlaceholderPage.tsx # Reusable enterprise module blueprint shell
├── context/
│   └── ThemeContext.tsx           # Light/Dark mode state & Ant Design token provider
├── features/
│   └── auth/
│       └── authApi.ts             # Login mutation API wrapper
├── layouts/
│   └── DashboardLayouts.tsx       # Master two-tier sidebar + header + Outlet layout
├── navigation/
│   └── navigationConfig.ts        # Master registry of 13 departments & 135+ navigation links
├── pages/
│   ├── auth/Login.tsx             # Staff authentication screen
│   ├── dashboard/*                # 6 Command Center views (HospitalDashboard + 5 sub-views)
│   ├── patients/*                 # 11 Patient Management views
│   ├── appointments/*             # Outpatient appointments view
│   ├── clinical/*                 # 16 Clinical Services views
│   ├── lab/*                      # 6 Medical Laboratory views
│   ├── diagnostics/*              # 4 Radiology, Imaging, Blood Bank & Pathology views
│   ├── pharmacy/*                 # 9 Pharmacy & Dispensary views
│   ├── finance/*                  # 11 Finance & Revenue Cycle views
│   ├── hmo/*                      # 12 HMO & Health Insurance views
│   ├── hr/*                       # 16 Administration & HR views
│   ├── procurement/*              # 15 Procurement & Supply Chain views
│   ├── quality/*                  # 13 Quality & Compliance views
│   ├── operations/*               # 14 Operations & Facilities views
│   ├── ict/*                      # 12 ICT & Digital Health views
│   ├── reports/*                  # 10 Enterprise Reports & Analytics views
│   └── system-admin/*             # 9 System Administration & Settings views
├── routes/
│   ├── AppRoutes.tsx              # Complete React Router v7 route tree (169 routes)
│   └── ProtectedRoutes.tsx        # Authentication route guard
├── services/
│   ├── api.ts                     # Axios instance with JWT & 401 interceptors
│   ├── auth.service.ts            # Auth helper functions
│   ├── patient.service.ts         # Patient CRUD & normalization service
│   └── hmo.service.ts             # HMO directory service
├── store/
│   ├── auth.store.ts              # Zustand persisted authentication store
│   └── patient.store.ts           # Zustand patient & HMO state store
└── theme/
    └── themeConfig.ts             # Emerald clinical brand palette (#00bc7d) & AntD tokens
```

---

## 13. Configuration and Environment Overview

### 13.1 Environment Variables (`.env`)
- `VITE_API_URL=http://localhost:3000` — Defines the target backend REST API origin consumed by `src/services/api.ts`.

### 13.2 Build & Styling Configuration
- **[`package.json`](../package.json):** Defines scripts `dev` (`vite`), `build` (`tsc -b && vite build`), `lint` (`eslint .`), and `preview` (`vite preview`), with `"version": "0.1.0"`.
- **[`tailwind.config.js`](../tailwind.config.js) & [`src/theme/themeConfig.ts`](../src/theme/themeConfig.ts):** Configures the signature clinical emerald primary palette (`#00bc7d`, `#009e68`, `#007f53`), dark-mode surface tokens (`#141414`, `#1f1f1f`), and `Inter` typography.
- **[`index.html`](../index.html):** Configures `<title>Ithere Care — Ithere Systems Hospital Edition</title>`, `<meta name="application-name" content="Ithere Care" />`, and favicon `/ithere-icon.svg`.

---

## 14. Current Implementation Status

### 14.1 Summary by Verification Category
1. **Fully Implemented & Backend API Wired (9 Views / Flows):**
   - Staff Authentication (`Login.tsx` -> `POST /auth/login`)
   - Patient Directory (`Patients.tsx` -> `GET /patients` with search, category/status filters, pagination)
   - Patient Registration Hub (`CreatePatientDashboard.tsx`)
   - Multi-Category Inpatient Registration (`CreateNewPatient.tsx` -> `POST /patients`, `GET /hmos`)
   - Outpatient Quick Registration (`CreateOPDPatient.tsx` -> `POST /patients`)
   - Legacy route aliases (`/patients/new`, `/patients/opd/new`)
2. **Partially Implemented (3 Views / Modals):**
   - `PatientProfile.tsx` & `OpdPatientProfile.tsx` (render live backend patient data; secondary action tabs are UI-staged)
   - `src/pages/appointments/Home.tsx` (connected to live `usePatientStore` patient list; scheduling state is local)
3. **Interactive UI with Local Mock State (16 Views + 2 Modals):**
   - Executive Command Center (`HospitalDashboard.tsx`)
   - Patient Overview (`PatientDashboard.tsx`)
   - Medical Laboratory Suite (`LabDashboard`, `NewLabRequests`, `LabRequests`, `LabQueue`, `LabResults` + `LabResultModal`, `LabReports` + `LabReportModal`)
   - Pharmacy Operations Suite (`PharmacyDashboard`, `Medications`, `Inventory`, `Prescriptions`, `PharmacyOrders`, `Sales`, `Suppliers`, `PharmacyManagement`)
4. **Planned / UI Staging Shells (`HmisPlaceholderPage` — 144 Views):**
   - Structured enterprise screens across Clinical Services, Diagnostics, Finance, HMO, HR, Procurement, Quality, Operations, ICT, Reports, and System Administration.

---

## 15. Known Limitations and Pending Completion

1. **Backend API Coverage Beyond Patients, Auth & HMOs:**
   - Currently, only `/auth/login`, `/patients`, and `/hmos` have live service adapters in `src/services/`. Laboratory, Pharmacy, Clinical EMR, Finance, HMO Claims, HR, and Procurement modules operate on frontend state or `HmisPlaceholderPage` blueprints and require backend REST endpoints.
2. **Role-Based Access Control (RBAC) Enforcement:**
   - `ProtectedRoutes.tsx` checks `isAuthenticated` but does not yet restrict specific departmental routes by `user.role` or granular permission claims.
3. **Multi-Tenancy & Branch Context:**
   - The frontend does not yet pass an `X-Organization-Id` or `branchId` header in `src/services/api.ts`; it currently operates as a single-institution deployment (*Ithere Systems — Hospital Edition*).
4. **Automated Test Suite:**
   - No unit or E2E test runner (Vitest / Playwright) is currently configured in `package.json`; verification is performed via TypeScript strict compilation (`tsc -b`), Vite production bundling (`vite build`), and browser inspection.

---

## 16. Future Ecosystem Readiness

As established in the companion [`ITHERE_PRODUCT_ARCHITECTURE_AUDIT.md`](./ITHERE_PRODUCT_ARCHITECTURE_AUDIT.md), this codebase provides a strong modular foundation for the broader **Ithere Technology Group** ecosystem:
1. **Ithere Care (Current Core):** Continues to own all healthcare-specific domains (Patients, Clinical Services, Diagnostics, Lab, Pharmacy, and HMO Claims).
2. **Ithere Enterprise Extraction Path:** The 11 Finance & Revenue views (`src/pages/finance/*`) and 15 Procurement & Supply Chain views (`src/pages/procurement/*`) are cleanly isolated by route prefix and navigation config, enabling future connection to shared **Ithere Enterprise** ERP/accounting APIs.
3. **Ithere Talent Extraction Path:** The 16 Administration & HR views (`src/pages/hr/*`) form a self-contained workforce domain ready to integrate with **Ithere Talent** HR & payroll services.
4. **Ithere Learn Extraction Path:** The CME & Training module (`/hr/training`) provides the integration touchpoint for **Ithere Learn**.
5. **Ithere Systems Deployment Flexibility:** Because all 13 departments are driven declaratively from `HMIS_DEPARTMENTS` in `src/navigation/navigationConfig.ts`, future **Ithere Systems** deployments can enable or disable entire product modules per organization subscription manifest without restructuring the application shell.

---

## 17. Appendix

### 17.1 Summary of Rebranding Changes Applied
| File Modified / Created | Previous Identity / Value | Updated Ithere Identity / Value |
| :--- | :--- | :--- |
| `src/app/appInfo.ts` *(New)* | N/A | Canonical `APP_INFO` (`Ithere Care`, `Ithere Systems — Hospital Edition`, `v0.1.0`) |
| `public/ithere-icon.svg` *(New)* | `/vite.svg` | Official emerald clinical cross vector icon (`#00bc7d`) |
| `package.json` | `"version": "0.0.0"` | `"version": "0.1.0"` |
| `index.html` | `<title>MyClinical</title>`, `/vite.svg` | `<title>Ithere Care — Ithere Systems Hospital Edition</title>`, `/ithere-icon.svg` |
| `src/pages/auth/Login.tsx` | `myClinical`, `Enterprise HMIS`, unverified compliance badge | `Ithere Care`, `Ithere Systems • Hospital Edition`, `Powered by Ithere Care • v0.1.0 (Development)`, `Ithere Technology Group — The Future Has an Address.` |
| `src/components/navigation/MainSidebar.tsx` | `Enterprise HMIS` / `myClinical`, `© 2026 myClinical HMIS` | `Ithere Systems` / `Ithere Care` (`Hospital Edition`), `Ithere Systems — Hospital Edition`, `Powered by Ithere Care • v0.1.0-dev`, `© 2026 Ithere Technology Group` |
| `src/components/Header.tsx` | `alex.clinic@myclinical.health` | `alex.clinic@itherecare.health`, `Ithere Care • v0.1.0-dev` |
| `src/components/Sidebar.tsx` | `Clinical Suite` / `MyClinic`, `© 2026 MyClinic` | `Ithere Systems` / `Ithere Care`, `© 2026 Ithere Care • v0.1.0-dev` |
| `src/pages/system-admin/HospitalConfig.tsx` | `myClinical Multispecialty` | `Ithere Systems — Hospital Edition`, `Powered by Ithere Care (v0.1.0-dev)`, `Ithere Technology Group` |
| `src/pages/system-admin/SystemSettings.tsx` | Generic subtitle & metrics | Displays `Ithere Systems — Hospital Edition (Powered by Ithere Care • v0.1.0 (Development))` |
| `src/pages/ict/SystemConfiguration.tsx` | `v2.4.0 Release` (hardcoded mock string) | `v0.1.0 (Development)` (from `APP_INFO.versionLabel`) |
