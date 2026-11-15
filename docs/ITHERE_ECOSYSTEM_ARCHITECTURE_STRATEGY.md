# ITHERE TECHNOLOGY GROUP
## MULTI-PRODUCT ARCHITECTURE & PRODUCT ECOSYSTEM STRATEGY
### Shared-Core, Independent-Products Blueprint, Deployment Models, Governance & Ithere Talent Reference Architecture

---

| Document Control | Details |
| :--- | :--- |
| **Document Title** | Ithere Technology Group — Multi-Product Architecture & Product Ecosystem Strategy |
| **Parent Organisation** | **Ithere Technology Group** (*“The Future Has an Address.”*) |
| **Ecosystem Products Covered** | **Ithere Care**, **Ithere Talent**, **Ithere Enterprise**, **Ithere Learn**, **Ithere Systems** |
| **Foundation Architecture** | **Ithere Core** (Shared Platform Services) + **Independent Product Applications** |
| **Current Active Product Baseline** | **Ithere Care** (`v0.1.0` — Development), deployed as **Ithere Systems — Hospital Edition** |
| **Technology Stack Baseline** | React 19 + TypeScript + Vite 7 (Frontend) • NestJS (Backend API) • PostgreSQL (Database) |
| **Document ID / Version** | `ITG-ARCH-STRAT-1.0` • November 2026 |

---

## Table of Contents

1. [Ithere Technology Group Overview](#1-ithere-technology-group-overview)
2. [Product Ecosystem & Product Descriptions](#2-product-ecosystem--product-descriptions)
3. [Assessment of Current Ithere Care Implementation](#3-assessment-of-current-ithere-care-implementation)
4. [Ithere Core Architecture (Shared Foundation Layer)](#4-ithere-core-architecture-shared-foundation-layer)
5. [Independent Product Architecture](#5-independent-product-architecture)
6. [Shared Services & Cross-Product Integration Standards](#6-shared-services--cross-product-integration-standards)
7. [Commercial & Deployment Models (Standalone, Bundled, Integrated)](#7-commercial--deployment-models-standalone-bundled-integrated)
8. [Product Identity, Versioning & Release Management](#8-product-identity-versioning--release-management)
9. [Repository & Code Organisation Strategy](#9-repository--code-organisation-strategy)
10. [Security, Tenant Isolation & Data Governance](#10-security-tenant-isolation--data-governance)
11. [Future Standalone Product Blueprint: Ithere Talent](#11-future-standalone-product-blueprint-ithere-talent)
12. [Phased Implementation Roadmap & Architectural Recommendations](#12-phased-implementation-roadmap--architectural-recommendations)

---

## 1. Ithere Technology Group Overview

### 1.1 Strategic Vision
**Ithere Technology Group** (*“The Future Has an Address.”*) is an enterprise software company building a cohesive family of industry-grade software products. The guiding architectural and commercial principle of the group is:

> **“Each Ithere product stands on its own as a complete, independently deployable and subscribable application, while the entire ecosystem works together seamlessly when a customer requires an integrated enterprise solution.”**

### 1.2 Core Architectural Philosophy
1. **Product Independence First:** Every Ithere product (`Ithere Care`, `Ithere Talent`, `Ithere Enterprise`, `Ithere Learn`) has its own product identity, frontend user experience, NestJS backend domain logic, PostgreSQL database boundary, semantic version lifecycle, and commercial subscription model. A customer purchasing `Ithere Talent` never installs or depends on `Ithere Care` healthcare tables or routes.
2. **Shared-Core Efficiency (`Ithere Core`):** Cross-cutting platform concerns—authentication, organization/tenant management, role-based access control (RBAC), subscription licensing, audit logging, notifications, and API design standards—are standardized in **Ithere Core** libraries and services so engineering teams never reinvent foundational infrastructure.
3. **Contract-Driven Interoperability:** When multiple Ithere products are deployed together (either as a **Product Bundle** or as an **Ithere Systems Integrated Enterprise Solution**), they communicate strictly through versioned REST APIs and signed domain webhooks—never through shared mutable database tables or tight code coupling.
4. **Pragmatic Evolution (Zero Disruption):** Architectural evolution is executed incrementally. The existing working **Ithere Care** application (*Ithere Systems — Hospital Edition*) remains 100% operational throughout every phase, avoiding premature microservice fragmentation or speculative rewrites.

---

## 2. Product Ecosystem & Product Descriptions

### 2.1 The Five Pillars of Ithere Technology Group

```
+---------------------------------------------------------------------------------------------------+
|                                     ITHERE TECHNOLOGY GROUP                                       |
|                                  "The Future Has an Address."                                     |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  +--------------------+  +--------------------+  +--------------------+  +---------------------+  |
|  |    ITHERE CARE     |  |   ITHERE TALENT    |  | ITHERE ENTERPRISE  |  |    ITHERE LEARN     |  |
|  |  Product ID:       |  |  Product ID:       |  |  Product ID:       |  |  Product ID:        |  |
|  |  ithere-care       |  |  ithere-talent     |  |  ithere-enterprise |  |  ithere-learn       |  |
|  |                    |  |                    |  |                    |  |                     |  |
|  | • HMIS & EMR       |  | • Core HR & Staff  |  | • General Ledger   |  | • Course Catalog    |  |
|  | • OPD / IPD / Ward |  | • Recruitment/ATS  |  | • Accounts Pay/Rec |  | • CME & Compliance  |  |
|  | • Lab & Radiology  |  | • Shift Rostering  |  | • Budgeting & Tax  |  | • Assessments/Exams |  |
|  | • Pharmacy & eMAR  |  | • Leave & Biometric|  | • Procurement & PO |  | • Certifications    |  |
|  | • HMO & Claims     |  | • Payroll & Tax    |  | • Inventory & GRN  |  | • Training Analytics|  |
|  | • Patient Billing  |  | • Appraisals & KPI |  | • Fixed Assets     |  | • Virtual Classroom |  |
|  +--------------------+  +--------------------+  +--------------------+  +---------------------+  |
|             ^                      ^                       ^                        ^             |
|             |                      |   Controlled REST     |                        |             |
|             +----------------------+--- APIs & Webhooks ---+------------------------+             |
|                                                |                                                  |
|  +---------------------------------------------------------------------------------------------+  |
|  |                          ITHERE SYSTEMS (Solution Delivery Layer)                           |  |
|  |   Custom Enterprise Solutions, Industry Editions & Multi-Product Integrated Deployments     |  |
|  |   • Flagship Deployment: ITHERE SYSTEMS — HOSPITAL EDITION (Powered by Ithere Care)         |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                |                                                  |
|  +---------------------------------------------------------------------------------------------+  |
|  |                          ITHERE CORE (Shared Foundation Platform)                           |  |
|  |   Identity & SSO • Organization/Tenant Mgmt • RBAC & Entitlements • Audit • Notifications   |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

### 2.2 Product Portfolio Matrix

| Product Name | Product ID | Primary Target Market | Core Functional Scope | Current Status |
| :--- | :--- | :--- | :--- | :--- |
| **Ithere Care** | `ithere-care` | Hospitals, Clinics, Diagnostic Centers, HMOs & Health Networks | Patient Registration, EMR, OPD/IPD Consultations, Triage, Nursing/Ward Management, Medical Laboratory, Radiology/PACS, Pharmacy & Dispensary, Patient Billing, and HMO Claims Management. | **Active Core Product** (`v0.1.0` Development — Foundation Implemented) |
| **Ithere Talent** | `ithere-talent` | Corporates, Healthcare Institutions, SMEs, Public Sector & Enterprises | Recruitment & Applicant Tracking (ATS), Employee Records, Credentialing, Shift & Duty Rostering, Attendance & Leave, Payroll Engine, Tax/Pension Statutory Compliance, Performance Appraisals, and Workforce Analytics. | **Planned Standalone Product** (Hospital HR blueprint staged in `/hr/*`) |
| **Ithere Enterprise** | `ithere-enterprise` | Commercial Enterprises, Hospitals, Manufacturing, Retail & Service Firms | Chart of Accounts, General Ledger, Accounts Receivable/Payable, Multi-Department Budgeting, Requisitions, RFQ/Tenders, Purchase Orders, Goods Received Notes (GRN), Multi-Store Inventory, and Fixed Asset Management. | **Planned Standalone Product** (Hospital Finance & Procurement staged in `/finance/*`, `/procurement/*`) |
| **Ithere Learn** | `ithere-learn` | Universities, Schools, Corporate Academies & Teaching Hospitals | Course Authoring, Curriculum Management, Continuing Medical/Professional Education (CME/CPD), Online Assessments, Grading, Certifications, and Learner Progress Analytics. | **Planned Standalone Product** (Training touchpoint staged in `/hr/training`) |
| **Ithere Systems** | `ithere-systems` | Large Enterprises, Multispecialty Hospitals & Government Institutions | Bespoke and pre-packaged multi-product deployments combining Ithere products with industry-specific workflows, custom integrations, and dedicated enterprise support (e.g., **Ithere Systems — Hospital Edition**). | **Active Solution Identity** (*Ithere Systems — Hospital Edition*) |

---

## 3. Assessment of Current Ithere Care Implementation

### 3.1 What Exists Today in the Codebase
An inspection of the current repository (`/home/kennytech/workdone/myclinical`) confirms the following technical baseline:
1. **Frontend Application (React 19 + TypeScript + Vite 7):**
   - **Product & Brand Identity (`src/app/appInfo.ts`):** Centralizes `Ithere Care` (`productId: "ithere-care"`), deployment edition `Ithere Systems — Hospital Edition`, version `0.1.0` (`Development`), and `Ithere_Care_Manifest`.
   - **Two-Tier Navigation Shell (`src/layouts/DashboardLayouts.tsx`):** Driven declaratively by `HMIS_DEPARTMENTS` in `src/navigation/navigationConfig.ts`, rendering 13 hospital departments in `MainSidebar.tsx`, contextual sub-menus in `DepartmentSubSidebar.tsx`, and workspace controls in `Header.tsx`.
   - **Routing Topology (`src/routes/AppRoutes.tsx`):** 169 route views protected by `ProtectedRoutes.tsx`.
   - **State & API Layer (`src/store/*`, `src/services/*`):**
     - `src/services/api.ts`: Centralized Axios instance reading `import.meta.env.VITE_API_URL` (`http://localhost:3000`), injecting `Authorization: Bearer <token>`, and executing automatic logout on HTTP `401`.
     - `src/store/auth.store.ts` & `src/features/auth/authApi.ts`: Live JWT authentication (`POST /auth/login`).
     - `src/store/patient.store.ts`, `src/services/patient.service.ts`, `src/services/hmo.service.ts`: Live backend integration for `GET /patients`, `POST /patients`, and `GET /hmos`.
2. **Implemented vs. Staged Modules:**
   - **Live Backend Connected (9 Views/Flows):** Staff Login, Patient Directory (`/patients/directory`), Patient Registration Hub (`/patients/registration`), Multi-Category Inpatient Registration (`CreateNewPatient.tsx`), OPD Registration (`CreateOPDPatient.tsx`), and HMO lookup (`GET /hmos`).
   - **Rich Interactive UI with Local State (16 Views + 4 Modals):** Hospital Command Center (`HospitalDashboard.tsx`), Patient Overview (`PatientDashboard.tsx`), Medical Laboratory suite (6 screens + Result/Report modals), and Pharmacy suite (8 screens).
   - **Staged Enterprise Blueprints (`HmisPlaceholderPage.tsx` — 144 Views):** Structured departmental screens across Clinical Services, Diagnostics, Finance, HMO, HR, Procurement, Quality, Operations, ICT, Analytics, and System Administration.

### 3.2 Architectural Strengths & Current Limitations

| Dimension | Current Architectural Strength | Current Limitation / Risk for Multi-Product Scale |
| :--- | :--- | :--- |
| **UI & Design System** | Clean Tailwind CSS + Ant Design 6 token system (`src/theme/themeConfig.ts`) and reusable `HmisPlaceholderPage` shell. | UI components (`Header.tsx`, `MainSidebar.tsx`) reside directly inside the `Ithere Care` app rather than a shared `@ithere/ui` package. |
| **Navigation & Routing** | Declarative `HMIS_DEPARTMENTS` array in `navigationConfig.ts` cleanly separates all 13 departments by URL prefix (`/patients`, `/lab`, `/pharmacy`, `/hr`, `/finance`, `/procurement`). | All 169 routes are statically imported in `src/routes/AppRoutes.tsx` without dynamic subscription/entitlement filtering or code-splitting (`React.lazy`). |
| **Authentication & AuthZ** | Clean Zustand persisted store (`auth.store.ts`) + Axios Bearer interceptor (`api.ts`). | `User` payload (`{ id, name, email, role }`) lacks `organizationId`, `branchId`, `subscribedProducts[]`, and granular `permissions[]`. |
| **Domain Boundaries** | Patient and HMO services use a clean anti-corruption normalizer (`normalizePatient` in `patient.service.ts`). | Non-clinical enterprise modules (`/hr/*`, `/finance/*`, `/procurement/*`) are currently embedded as hospital sub-routes inside the HMIS repository. |

---

## 4. Ithere Core Architecture (Shared Foundation Layer)

### 4.1 Purpose of Ithere Core
**Ithere Core** is the shared foundational layer providing standardized cross-cutting capabilities across all Ithere products. Crucially, **Ithere Core is NOT a monolithic mega-database**; it consists of:
1. **Shared Code Packages (`@ithere/core-*`):** Reusable TypeScript contracts, UI primitives, NestJS guards/decorators, audit loggers, and API client utilities.
2. **Central Identity, Tenant & Licensing Control Plane (`Ithere Core Identity & Licensing Service`):** A lightweight foundational service (or embeddable NestJS module for on-premise standalone deployments) managing organizations, unified staff accounts, product subscriptions, and SSO tokens.

### 4.2 Ithere Core Capability Matrix: What to Share Now vs. Later

| Ithere Core Capability | Architectural Role | Build / Share Now (Phase 1) | Defer Until Required (Phase 2/3) |
| :--- | :--- | :--- | :--- |
| **1. Authentication & Identity** | Unified staff identity, password hashing, JWT issuance, session revocation, and MFA. | Standardize JWT claims (`sub`, `orgId`, `branchId`, `roles`, `products[]`, `permissions[]`). | Full OAuth2 / OpenID Connect (OIDC) federated SSO across separate domains. |
| **2. Organisation & Tenant Management** | Multi-organization hierarchy (`Organization` -> `Branch/Campus` -> `Department`). | Include `organizationId` and `branchId` in `User` session context and API headers. | Automated self-service cloud tenant provisioning portal. |
| **3. Role-Based Access Control (RBAC)** | Product-scoped roles and permission matrices (`care:patients:write`, `talent:payroll:run`). | Define standardized `<product>:<module>:<action>` permission naming convention. | Dynamic policy-as-code ABAC engine. |
| **4. Subscription & Licensing** | Controls which products (`ithere-care`, `ithere-talent`) and modules an organization is licensed to use. | Frontend route/sidebar entitlement filter driven by `organization.subscribedProducts`. | Automated recurring billing & usage metering engine. |
| **5. Notification Services** | Transactional email (SMTP), SMS gateways, and in-app notification bell feeds. | Standardized NestJS `NotificationService` interface supporting email/SMS/in-app. | Distributed multi-region push notification broker. |
| **6. Audit Logging** | Immutable compliance trail (`who`, `when`, `organizationId`, `productId`, `action`, `resourceId`, `diff`). | Standard NestJS `@AuditLog()` interceptor writing to an append-only `audit_logs` table. | External SIEM / cold-storage log streaming. |
| **7. API Standards & Integrations** | Standard REST envelope, pagination (`page`, `limit`, `total`), error codes, and webhook signing. | Unified response envelope `{ success, data, meta, error }` and Axios client interceptors. | External developer API gateway & rate-limiting marketplace. |
| **8. Shared UI & Config Conventions** | Typography (`Inter`), theme token structure, product switcher, and `.env` validation. | Shared `ProductIdentityManifest` (`src/app/appInfo.ts`) and theme token structure. | Published npm/workspace design system (`@ithere/ui-kit`). |

---

## 5. Independent Product Architecture

### 5.1 Autonomy Requirements for Every Ithere Product
Every product in the Ithere ecosystem (`Ithere Care`, `Ithere Talent`, `Ithere Enterprise`, `Ithere Learn`) is architected as a **Self-Contained Modular Monolith** with strict boundaries:

```
+---------------------------------------------------------------------------------------------------+
|                     ARCHITECTURAL ANATOMY OF AN INDEPENDENT ITHERE PRODUCT                        |
|                (Applies equally to Ithere Care, Ithere Talent, Enterprise & Learn)                |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | 1. INDEPENDENT FRONTEND SPA (React 19 + TypeScript + Vite + Tailwind + AntD)                |  |
|  |    • Product-Specific Brand Theme & ProductIdentityManifest (e.g., ithere-talent v1.0.0)    |  |
|  |    • Product-Specific Navigation Rail & Domain Workspaces                                   |  |
|  |    • Consumes @ithere/core-sdk (Auth Store, API Client, RBAC Guard, App Switcher)           |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                |                                                  |
|                                       HTTPS REST JSON API                                         |
|                                                v                                                  |
|  +---------------------------------------------------------------------------------------------+  |
|  | 2. INDEPENDENT BACKEND API (NestJS Modular Monolith)                                        |  |
|  |    • Imports @ithere/core-nest (JwtAuthGuard, TenantGuard, LicenseGuard, AuditInterceptor)  |  |
|  |    • Product-Specific Domain Modules (Controllers, Services, Repositories, DTOs)            |  |
|  |    • Integration Adapter Module (REST Clients & Signed Webhook Emitters/Consumers)          |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                |                                                  |
|                                    TypeORM / Prisma Connection                                    |
|                                                v                                                  |
|  +---------------------------------------------------------------------------------------------+  |
|  | 3. INDEPENDENT DATABASE BOUNDARY (PostgreSQL Database / Dedicated Schema)                   |  |
|  |    • Dedicated Database (e.g., ithere_care_db, ithere_talent_db, ithere_enterprise_db)      |  |
|  |    • Every table scoped by organization_id (UUID) for strict multi-tenant isolation         |  |
|  |    • ZERO cross-product foreign keys or direct SQL joins across product databases           |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

### 5.2 Key Rules of Product Independence
1. **Own Frontend & UX:** Each product has its own dedicated entry point, domain-tailored sidebar navigation, and workflows. A hospital using *Ithere Care* sees clinical departments; a bank or corporate firm using *Ithere Talent* sees HR, Recruitment, Payroll, and Performance workspaces.
2. **Own Backend Business Logic:** Each product runs its own NestJS application process (`ithere-care-api`, `ithere-talent-api`, `ithere-enterprise-api`, `ithere-learn-api`) with its own domain services and validation rules.
3. **Own Database Boundary:** Each product owns its PostgreSQL database (`ithere_care_db`, `ithere_talent_db`, etc.) and migrations. `ithere-care-api` never runs SQL queries against `ithere_talent_db`.
4. **Independent Deployment & Release Cycle:** Upgrading `Ithere Talent` from `v1.1.0` to `v1.2.0` never requires rebuilding, redeploying, or migrating `Ithere Care`.

---

## 6. Shared Services & Cross-Product Integration Standards

### 6.1 How Independent Products Communicate When Deployed Together
When a customer subscribes to multiple Ithere products, the products remain decoupled at the database level and integrate through **two standardized mechanisms**:

#### Mechanism 1: Synchronous Versioned REST APIs (`/api/v1/integrations/*`)
- Used when Product A needs real-time reference validation or lookup from Product B.
- **Authentication:** Service-to-service JWT Bearer token issued by `Ithere Core` with scope `integration:<source-product>:<target-product>`, plus `X-Organization-Id` header.
- **Graceful Degradation (Optionality Rule):** Every cross-product integration is governed by an organization-level feature flag (`integrations.talentEnabled`, `integrations.enterpriseEnabled`). If a hospital uses **Ithere Care Standalone** without *Ithere Talent*, *Ithere Care* uses its local staff directory table. If *Ithere Talent* is connected, *Ithere Care* syncs verified practitioner profiles from *Ithere Talent*.

#### Mechanism 2: Asynchronous Signed Domain Webhooks / Event Bus
- Used to synchronize state changes across products without blocking user transactions.
- **Standard Event Envelope:**
  ```json
  {
    "eventId": "evt_01J9Z8K4M2N6P8Q0R2S4T6V8W0",
    "eventType": "talent.employee.credential_verified",
    "sourceProduct": "ithere-talent",
    "sourceVersion": "1.0.0",
    "organizationId": "org_lagos_general_001",
    "timestamp": "2026-11-06T19:30:00Z",
    "signature": "sha256=8f4e2b...",
    "data": {
      "employeeId": "EMP-2026-0412",
      "fullName": "Dr. Adebayo Ogunlesi",
      "department": "Cardiology",
      "medicalLicenseNumber": "MDCN/R/44921",
      "licenseExpiryDate": "2027-12-31",
      "status": "ACTIVE"
    }
  }
  ```

### 6.2 Canonical Cross-Product Integration Scenarios

| Source Product | Target Product | Integration Trigger / Contract | Business Outcome |
| :--- | :--- | :--- | :--- |
| **Ithere Talent** | **Ithere Care** | `talent.employee.provisioned` / `talent.roster.published` | Automatically provisions clinical practitioner profiles, MDCN/NMCN license status, and active shift rosters into *Ithere Care* OPD/Ward schedules. |
| **Ithere Care** | **Ithere Enterprise** | `care.billing.daily_summary_closed` / `care.pharmacy.po_approved` | Posts summarized daily clinical revenue journals (Cash, POS, HMO Receivables) and pharmacy restock requisitions into *Ithere Enterprise* General Ledger & Procurement. |
| **Ithere Talent** | **Ithere Enterprise** | `talent.payroll.run_finalized` | Posts aggregated monthly salary, PAYE tax, and pension liability journal entries into *Ithere Enterprise* General Ledger & Accounts Payable. |
| **Ithere Learn** | **Ithere Talent** | `learn.certification.completed` | Updates the employee's Continuing Medical/Professional Education (CME/CPD) credit balance and appraisal competency record in *Ithere Talent*. |

---

## 7. Commercial & Deployment Models (Standalone, Bundled, Integrated)

The architecture natively supports three commercial and technical deployment topologies:

```
+---------------------------------------------------------------------------------------------------+
|                        THREE COMMERCIAL & TECHNICAL DEPLOYMENT MODELS                             |
+---------------------------------------------------------------------------------------------------+

  MODEL 1: STANDALONE PRODUCT                 MODEL 2: PRODUCT BUNDLE
  (e.g., Corporate HR Client)                 (e.g., Clinic + Workforce)
  +-------------------------------+           +-------------------------------+
  | Organization: Acme Corp       |           | Organization: Metro Clinic    |
  | License: [ithere-talent]      |           | License: [care, talent]       |
  +-------------------------------+           +-------------------------------+
  |  +-------------------------+  |           | +------------+ +------------+ |
  |  |     ITHERE TALENT       |  |           | |ITHERE CARE | |ITHERE TALENT|
  |  |  Web App + NestJS API   |  |           | | App + API  |<-> App + API | |
  |  |  + ithere_talent_db     |  |           | | + care_db  | | + talent_db| |
  |  +-------------------------+  |           | +------------+ +------------+ |
  |  +-------------------------+  |           | +---------------------------+ |
  |  |   Ithere Core (Embedded |  |           | |   Ithere Core (Shared     | |
  |  |   or Cloud Identity)    |  |           | |   SSO, Org & Licensing)   | |
  |  +-------------------------+  |           | +---------------------------+ |
  +-------------------------------+           +-------------------------------+

  MODEL 3: INTEGRATED ENTERPRISE SOLUTION (ITHERE SYSTEMS — HOSPITAL EDITION)
  (e.g., Multispecialty Teaching Hospital / Hospital Network)
  +---------------------------------------------------------------------------+
  | Organization: Premiere Multispecialty Hospital                            |
  | Solution Identity: ITHERE SYSTEMS — HOSPITAL EDITION (Powered by Care)    |
  | License: [ithere-care, ithere-talent, ithere-enterprise, ithere-learn]    |
  +---------------------------------------------------------------------------+
  |  +---------------------------------------------------------------------+  |
  |  | Unified Hospital Workspace Shell & App Switcher (Single Sign-On)    |  |
  |  +---------------------------------------------------------------------+  |
  |       |                       |                       |                   |
  |       v                       v                       v                   |
  |  +----------------+    +----------------+    +----------------+           |
  |  |  ITHERE CARE   |    | ITHERE TALENT  |    |ITHERE ENTERPRISE           |
  |  | Clinical/HMIS  |<-->| Healthcare HR  |<-->| Hospital ERP & |           |
  |  | + care_db      |    | + talent_db    |    | Finance + db   |           |
  |  +----------------+    +----------------+    +----------------+           |
  |  +---------------------------------------------------------------------+  |
  |  | Ithere Core Enterprise Plane (SSO, Multi-Campus RBAC, Central Audit)|  |
  |  +---------------------------------------------------------------------+  |
  +---------------------------------------------------------------------------+
```

### 7.1 Model Comparison Matrix

| Attribute | Model 1: Standalone Product | Model 2: Product Bundle | Model 3: Integrated Enterprise Solution |
| :--- | :--- | :--- | :--- |
| **Customer Example** | A logistics company buying **Ithere Talent** only, or a standalone clinic buying **Ithere Care** only. | A medical center subscribing to **Ithere Care + Ithere Talent**. | A tertiary hospital deploying **Ithere Systems — Hospital Edition**. |
| **Subscribed Products** | 1 Product (`[ithere-talent]` or `[ithere-care]`) | 2–3 Products (`[ithere-care, ithere-talent]`) | Full or custom suite orchestrated under **Ithere Systems**. |
| **User Experience** | Single product branding and navigation rail. No references to unsubscribed products. | Unified login (SSO) with a top-bar **Ithere App Switcher** to jump between subscribed products. | Unified **Ithere Systems — Hospital Edition** workspace shell with seamless cross-module workflows. |
| **Database Footprint** | Only the single product's PostgreSQL database is provisioned. | Each subscribed product has its own isolated PostgreSQL database/schema. | Isolated product databases synchronized via pre-configured **Ithere Systems** integration connectors. |

---

## 8. Product Identity, Versioning & Release Management

### 8.1 Standardized Product Identity Manifest
Every Ithere product must maintain a canonical `ProductIdentityManifest` at `src/app/appInfo.ts` (implemented in this repository as `ITHERE_CARE_MANIFEST`). The manifest standardizes:
- `productName`: Human-readable title (e.g., `"Ithere Care"`, `"Ithere Talent"`)
- `productId`: Machine identifier (`"ithere-care"`, `"ithere-talent"`, `"ithere-enterprise"`, `"ithere-learn"`)
- `productDescription`: Official summary
- `currentVersion`: Independent Semantic Version (`MAJOR.MINOR.PATCH`)
- `status`: `"Development" | "Alpha" | "Beta" | "Production"`
- `releaseDate`: ISO 8601 date (`YYYY-MM-DD`)
- `edition`: Deployment edition (`"Ithere Systems — Hospital Edition"`, `"Standalone Standard Edition"`, etc.)
- `buildInfo`: Stack & commit metadata
- `changelog`: Version release notes
- `supportedIntegrations`: Compatible Ithere Core and peer product API versions
- `documentation`: Relative paths or URLs to official Markdown & PDF documentation

### 8.2 Independent Semantic Versioning Policy (SemVer 2.0.0)
Each product follows its own independent version lifecycle:
- **Ithere Care:** Currently `v0.1.0` (`Development`) &rarr; progresses to `v1.0.0` upon full clinical/backend completion.
- **Ithere Talent:** Starts at `v0.1.0` &rarr; `v1.0.0` on its own schedule.
- **Ithere Enterprise:** Starts at `v0.1.0` &rarr; `v1.0.0` on its own schedule.
- **Ithere Learn:** Starts at `v0.1.0` &rarr; `v1.0.0` on its own schedule.
- **Ithere Core Shared Packages:** Versioned independently (`@ithere/core-contracts@1.x.x`).

### 8.3 Cross-Product Compatibility Governance
- A release of `Ithere Talent v1.2.0` **never** forces a version bump or redeployment of `Ithere Care v1.0.4`.
- All cross-product REST endpoints and webhook payloads are versioned by URL/schema namespace (`/api/v1/integrations/...`).
- Breaking changes to `Ithere Core` JWT claims or integration contracts require a new major contract version (`v2`) with a minimum 2-release backward-compatibility window.

---

## 9. Repository & Code Organisation Strategy

### 9.1 Evaluation of Repository Topologies

| Strategy | Description | Pros | Cons / Risks |
| :--- | :--- | :--- | :--- |
| **Option A: Single Monorepo (Turborepo / Nx / Yarn Workspaces)** | All products (`apps/ithere-care`, `apps/ithere-talent`, `apps/ithere-enterprise`) and shared libraries (`packages/core-*`) live in one Git repository. | Atomic commits across shared core and products; instant TypeScript type sharing; zero private npm registry overhead. | If poorly bounded, developers can accidentally import code across products; CI pipelines must be path-filtered. |
| **Option B: Separate Repositories (Polyrepo)** | Each product (`ithere-care`, `ithere-talent`, `ithere-enterprise`) and `ithere-core` lives in its own separate Git repository. | Strict physical separation; independent Git history and access control per product team. | High friction updating shared `@ithere/core` packages across multiple repos; version drift between frontend and backend contracts. |
| **Option C: Phased Hybrid Strategy (Recommended)** | **Stage 1 (Now):** Keep the existing `Ithere Care` repository intact while organizing internal `core/` vs. product boundaries. **Stage 2 (When Product #2 Starts):** Adopt a **Workspace Monorepo** for shared `@ithere/core-*` packages + product apps, OR publish `@ithere/core-*` to a private GitHub Packages registry consumed by independent product repos. | Zero disruption to the active `Ithere Care` codebase today; prevents premature restructuring; establishes clean package boundaries before moving files. | Requires disciplined adherence to `src/core/` vs. domain module imports during Stage 1. |

### 9.2 Recommended Strategy & Migration Requirements
**Recommendation:** Adopt the **Phased Hybrid Strategy**, transitioning into a **Workspace Monorepo (or Private Core Registry + Independent Product Repos)** only when active development of the second standalone product (**Ithere Talent**) begins.

```
RECOMMENDED TARGET WORKSPACE STRUCTURE (WHEN PRODUCT #2 LAUNCHES):

ithere-platform/
├── packages/
│   ├── core-contracts/         # @ithere/core-contracts (JWT claims, ProductManifest, Webhook DTOs, RBAC enums)
│   ├── core-ui/                # @ithere/core-ui (Theme tokens, AppSwitcher, AuthLayout, DataTables)
│   ├── core-client/            # @ithere/core-client (Axios factory, AuthStore factory, LicenseGuard)
│   └── core-nest/              # @ithere/core-nest (JwtAuthGuard, TenantInterceptor, AuditModule)
├── apps/
│   ├── ithere-care-web/        # Ithere Care React SPA (Current repository evolved)
│   ├── ithere-care-api/        # Ithere Care NestJS Backend
│   ├── ithere-talent-web/      # Ithere Talent React SPA (Standalone HR & Payroll UX)
│   ├── ithere-talent-api/      # Ithere Talent NestJS Backend
│   ├── ithere-enterprise-web/  # Ithere Enterprise React SPA
│   └── ithere-enterprise-api/  # Ithere Enterprise NestJS Backend
└── docs/                       # Group-wide Architecture, API Contracts & Deployment Blueprints
```

**Why We Do NOT Restructure the Repository Today:**
- Moving files into `apps/` and `packages/` before Product #2 is initialized would break active Git branches, IDE paths, and deployment scripts without delivering immediate customer value.
- Instead, we keep `/home/kennytech/workdone/myclinical` 100% intact today and enforce logical separation via `src/app/appInfo.ts`, `src/services/`, and `src/navigation/navigationConfig.ts`.

---

## 10. Security, Tenant Isolation & Data Governance

### 10.1 Multi-Layered Security & Isolation Model

```
+---------------------------------------------------------------------------------------------------+
|                    ITHERE ECOSYSTEM SECURITY, TENANCY & ENTITLEMENT GATES                         |
+---------------------------------------------------------------------------------------------------+

  Incoming Request (HTTPS)
         │
         ▼
  [GATE 1: IDENTITY & AUTHENTICATION GUARD (Ithere Core JWT)]
   • Verifies cryptographic signature & token expiration.
   • Extracts: userId (sub), organizationId, branchId.
         │
         ▼
  [GATE 2: PRODUCT SUBSCRIPTION & LICENSING GUARD]
   • Checks if target productId (e.g., "ithere-talent") is in organization.subscribedProducts[]
     AND user.allowedProducts[].
   • BLOCKS access (HTTP 403 ProductNotLicensed) if user only has access to "ithere-care".
         │
         ▼
  [GATE 3: ROLE & GRANULAR PERMISSION GUARD (RBAC)]
   • Verifies product-scoped permission claim (e.g., "talent:payroll:approve").
         │
         ▼
  [GATE 4: TENANT DATA ISOLATION INTERCEPTOR (PostgreSQL Row / Schema Scope)]
   • Enforces WHERE organization_id = :ctx.organizationId on every SELECT / INSERT / UPDATE / DELETE.
   • Prevents cross-organization data leakage (IDOR protection).
         │
         ▼
  [GATE 5: IMMUTABLE AUDIT TRAIL LOGGER]
   • Records (timestamp, organizationId, userId, productId, action, entityId, ipAddress).
```

### 10.2 Mandatory Security & Data Isolation Guidelines
1. **Strict Tenant Isolation:** Every database table in every Ithere product must include a non-nullable `organization_id UUID NOT NULL` column (indexed as `(organization_id, id)` and `(organization_id, created_at)`), enforced by a NestJS repository/ORM scope and PostgreSQL Row-Level Security (RLS) policies.
2. **Product-Level Access Boundaries:** Authenticating via **Ithere Core** proves *who* a user is (`Identity`), NOT *which products* they can access (`Entitlement`). A doctor logged into `Ithere Care` cannot access `Ithere Talent` or `Ithere Enterprise` unless:
   - The organization has an active subscription to that product, AND
   - The user has an explicit role assignment granted for that product.
3. **Database Credential Isolation:** Each product backend connects to its own PostgreSQL database using a dedicated least-privilege database role (`ithere_care_db_user`, `ithere_talent_db_user`). No application service uses the PostgreSQL `postgres` superuser in production.
4. **Independent Backup & Point-in-Time Recovery (PITR):** Each product database has independent automated daily snapshots and WAL archiving, allowing an administrator to restore or migrate a standalone product database without affecting other products.

---

## 11. Future Standalone Product Blueprint: Ithere Talent

To demonstrate how a new standalone product is created from this architecture without depending on **Ithere Care**, below is the complete architectural blueprint for **Ithere Talent** (`productId: "ithere-talent"`).

### 11.1 Product Identity & Positioning
- **Product Name:** `Ithere Talent`
- **Product Identifier:** `ithere-talent`
- **Target Customers:** Any organization (banks, retail chains, logistics firms, schools, government agencies, OR hospitals) needing modern Human Resource Management, Recruitment, Rostering, Attendance, Payroll, and Performance Management.
- **Standalone Capability:** Operates 100% independently with zero dependency on `Ithere Care`.

### 11.2 Ithere Talent Domain Architecture (8 Core Modules)

| # | Module Name | Route Prefix | Core Capabilities | Key PostgreSQL Entities (`ithere_talent_db`) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Talent Command & Workforce Analytics** | `/`, `/analytics/*` | Headcount KPIs, turnover velocity, attendance heatmaps, payroll cost trends, and diversity metrics. | `workforce_snapshots`, `kpi_metrics` |
| 2 | **Recruitment & Applicant Tracking (ATS)** | `/recruitment/*` | Job requisitions, career portal postings, candidate pipeline Kanban, interview scorecards, and offer letters. | `job_openings`, `applicants`, `interviews`, `job_offers` |
| 3 | **Employee Records & Credentialing** | `/employees/*` | Digital employee files, organizational chart, job grades, contracts, next-of-kin, and professional license/credential expiry tracking. | `employees`, `departments`, `job_grades`, `employee_credentials`, `contracts` |
| 4 | **Attendance, Shifts & Leave Management** | `/time/*` | Multi-shift duty rostering, biometric/geo clock-in logs, overtime calculation, leave requests, and accrual balances. | `shift_templates`, `duty_rosters`, `attendance_logs`, `leave_requests`, `leave_balances` |
| 5 | **Payroll & Statutory Compliance** | `/payroll/*` | Salary structures, earnings/deductions, call-duty/overtime import, PAYE tax, pension, NHF statutory schedules, payslips, and bank disbursement files. | `salary_structures`, `payroll_runs`, `payslips`, `statutory_deductions` |
| 6 | **Performance & Appraisals** | `/performance/*` | OKR/KPI goal setting, 360-degree appraisals, probation reviews, competency matrices, and promotion workflows. | `appraisal_cycles`, `employee_goals`, `performance_reviews` |
| 7 | **Training & Development** | `/training/*` | Training calendar, skill gap tracking, external certification logs, and optional connector to **Ithere Learn**. | `training_programs`, `employee_trainings`, `skill_records` |
| 8 | **Talent Administration & Settings** | `/settings/*` | Organization branches, work calendars, public holidays, approval workflows, RBAC roles, and integration webhooks. | `talent_settings`, `approval_workflows`, `webhook_subscriptions` |

### 11.3 How Ithere Talent Integrates Optionally Without Dependency

```
+---------------------------------------------------------------------------------------------------+
|               ITHERE TALENT: STANDALONE OPERATION VS. OPTIONAL ECOSYSTEM INTEGRATION              |
+---------------------------------------------------------------------------------------------------+

                     +-------------------------------------------------------+
                     |                     ITHERE TALENT                     |
                     |              (productId: "ithere-talent")             |
                     |   • Recruitment (ATS)      • Attendance & Leave       |
                     |   • Employee Directory     • Payroll Engine           |
                     |   • Shift & Duty Roster    • Performance Appraisals   |
                     |              Database: ithere_talent_db               |
                     +-------------------------------------------------------+
                                 |                               |
          [Optional Connector A] |                               | [Optional Connector B]
          Enabled ONLY if org    |                               | Enabled ONLY if org
          subscribes to Care     v                               v subscribes to Enterprise
     +---------------------------------------+       +---------------------------------------+
     |              ITHERE CARE              |       |           ITHERE ENTERPRISE           |
     |       (productId: "ithere-care")      |       |     (productId: "ithere-enterprise")  |
     | • Receives verified clinical staff    |       | • Receives finalized monthly payroll  |
     |   profiles, MDCN/NMCN license status  |       |   journal vouchers (Gross Pay, PAYE,  |
     |   & active ward/clinic duty rosters   |       |   Pension, Net Payable) into General  |
     |   via signed webhook / REST sync.     |       |   Ledger & Accounts Payable.          |
     +---------------------------------------+       +---------------------------------------+
```

- **When Deployed Standalone (Model 1):** *Ithere Talent* exports payroll journals as standard CSV/Excel/PDF schedules and manages general corporate departments (`Engineering`, `Sales`, `Operations`).
- **When Paired with Ithere Enterprise (Model 2/3):** Finalizing a payroll run in *Ithere Talent* emits `talent.payroll.run_finalized`, which *Ithere Enterprise* consumes to automatically post balanced debit/credit journal entries to the General Ledger.
- **When Paired with Ithere Care in a Hospital (Model 2/3):** *Ithere Talent* enables its optional `Healthcare Credentialing & Ward Roster Extension` pack, syncing licensed doctors, nurses, and call-duty rosters directly into *Ithere Care*.

---

## 12. Phased Implementation Roadmap & Architectural Recommendations

### Phase 1: Stabilize & Complete Ithere Care Foundation (Current Focus — Months 1–3)
- **Objective:** Deliver a rock-solid production release of **Ithere Care (`v1.0.0`)** under **Ithere Systems — Hospital Edition** without architectural distraction.
- **Key Actions:**
  1. Maintain the newly standardized `src/app/appInfo.ts` (`ITHERE_CARE_MANIFEST`) and **Ithere Care** branding across all screens.
  2. Complete NestJS backend endpoints and frontend service bindings for the core clinical loop: Outpatient/Inpatient Consultations (`/clinical/*`), Laboratory Orders & Results (`/lab/*`), Pharmacy Prescriptions & Inventory (`/pharmacy/*`), and Patient Billing & HMO Claims (`/finance/*`, `/hmo/*`).
  3. Enrich the NestJS `/auth/login` JWT payload and `src/store/auth.store.ts` to include `organizationId`, `branchId`, `subscribedProducts: ["ithere-care"]`, and role permissions.

### Phase 2: Extract Internal `Ithere Core` Conventions (Months 4–5)
- **Objective:** Prepare reusable building blocks inside the codebase before launching a second product.
- **Key Actions:**
  1. Introduce route-level RBAC and module entitlement filtering in `MainSidebar.tsx` and `ProtectedRoutes.tsx` so departments can be toggled dynamically per customer subscription manifest.
  2. Standardize NestJS `TenantGuard`, `PermissionGuard`, and `AuditInterceptor` into a clean internal `core/` module directory.
  3. Formalize the REST API response envelope and webhook signature specification.

### Phase 3: Launch Ithere Talent as the First Independent Sibling Product (Months 6–9)
- **Objective:** Build and launch **Ithere Talent (`v1.0.0`)** as an independent, standalone commercial product.
- **Key Actions:**
  1. Extract shared contracts (`@ithere/core-contracts`, `@ithere/core-client`, `@ithere/core-nest`) into shared workspace packages.
  2. Provision `ithere-talent-web`, `ithere-talent-api`, and `ithere_talent_db` following the Section 11 blueprint.
  3. Build the optional `Ithere Talent <-> Ithere Care` practitioner/roster sync connector so hospital clients on **Ithere Systems — Hospital Edition** can upgrade from staged HR screens to the full **Ithere Talent** engine.

### Phase 4: Expand to Ithere Enterprise & Ithere Learn (Months 10–18)
- **Objective:** Complete the four-product **Ithere Technology Group** portfolio.
- **Key Actions:**
  1. Launch **Ithere Enterprise (`v1.0.0`)** for standalone ERP, General Ledger, and Supply Chain customers, connecting to *Ithere Care* and *Ithere Talent* via the General Ledger journal and procurement webhook contracts.
  2. Launch **Ithere Learn (`v1.0.0`)** for standalone educational and corporate training clients, connecting to *Ithere Talent* for automated CPD/CME certification tracking.
