import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CalendarDays,
  BedDouble,
  FileText,
  FileSignature,
  MessageSquare,
  Share2,
  Stethoscope,
  HeartPulse,
  Activity,
  ClipboardList,
  Clock,
  Syringe,
  Pill,
  FlaskConical,
  Boxes,
  Truck,
  CreditCard,
  Wallet,
  Receipt,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Award,
  AlertTriangle,
  Building2,
  Wrench,
  Zap,
  Droplets,
  Shield,
  Car,
  UtensilsCrossed,
  Trash2,
  Cpu,
  Server,
  Lock,
  Settings2,
  BarChart3,
  Sliders,
  CheckCircle2,
  Layers,
  Sparkles,
  ClipboardCheck,
  ShieldAlert,
  HelpCircle,
  Database,
  Radio,
  FileCheck,
} from "lucide-react";

export interface NavItemTab {
  key: string;
  label: string;
  icon?: LucideIcon;
  badge?: string;
  description?: string;
}

export interface NavItem {
  id: string;
  name: string;
  path: string;
  icon: LucideIcon;
  badge?: string;
  description?: string;
  roles?: string[];
  tabs?: NavItemTab[];
}

export interface NavGroup {
  groupTitle: string;
  items: NavItem[];
}

export interface DepartmentConfig {
  id: string;
  name: string;
  shortName: string;
  path: string;
  icon: LucideIcon;
  badge?: string;
  category: string;
  description: string;
  roles?: string[];
  groups: NavGroup[];
}

export const HMIS_DEPARTMENTS: DepartmentConfig[] = [
  // 1. Dashboard
  {
    id: "dashboard",
    name: "Dashboard",
    shortName: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    category: "Executive Command",
    description: "Central hospital metrics, bed capacity and live operational telemetry.",
    groups: [
      {
        groupTitle: "Command Center",
        items: [
          {
            id: "cmd-overview",
            name: "Hospital Command Center",
            path: "/dashboard",
            icon: LayoutDashboard,
            description: "High-level real-time hospital occupancy and operational feed.",
          },
          {
            id: "cmd-beds",
            name: "Bed Occupancy & Capacity",
            path: "/dashboard/bed-occupancy",
            icon: BedDouble,
            badge: "Live",
            description: "Real-time ward capacity, ICU beds and admission readiness.",
          },
          {
            id: "cmd-huddle",
            name: "Daily Clinical Huddle",
            path: "/dashboard/clinical-huddle",
            icon: Activity,
            description: "Shift handovers, critical patient watchlists and team duties.",
          },
          {
            id: "cmd-er-status",
            name: "Emergency & Triage Status",
            path: "/dashboard/emergency-status",
            icon: AlertTriangle,
            badge: "Priority",
            description: "Live ER waiting queue and acuity distribution triage.",
          },
          {
            id: "cmd-dept-status",
            name: "Departmental Status",
            path: "/dashboard/department-status",
            icon: Layers,
            description: "Operational status and workload across all clinical units.",
          },
          {
            id: "cmd-alerts",
            name: "Hospital Alerts & Notice",
            path: "/dashboard/alerts",
            icon: ShieldAlert,
            description: "Critical broadcast notifications, system alerts and notices.",
          },
        ],
      },
    ],
  },

  // 2. Patient Management
  {
    id: "patients",
    name: "Patient Management",
    shortName: "Patients",
    path: "/patients",
    icon: Users,
    category: "Front Desk & Registry",
    description: "Patient registration, directory, EMR profiles and appointment coordination.",
    groups: [
      {
        groupTitle: "Registry & Care Journey",
        items: [
          {
            id: "pt-overview",
            name: "Overview",
            path: "/patients",
            icon: LayoutDashboard,
            description: "Patient attendance trends, visits and service analytics.",
          },
          {
            id: "pt-reg",
            name: "Patient Registration",
            path: "/patients/registration",
            icon: UserPlus,
            badge: "Fast Track",
            description: "Register new emergency, outpatient and HMO enrollees.",
          },
          {
            id: "pt-directory",
            name: "Patient Directory",
            path: "/patients/directory",
            icon: Users,
            description: "Central master patient index with search and filtering.",
          },
          {
            id: "pt-profiles",
            name: "Patient Profiles",
            path: "/patients/profiles",
            icon: FileText,
            description: "Comprehensive medical history, demographics and visits.",
          },
          {
            id: "pt-appts",
            name: "Appointments",
            path: "/patients/appointments",
            icon: CalendarDays,
            description: "Consultation bookings, specialty schedules and queue status.",
          },
          {
            id: "pt-adt",
            name: "Admission, Discharge & Transfer",
            path: "/patients/adt",
            icon: BedDouble,
            badge: "ADT",
            description: "Ward allocation, inpatient transfers and discharge workflows.",
          },
        ],
      },
      {
        groupTitle: "Records & Engagement",
        items: [
          {
            id: "pt-emr",
            name: "Patient Medical Records",
            path: "/patients/emr",
            icon: FileCheck,
            description: "Digital health records, clinical history and encounters.",
          },
          {
            id: "pt-feedback",
            name: "Patient Feedback",
            path: "/patients/feedback",
            icon: MessageSquare,
            description: "Care satisfaction ratings, complaints and patient experience.",
          },
          {
            id: "pt-referrals",
            name: "Referral Management",
            path: "/patients/referrals",
            icon: Share2,
            description: "Inbound and outbound clinical referrals and specialist handovers.",
          },
          {
            id: "pt-reports",
            name: "Patient Reports",
            path: "/patients/reports",
            icon: FileSpreadsheet,
            description: "Demographic summaries, retention and clinic census statistics.",
          },
        ],
      },
    ],
  },

  // 3. Clinical Services
  {
    id: "clinical",
    name: "Clinical Services",
    shortName: "Clinical",
    path: "/clinical/overview",
    icon: Stethoscope,
    category: "Medical & Nursing",
    description: "Inpatient, outpatient, surgical theatre, intensive care and specialties.",
    groups: [
      {
        groupTitle: "Physician & Nursing Leadership",
        items: [
          {
            id: "cl-overview",
            name: "Clinical Overview",
            path: "/clinical/overview",
            icon: Activity,
            description: "Hospital-wide clinical indicators, consult logs and bed status.",
          },
          {
            id: "cl-doctors",
            name: "Doctor / Physician Management",
            path: "/clinical/doctors",
            icon: Stethoscope,
            description: "Physician roster, clinical assignments, specialties and rounds.",
            tabs: [
              { key: "directory", label: "Doctor Directory" },
              { key: "profiles", label: "Doctor Profiles" },
              { key: "specialties", label: "Specialties" },
              { key: "schedules", label: "Schedules" },
              { key: "appointments", label: "Appointments" },
              { key: "activities", label: "Clinical Activities" },
              { key: "reports", label: "Performance Reports" },
            ],
          },
          {
            id: "cl-nursing",
            name: "Nursing Management",
            path: "/clinical/nursing",
            icon: HeartPulse,
            description: "Ward allocations, nurse duty rosters, MAR and assessments.",
            tabs: [
              { key: "overview", label: "Nursing Overview" },
              { key: "directory", label: "Nurse Directory" },
              { key: "roster", label: "Duty Roster" },
              { key: "wards", label: "Ward Assignments" },
              { key: "assessments", label: "Nursing Assessments" },
              { key: "vitals", label: "Vital Signs" },
              { key: "mar", label: "Medication Administration" },
              { key: "reports", label: "Nursing Reports" },
            ],
          },
        ],
      },
      {
        groupTitle: "Core Care Units",
        items: [
          {
            id: "cl-opd",
            name: "Outpatient Department",
            path: "/clinical/opd",
            icon: Users,
            description: "General outpatient consultations, walk-ins and clinics.",
          },
          {
            id: "cl-ipd",
            name: "Inpatient Department",
            path: "/clinical/ipd",
            icon: BedDouble,
            description: "Ward management, round notes, bed charts and daily reviews.",
          },
          {
            id: "cl-er",
            name: "Emergency Department",
            path: "/clinical/emergency",
            icon: AlertTriangle,
            badge: "24/7",
            description: "Acute trauma, Manchester/ESI triage and emergency resus.",
          },
          {
            id: "cl-theatre",
            name: "Theatre & Operating Room",
            path: "/clinical/theatre",
            icon: Syringe,
            description: "Surgical booking, OR scheduling, WHO surgical checklists.",
          },
          {
            id: "cl-icu",
            name: "Intensive Care Unit",
            path: "/clinical/icu",
            icon: HeartPulse,
            badge: "Critical",
            description: "High-dependency monitoring, ventilator logs and organ support.",
          },
        ],
      },
      {
        groupTitle: "Specialties & Clinical Support",
        items: [
          {
            id: "cl-maternity",
            name: "Maternity & Obstetrics",
            path: "/clinical/maternity",
            icon: Sparkles,
            description: "Antenatal clinic, labour ward, delivery logs and post-natal care.",
          },
          {
            id: "cl-paediatrics",
            name: "Paediatrics",
            path: "/clinical/paediatrics",
            icon: Users,
            description: "Child health, immunization schedules and neonatal incubators.",
          },
          {
            id: "cl-physio",
            name: "Physiotherapy & Rehabilitation",
            path: "/clinical/physiotherapy",
            icon: Activity,
            description: "Rehabilitation sessions, mobility therapy and exercise plans.",
          },
          {
            id: "cl-dietetics",
            name: "Dietetics & Nutrition",
            path: "/clinical/dietetics",
            icon: UtensilsCrossed,
            description: "Nutritional assessments, therapeutic diets and meal planning.",
          },
          {
            id: "cl-procedures",
            name: "Clinical Procedures",
            path: "/clinical/procedures",
            icon: Syringe,
            description: "Minor surgical ops, wound dressings, endoscopies and biopsies.",
          },
          {
            id: "cl-documentation",
            name: "Clinical Documentation",
            path: "/clinical/documentation",
            icon: FileText,
            description: "SOAP notes, clinical summaries and clinical audit documentation.",
          },
          {
            id: "cl-vitals",
            name: "Vital Signs & Observations",
            path: "/clinical/vitals",
            icon: HeartPulse,
            description: "NEWS2 scoring, BP, SpO2, heart rate and temperature monitoring.",
          },
          {
            id: "cl-discharge",
            name: "Discharge Planning",
            path: "/clinical/discharge-planning",
            icon: CheckCircle2,
            description: "Discharge summaries, take-home prescriptions and follow-ups.",
          },
        ],
      },
    ],
  },

  // 4. Pharmacy & Diagnostics
  {
    id: "pharmacy-diagnostics",
    name: "Pharmacy & Diagnostics",
    shortName: "Pharmacy & Lab",
    path: "/pharmacy",
    icon: Pill,
    category: "Medicines & Investigations",
    description: "Drug dispensing, electronic MAR, laboratory pathology and medical imaging.",
    groups: [
      {
        groupTitle: "Pharmacy Operations",
        items: [
          {
            id: "ph-overview",
            name: "Pharmacy Overview",
            path: "/pharmacy",
            icon: LayoutDashboard,
            description: "Dispensing metrics, prescription volume and inventory turnover.",
          },
          {
            id: "ph-mgmt",
            name: "Pharmacy Management",
            path: "/pharmacy/management",
            icon: Boxes,
            description: "Medications, inventory, prescriptions, suppliers and orders.",
            tabs: [
              { key: "medications", label: "Medications" },
              { key: "inventory", label: "Inventory" },
              { key: "prescriptions", label: "Prescriptions" },
              { key: "orders", label: "Purchase Orders" },
              { key: "sales", label: "Sales & POS" },
              { key: "suppliers", label: "Suppliers" },
            ],
          },
          {
            id: "ph-mar",
            name: "Medication Administration",
            path: "/pharmacy/medication-administration",
            icon: Clock,
            badge: "eMAR",
            description: "Inpatient bedside drug rounds, dosage verification and MAR logs.",
          },
        ],
      },
      {
        groupTitle: "Diagnostic Services",
        items: [
          {
            id: "dx-lab",
            name: "Laboratory Management",
            path: "/lab",
            icon: FlaskConical,
            description: "Haematology, chemical pathology, microbiology and histology queue.",
          },
          {
            id: "dx-results",
            name: "Laboratory Results",
            path: "/lab/results",
            icon: CheckCircle2,
            description: "Result validation, pathologist sign-off and critical alerts.",
          },
          {
            id: "dx-radiology",
            name: "Radiology & Imaging",
            path: "/diagnostics/radiology",
            icon: Radio,
            description: "X-Ray, Ultrasound, CT, MRI bookings and PACS DICOM viewers.",
          },
          {
            id: "dx-blood-bank",
            name: "Blood Bank & Transfusion",
            path: "/diagnostics/blood-bank",
            icon: Droplets,
            badge: "Critical",
            description: "Cross-matching, donor register and blood component units inventory.",
          },
          {
            id: "dx-reports",
            name: "Diagnostic Reports",
            path: "/diagnostics/reports",
            icon: FileText,
            description: "Unified investigative diagnostic reports and patient exports.",
          },
        ],
      },
    ],
  },

  // 5. Finance & Billing
  {
    id: "finance",
    name: "Finance & Billing",
    shortName: "Finance",
    path: "/finance/overview",
    icon: CreditCard,
    category: "Revenue & Accounting",
    description: "Patient billing, point of sale cashier, accounts ledger and reconciliation.",
    groups: [
      {
        groupTitle: "Billing & Cashiering",
        items: [
          {
            id: "fn-overview",
            name: "Finance Overview",
            path: "/finance/overview",
            icon: TrendingUp,
            description: "Hospital revenue summaries, cashier collections and debtors aging.",
          },
          {
            id: "fn-billing",
            name: "Patient Billing",
            path: "/finance/billing",
            icon: Receipt,
            description: "Charge capture, proforma invoices, inpatient running bills.",
          },
          {
            id: "fn-cashier",
            name: "Cashier / Point of Sale",
            path: "/finance/cashier",
            icon: CreditCard,
            badge: "POS",
            description: "Cash, card, transfer receipting and daily cashier shift closing.",
          },
          {
            id: "fn-ar",
            name: "Accounts Receivable",
            path: "/finance/receivable",
            icon: Wallet,
            description: "Outstanding patient balances, corporate credit and debt aging.",
          },
          {
            id: "fn-ap",
            name: "Accounts Payable",
            path: "/finance/payable",
            icon: Receipt,
            description: "Vendor invoices, drug supplier payments and expense liabilities.",
          },
        ],
      },
      {
        groupTitle: "Accounting & Control",
        items: [
          {
            id: "fn-gl",
            name: "General Ledger",
            path: "/finance/general-ledger",
            icon: FileSpreadsheet,
            description: "Chart of accounts, journal vouchers, trial balance and ledger.",
          },
          {
            id: "fn-expenses",
            name: "Expense Management",
            path: "/finance/expenses",
            icon: Receipt,
            description: "Departmental petty cash, operational requisitions and vouchers.",
          },
          {
            id: "fn-budget",
            name: "Budget Management",
            path: "/finance/budget",
            icon: Sliders,
            description: "Fiscal departmental budget allocation, burn rate and variance.",
          },
          {
            id: "fn-rcm",
            name: "Revenue Cycle Management",
            path: "/finance/rcm",
            icon: TrendingUp,
            description: "End-to-end billing cycles, denial tracking and recovery rates.",
          },
          {
            id: "fn-reconciliation",
            name: "Payment Reconciliation",
            path: "/finance/reconciliation",
            icon: CheckCircle2,
            description: "Bank statement reconciliation, POS settlements and audits.",
          },
          {
            id: "fn-reports",
            name: "Financial Reports",
            path: "/finance/reports",
            icon: FileSpreadsheet,
            description: "P&L statements, balance sheets, departmental revenue reports.",
          },
        ],
      },
    ],
  },

  // 6. HMO & Insurance
  {
    id: "hmo",
    name: "HMO & Insurance",
    shortName: "HMO",
    path: "/hmo/overview",
    icon: ShieldCheck,
    category: "Managed Care & Claims",
    description: "HMO provider contracts, tariffs, claims adjudication and pre-authorizations.",
    groups: [
      {
        groupTitle: "Enrollee & Care Authorization",
        items: [
          {
            id: "hmo-overview",
            name: "HMO Overview",
            path: "/hmo/overview",
            icon: LayoutDashboard,
            description: "Claims turnaround metrics, HMO revenues and rejection ratios.",
          },
          {
            id: "hmo-companies",
            name: "HMO Companies",
            path: "/hmo/companies",
            icon: Building2,
            description: "Registered HMO underwriters, NHIA schemes and corporate plans.",
            tabs: [
              { key: "directory", label: "HMO Directory" },
              { key: "enrollees", label: "Enrollees" },
              { key: "eligibility", label: "Eligibility" },
              { key: "authorizations", label: "Authorizations" },
              { key: "claims", label: "Claims" },
              { key: "reconciliation", label: "Reconciliation" },
              { key: "reports", label: "Reports" },
            ],
          },
          {
            id: "hmo-enrollees",
            name: "Enrollee Management",
            path: "/hmo/enrollees",
            icon: Users,
            description: "Beneficiary policy validation, biometric verification and cards.",
          },
          {
            id: "hmo-eligibility",
            name: "Eligibility Verification",
            path: "/hmo/eligibility",
            icon: CheckCircle2,
            badge: "Instant",
            description: "Real-time insurance coverage checks and benefit package limits.",
          },
          {
            id: "hmo-auth",
            name: "Authorization & Pre-Auth",
            path: "/hmo/authorizations",
            icon: FileCheck,
            badge: "PA Code",
            description: "Pre-authorization code tracking for admissions and procedures.",
          },
          {
            id: "hmo-tariffs",
            name: "Tariff Management",
            path: "/hmo/tariffs",
            icon: Sliders,
            description: "Custom negotiated fee schedules, co-pays and exclusions.",
          },
        ],
      },
      {
        groupTitle: "Claims & Settlement",
        items: [
          {
            id: "hmo-submission",
            name: "Claims Submission",
            path: "/hmo/claims-submission",
            icon: Receipt,
            description: "Batch electronic claims generation, diagnostic coding (ICD-10).",
          },
          {
            id: "hmo-tracking",
            name: "Claims Tracking",
            path: "/hmo/claims-tracking",
            icon: Clock,
            description: "Vetting pipeline, under-review status and claims lifecycle.",
          },
          {
            id: "hmo-recon",
            name: "Claims Reconciliation",
            path: "/hmo/claims-reconciliation",
            icon: FileSpreadsheet,
            description: "Remittance advice matching, bulk payments and deductions.",
          },
          {
            id: "hmo-rejected",
            name: "Rejected Claims",
            path: "/hmo/rejected-claims",
            icon: AlertTriangle,
            badge: "Alerts",
            description: "Disputed claims, query responses and resubmissions.",
          },
          {
            id: "hmo-corporate",
            name: "Corporate Accounts",
            path: "/hmo/corporate-accounts",
            icon: Briefcase,
            description: "Direct corporate retainer clients, monthly credit billing.",
          },
          {
            id: "hmo-reports",
            name: "Insurance Reports",
            path: "/hmo/reports",
            icon: FileSpreadsheet,
            description: "Utilization audits, claims recovery velocity and loss ratios.",
          },
        ],
      },
    ],
  },

  // 7. Administration & Human Resources
  {
    id: "hr",
    name: "Administration & HR",
    shortName: "Admin & HR",
    path: "/hr/overview",
    icon: Briefcase,
    category: "People & Organization",
    description: "Hospital staff roster, payroll, licensing, appraisals and recruitment.",
    groups: [
      {
        groupTitle: "Workforce & Talent",
        items: [
          {
            id: "hr-overview",
            name: "HR Overview",
            path: "/hr/overview",
            icon: LayoutDashboard,
            description: "Staff headcount, department distribution, attendance and leaves.",
          },
          {
            id: "hr-employees",
            name: "Employee Management",
            path: "/hr/employees",
            icon: Users,
            description: "Master personnel file, bio-data, contracts and documents.",
            tabs: [
              { key: "directory", label: "Employee Directory" },
              { key: "profile", label: "Employee Profile" },
              { key: "employment", label: "Employment Information" },
              { key: "documents", label: "Documents & Credentials" },
              { key: "attendance", label: "Attendance History" },
              { key: "leave", label: "Leave History" },
              { key: "performance", label: "Performance History" },
            ],
          },
          {
            id: "hr-directory",
            name: "Staff Directory",
            path: "/hr/directory",
            icon: Users,
            description: "Hospital-wide internal extension contacts and duty allocations.",
          },
          {
            id: "hr-recruitment",
            name: "Recruitment & ATS",
            path: "/hr/recruitment",
            icon: Briefcase,
            description: "Job openings, candidate shortlists, interviews and offers.",
            tabs: [
              { key: "vacancies", label: "Job Vacancies" },
              { key: "applications", label: "Applications" },
              { key: "shortlisted", label: "Shortlisted Candidates" },
              { key: "interviews", label: "Interviews" },
              { key: "offers", label: "Offers" },
              { key: "reports", label: "Recruitment Reports" },
            ],
          },
          {
            id: "hr-onboarding",
            name: "Staff Onboarding",
            path: "/hr/onboarding",
            icon: CheckCircle2,
            description: "Induction checklist, hospital orientation and badge issuance.",
          },
        ],
      },
      {
        groupTitle: "Time, Shifts & Compensation",
        items: [
          {
            id: "hr-attendance",
            name: "Attendance Management",
            path: "/hr/attendance",
            icon: Clock,
            description: "Biometric clock-in records, overtime and punctuality tracking.",
          },
          {
            id: "hr-leave",
            name: "Leave Management",
            path: "/hr/leave",
            icon: CalendarDays,
            description: "Annual, maternity, study and sick leave approvals pipeline.",
          },
          {
            id: "hr-roster",
            name: "Duty Roster & Shift Scheduling",
            path: "/hr/duty-roster",
            icon: Activity,
            badge: "Shifts",
            description: "24-hour ward shift rotation, call duty and locum coverage.",
          },
          {
            id: "hr-payroll",
            name: "Payroll Management",
            path: "/hr/payroll",
            icon: Wallet,
            description: "Salary structures, deductions, PAYE tax, pensions and payslips.",
            tabs: [
              { key: "overview", label: "Payroll Overview" },
              { key: "structure", label: "Salary Structure" },
              { key: "processing", label: "Payroll Processing" },
              { key: "payslips", label: "Payslips" },
              { key: "deductions", label: "Deductions & Tax" },
              { key: "history", label: "Payroll History" },
              { key: "reports", label: "Payroll Reports" },
            ],
          },
        ],
      },
      {
        groupTitle: "Performance & Compliance",
        items: [
          {
            id: "hr-appraisal",
            name: "Staff Appraisal & Performance",
            path: "/hr/appraisal",
            icon: Award,
            description: "Annual 360 KPIs, clinical peer reviews and evaluations.",
          },
          {
            id: "hr-training",
            name: "Training & Development",
            path: "/hr/training",
            icon: GraduationCap,
            description: "CME credits, BLS/ACLS certifications and clinical workshops.",
          },
          {
            id: "hr-disciplinary",
            name: "Staff Disciplinary Management",
            path: "/hr/disciplinary",
            icon: AlertTriangle,
            description: "Incident investigations, queries, hearings and sanctions log.",
          },
          {
            id: "hr-benefits",
            name: "Employee Benefits & Welfare",
            path: "/hr/benefits",
            icon: Sparkles,
            description: "Staff healthcare scheme, pensions, gratuity and welfare loans.",
          },
          {
            id: "hr-credentials",
            name: "Credentialing & Licensing",
            path: "/hr/credentialing",
            icon: ShieldCheck,
            badge: "MDCN",
            description: "MDCN, NMCN, PCN license renewals and practice privileges.",
          },
          {
            id: "hr-workforce",
            name: "Workforce Planning",
            path: "/hr/workforce-planning",
            icon: Sliders,
            description: "Nurse-to-patient ratios, doctor staffing gaps and succession.",
          },
          {
            id: "hr-reports",
            name: "HR Reports",
            path: "/hr/reports",
            icon: FileSpreadsheet,
            description: "Turnover metrics, payroll totals, absenteeism and compliance.",
          },
        ],
      },
    ],
  },

  // 8. Procurement & Supply Chain
  {
    id: "procurement",
    name: "Procurement & Supply Chain",
    shortName: "Procurement",
    path: "/procurement/overview",
    icon: Truck,
    category: "Logistics & Materials",
    description: "Purchase requisitions, vendor contracts, inventory, GRN and stores.",
    groups: [
      {
        groupTitle: "Sourcing & Purchasing",
        items: [
          {
            id: "sc-overview",
            name: "Procurement Overview",
            path: "/procurement/overview",
            icon: LayoutDashboard,
            description: "Spend analysis, open purchase orders, low stock warnings.",
          },
          {
            id: "sc-requisitions",
            name: "Purchase Requisitions",
            path: "/procurement/requisitions",
            icon: ClipboardList,
            description: "Departmental item requests, approval workflow and verification.",
          },
          {
            id: "sc-po",
            name: "Purchase Orders",
            path: "/procurement/purchase-orders",
            icon: FileText,
            description: "Formal purchase orders issued to medical and pharmaceutical vendors.",
          },
          {
            id: "sc-suppliers",
            name: "Supplier & Vendor Management",
            path: "/procurement/suppliers",
            icon: Truck,
            description: "Approved supplier directory, price lists, terms and ratings.",
          },
          {
            id: "sc-contracts",
            name: "Tender & Contract Management",
            path: "/procurement/contracts",
            icon: FileSignature,
            description: "Equipment leasing, annual supply contracts and SLA reviews.",
          },
          {
            id: "sc-grn",
            name: "Goods Received Notes",
            path: "/procurement/grn",
            icon: CheckCircle2,
            badge: "GRN",
            description: "Delivery inspection, batch number verification and store intake.",
          },
        ],
      },
      {
        groupTitle: "Stores & Material Control",
        items: [
          {
            id: "sc-inventory",
            name: "Inventory Management",
            path: "/procurement/inventory",
            icon: Boxes,
            description: "Central warehouse stock levels, reorder thresholds and safety stock.",
            tabs: [
              { key: "requisitions", label: "Requisitions" },
              { key: "purchase-orders", label: "Purchase Orders" },
              { key: "suppliers", label: "Suppliers" },
              { key: "goods-received", label: "Goods Received" },
              { key: "approvals", label: "Approvals" },
              { key: "history", label: "Procurement History" },
            ],
          },
          {
            id: "sc-stores",
            name: "Store Management",
            path: "/procurement/stores",
            icon: Building2,
            description: "Sub-store locations: Central, Theatre, Emergency, Ward stores.",
          },
          {
            id: "sc-transfers",
            name: "Stock Transfers",
            path: "/procurement/stock-transfers",
            icon: Truck,
            description: "Inter-departmental stock issuances and dispatch acknowledgements.",
          },
          {
            id: "sc-recon",
            name: "Stock Reconciliation",
            path: "/procurement/stock-reconciliation",
            icon: FileSpreadsheet,
            description: "Physical stock-take, inventory variance audits and adjustments.",
          },
          {
            id: "sc-expiry",
            name: "Expiry & Batch Tracking",
            path: "/procurement/expiry-tracking",
            icon: AlertTriangle,
            badge: "FEFO",
            description: "First-Expiry-First-Out automated alerts and quarantine logs.",
          },
          {
            id: "sc-consumables",
            name: "Medical Consumables",
            path: "/procurement/consumables",
            icon: Syringe,
            description: "Syringes, cannulas, surgical gloves, gauze and disposables.",
          },
          {
            id: "sc-pharm-stock",
            name: "Pharmaceutical Inventory",
            path: "/procurement/pharmaceutical-stock",
            icon: Pill,
            description: "Therapeutic drug classes, bulk injections, fluids and vaccines.",
          },
          {
            id: "sc-assets",
            name: "Asset Management",
            path: "/procurement/assets",
            icon: Layers,
            description: "Fixed assets register, tagging, location, depreciation.",
          },
          {
            id: "sc-reports",
            name: "Procurement Reports",
            path: "/procurement/reports",
            icon: FileSpreadsheet,
            description: "Stock consumption velocity, expenditure analysis and aging.",
          },
        ],
      },
    ],
  },

  // 9. Quality Assurance & Compliance
  {
    id: "quality",
    name: "Quality & Compliance",
    shortName: "Quality & QA",
    path: "/quality/overview",
    icon: Award,
    category: "Safety & Standards",
    description: "Clinical audit, patient safety, incident reporting, risk and accreditation.",
    groups: [
      {
        groupTitle: "Audits & Governance",
        items: [
          {
            id: "qa-overview",
            name: "Quality Overview",
            path: "/quality/overview",
            icon: LayoutDashboard,
            description: "Key quality indicators, sentinel event counts and audit rates.",
            tabs: [
              { key: "indicators", label: "Quality Indicators" },
              { key: "audits", label: "Clinical Audits" },
              { key: "incidents", label: "Incident Reports" },
              { key: "risk", label: "Risk Register" },
              { key: "capa", label: "CAPA" },
              { key: "compliance", label: "Compliance" },
              { key: "reports", label: "Reports" },
            ],
          },
          {
            id: "qa-clinical-audit",
            name: "Clinical Audit",
            path: "/quality/clinical-audit",
            icon: ClipboardCheck,
            description: "Mortality & morbidity reviews, surgical outcome peer evaluations.",
          },
          {
            id: "qa-internal-audit",
            name: "Internal Audit",
            path: "/quality/internal-audit",
            icon: CheckCircle2,
            description: "Process compliance, documentation completeness and protocol checks.",
          },
          {
            id: "qa-governance",
            name: "Clinical Governance",
            path: "/quality/governance",
            icon: ShieldCheck,
            description: "Hospital ethics board, practice guidelines and credential privileges.",
          },
          {
            id: "qa-accreditation",
            name: "Accreditation Management",
            path: "/quality/accreditation",
            icon: Award,
            badge: "JCI/COHSASA",
            description: "National & international hospital accreditation readiness tracking.",
          },
        ],
      },
      {
        groupTitle: "Safety, Risk & Incidents",
        items: [
          {
            id: "qa-patient-safety",
            name: "Patient Safety",
            path: "/quality/patient-safety",
            icon: Shield,
            description: "WHO Patient Safety Goals: surgical safety, medication errors, falls.",
          },
          {
            id: "qa-incident",
            name: "Incident & Adverse Event Reporting",
            path: "/quality/incident-reporting",
            icon: AlertTriangle,
            badge: "Critical",
            description: "Near-miss logging, adverse drug reactions, root cause analysis.",
          },
          {
            id: "qa-risk",
            name: "Risk Management",
            path: "/quality/risk-management",
            icon: ShieldAlert,
            description: "Enterprise risk register, hazard mitigation and severity scoring.",
          },
          {
            id: "qa-regulatory",
            name: "Regulatory Compliance",
            path: "/quality/regulatory",
            icon: FileCheck,
            description: "Ministry of Health, HEFAMAA, radiation safety and statutory codes.",
          },
          {
            id: "qa-sop",
            name: "SOP & Policy Management",
            path: "/quality/sop-policies",
            icon: FileText,
            description: "Hospital standard operating procedures, version control and signatures.",
          },
          {
            id: "qa-infection",
            name: "Infection Control Audits",
            path: "/quality/infection-control",
            icon: Droplets,
            description: "HAI surveillance, hand hygiene audits, sterile processing checks.",
          },
          {
            id: "qa-satisfaction",
            name: "Patient Satisfaction",
            path: "/quality/satisfaction",
            icon: MessageSquare,
            description: "Net Promoter Score, patient care surveys and experience feedback.",
          },
          {
            id: "qa-capa",
            name: "Corrective & Preventive Actions",
            path: "/quality/capa",
            icon: CheckCircle2,
            badge: "CAPA",
            description: "Corrective action tracking, preventive reviews and resolution closure.",
          },
        ],
      },
    ],
  },

  // 10. Hospital Operations & Facilities
  {
    id: "operations",
    name: "Operations & Facilities",
    shortName: "Operations",
    path: "/operations/overview",
    icon: Building2,
    category: "Infrastructure & Estates",
    description: "Facility maintenance, biomedical engineering, power, transport and security.",
    groups: [
      {
        groupTitle: "Estates & Engineering",
        items: [
          {
            id: "op-overview",
            name: "Operations Overview",
            path: "/operations/overview",
            icon: LayoutDashboard,
            description: "Facility tickets, power uptime, generator fuel levels and vehicles.",
          },
          {
            id: "op-facility",
            name: "Facility Management",
            path: "/operations/facilities",
            icon: Building2,
            description: "Building repairs, HVAC, plumbing, civil maintenance work orders.",
          },
          {
            id: "op-biomedical",
            name: "Biomedical Engineering",
            path: "/operations/biomedical",
            icon: Wrench,
            badge: "BioMed",
            description: "Clinical equipment calibration, PPM schedules and safety testing.",
          },
          {
            id: "op-equipment",
            name: "Equipment Maintenance",
            path: "/operations/equipment",
            icon: Settings2,
            description: "Breakdown logs, vendor service contracts and maintenance history.",
          },
          {
            id: "op-infrastructure",
            name: "Infrastructure Management",
            path: "/operations/infrastructure",
            icon: Layers,
            description: "Hospital campus assets, roofing, electrical switchgear and lifts.",
          },
          {
            id: "op-power",
            name: "Power & Generator Management",
            path: "/operations/power-energy",
            icon: Zap,
            description: "Utility grid monitoring, diesel generators, solar backup and fuel logs.",
          },
          {
            id: "op-water",
            name: "Water & Environmental Management",
            path: "/operations/water-environment",
            icon: Droplets,
            description: "Borehole filtration, water testing, sewage treatment and ecology.",
          },
        ],
      },
      {
        groupTitle: "Hospital Support Services",
        items: [
          {
            id: "op-housekeeping",
            name: "Housekeeping",
            path: "/operations/housekeeping",
            icon: Sparkles,
            description: "Ward cleaning schedules, terminal disinfection and hygiene ratings.",
          },
          {
            id: "op-laundry",
            name: "Laundry Management",
            path: "/operations/laundry",
            icon: Boxes,
            description: "Bed linen circulation, surgical drapes washing and sterilization.",
          },
          {
            id: "op-security",
            name: "Security Management",
            path: "/operations/security",
            icon: Shield,
            description: "CCTV surveillance, guard posts, visitor passes and perimeter safety.",
          },
          {
            id: "op-ambulance",
            name: "Transport & Ambulance",
            path: "/operations/ambulance",
            icon: Car,
            badge: "Ambulance",
            description: "Emergency fleet dispatch, paramedic readiness and vehicle maintenance.",
          },
          {
            id: "op-catering",
            name: "Catering & Cafeteria",
            path: "/operations/catering",
            icon: UtensilsCrossed,
            description: "Inpatient meal preparation, dietary orders and hospital cafeteria.",
          },
          {
            id: "op-waste",
            name: "Waste Management",
            path: "/operations/waste",
            icon: Trash2,
            description: "Biohazard medical sharps disposal, incinerator logs and segregation.",
          },
          {
            id: "op-parking",
            name: "Parking Management",
            path: "/operations/parking",
            icon: Car,
            description: "Hospital car park slots, doctor reserved bays and security barrier logs.",
          },
        ],
      },
    ],
  },

  // 11. ICT & Digital Health
  {
    id: "ict",
    name: "ICT & Digital Health",
    shortName: "ICT & IT",
    path: "/ict/overview",
    icon: Cpu,
    category: "Technology & Systems",
    description: "Service desk, networking, cybersecurity, backup recovery and system audit.",
    groups: [
      {
        groupTitle: "Support & Infrastructure",
        items: [
          {
            id: "it-overview",
            name: "ICT Overview",
            path: "/ict/overview",
            icon: LayoutDashboard,
            description: "Server health, active connections, helpdesk queue and uptime.",
          },
          {
            id: "it-helpdesk",
            name: "ICT Service Desk",
            path: "/ict/service-desk",
            icon: HelpCircle,
            badge: "Support",
            description: "IT support ticketing, workstation issues and printer troubleshooting.",
          },
          {
            id: "it-assets",
            name: "IT Asset Management",
            path: "/ict/assets",
            icon: Layers,
            description: "Laptops, barcode scanners, thermal printers and networking hardware.",
          },
          {
            id: "it-network",
            name: "Network Monitoring",
            path: "/ict/network",
            icon: Radio,
            description: "LAN / Wi-Fi telemetry, bandwidth utilization and router interfaces.",
          },
        ],
      },
      {
        groupTitle: "Security & Operations",
        items: [
          {
            id: "it-access",
            name: "User & Access Management",
            path: "/ict/access-control",
            icon: Lock,
            description: "Active directory, single sign-on, session resets and password policies.",
          },
          {
            id: "it-security",
            name: "Cybersecurity",
            path: "/ict/cybersecurity",
            icon: ShieldAlert,
            badge: "Security",
            description: "Firewall intrusion detection, endpoint antivirus and threat detection.",
          },
          {
            id: "it-config",
            name: "System Configuration",
            path: "/ict/configuration",
            icon: Settings2,
            description: "Environment variables, mail server (SMTP), SMS gateways and API keys.",
          },
          {
            id: "it-backup",
            name: "Backup & Disaster Recovery",
            path: "/ict/backup-recovery",
            icon: Server,
            description: "Automated database snapshots, offsite backups and recovery drills.",
          },
          {
            id: "it-audit",
            name: "System Audit Logs",
            path: "/ict/audit-logs",
            icon: FileText,
            description: "Access logs, query telemetry, authentication events and IP trails.",
          },
          {
            id: "it-integrations",
            name: "Integration Management",
            path: "/ict/integrations",
            icon: Database,
            description: "HL7 / FHIR interfaces, PACS DICOM gateways, payment APIs.",
          },
          {
            id: "it-data",
            name: "Data Management",
            path: "/ict/data-management",
            icon: Database,
            description: "Database retention policies, archiving and storage optimization.",
          },
          {
            id: "it-monitoring",
            name: "System Monitoring",
            path: "/ict/monitoring",
            icon: Activity,
            description: "Application performance, response times and error rate telemetry.",
          },
        ],
      },
    ],
  },

  // 12. Reports & Analytics
  {
    id: "analytics",
    name: "Reports & Analytics",
    shortName: "Analytics",
    path: "/analytics/executive",
    icon: BarChart3,
    category: "Intelligence & BI",
    description: "Hospital performance dashboards, clinical metrics and financial analytics.",
    groups: [
      {
        groupTitle: "Executive Intelligence",
        items: [
          {
            id: "an-executive",
            name: "Executive Dashboard",
            path: "/analytics/executive",
            icon: LayoutDashboard,
            description: "Board-level KPI summary: revenue, occupancy, length of stay and margins.",
          },
          {
            id: "an-performance",
            name: "Hospital Performance",
            path: "/analytics/performance",
            icon: TrendingUp,
            description: "Overall institutional productivity, patient throughput and targets.",
          },
          {
            id: "an-kpis",
            name: "KPI Monitoring",
            path: "/analytics/kpis",
            icon: Award,
            description: "Strategic healthcare key performance indicators and benchmarks.",
          },
        ],
      },
      {
        groupTitle: "Specialized Intelligence",
        items: [
          {
            id: "an-clinical",
            name: "Clinical Analytics",
            path: "/analytics/clinical",
            icon: Stethoscope,
            description: "Disease incidence, surgical volumes, mortality and re-admission rates.",
          },
          {
            id: "an-financial",
            name: "Financial Analytics",
            path: "/analytics/financial",
            icon: CreditCard,
            description: "Cost center analysis, revenue leakage, profitability by specialty.",
          },
          {
            id: "an-hr",
            name: "HR Analytics",
            path: "/analytics/hr",
            icon: Users,
            description: "Staff productivity, overtime expenditures and retention analytics.",
          },
          {
            id: "an-operational",
            name: "Operational Analytics",
            path: "/analytics/operations",
            icon: Building2,
            description: "Bed turnover interval, average wait time and room utilization.",
          },
          {
            id: "an-patients",
            name: "Patient Statistics",
            path: "/analytics/patient-statistics",
            icon: Users,
            description: "Demographic breakdown, geographic spread and payer mix.",
          },
          {
            id: "an-departmental",
            name: "Departmental Reports",
            path: "/analytics/departmental",
            icon: FileSpreadsheet,
            description: "Custom monthly operational report generation per department.",
          },
          {
            id: "an-management",
            name: "Management Reports",
            path: "/analytics/management",
            icon: FileText,
            description: "Hospital executive director monthly briefing pack exports.",
          },
        ],
      },
    ],
  },

  // 13. System Administration
  {
    id: "system-admin",
    name: "System Administration",
    shortName: "System Admin",
    path: "/system-admin/users",
    icon: Settings2,
    category: "Administration & Config",
    description: "Roles, permissions, hospital settings, department configs and audit logs.",
    groups: [
      {
        groupTitle: "Security & RBAC",
        items: [
          {
            id: "adm-users",
            name: "User Management",
            path: "/system-admin/users",
            icon: Users,
            description: "Create, activate, deactivate staff logins and assign credentials.",
          },
          {
            id: "adm-roles",
            name: "Role Management",
            path: "/system-admin/roles",
            icon: ShieldCheck,
            description: "Define Doctor, Nurse, Pharmacist, Lab Tech, Billing, Admin roles.",
          },
          {
            id: "adm-permissions",
            name: "Permission Management",
            path: "/system-admin/permissions",
            icon: Lock,
            badge: "RBAC",
            description: "Granular view, create, edit, approve, delete permissions matrix.",
          },
        ],
      },
      {
        groupTitle: "Hospital Configuration",
        items: [
          {
            id: "adm-departments",
            name: "Department Configuration",
            path: "/system-admin/departments",
            icon: Building2,
            description: "Configure clinical wards, consultation rooms, clinics and units.",
          },
          {
            id: "adm-profile",
            name: "Hospital Configuration",
            path: "/system-admin/hospital-profile",
            icon: Building2,
            description: "Hospital name, logo, branches, letterhead and contact information.",
          },
          {
            id: "adm-workflows",
            name: "Workflow Configuration",
            path: "/system-admin/workflows",
            icon: Sliders,
            description: "Custom approval stages, billing mandatory rules and triage paths.",
          },
          {
            id: "adm-notifications",
            name: "Notification Settings",
            path: "/system-admin/notifications",
            icon: ShieldAlert,
            description: "SMS, email and in-app alert templates and trigger conditions.",
          },
          {
            id: "adm-audit",
            name: "Audit Logs",
            path: "/system-admin/audit-logs",
            icon: FileText,
            description: "Complete chronological audit trail of all data changes and edits.",
          },
          {
            id: "adm-settings",
            name: "System Settings",
            path: "/system-admin/settings",
            icon: Settings2,
            description: "Global currency, date format, fiscal calendar and session timeouts.",
          },
        ],
      },
    ],
  },
];

/**
 * Resolves the active department from any given pathname.
 * Gracefully maps legacy and nested paths to their corresponding HMIS department.
 */
export function findDepartmentByPath(pathname: string): DepartmentConfig {
  const cleanPath = pathname.toLowerCase();

  // 1. Patient Management paths
  if (
    cleanPath === "/patients" ||
    cleanPath.startsWith("/patients/") ||
    cleanPath.startsWith("/appointments") ||
    cleanPath.startsWith("/admissions")
  ) {
    return HMIS_DEPARTMENTS[1]; // Patient Management
  }

  // 2. Clinical Services paths
  if (cleanPath.startsWith("/clinical")) {
    return HMIS_DEPARTMENTS[2]; // Clinical Services
  }

  // 3. Pharmacy & Diagnostics paths (including legacy /pharmacy and /lab routes)
  if (
    cleanPath.startsWith("/pharmacy") ||
    cleanPath.startsWith("/lab") ||
    cleanPath.startsWith("/diagnostics")
  ) {
    return HMIS_DEPARTMENTS[3]; // Pharmacy & Diagnostics
  }

  // 4. Finance & Billing paths (including /payments and /invoices)
  if (
    cleanPath.startsWith("/finance") ||
    cleanPath.startsWith("/billing") ||
    cleanPath.startsWith("/payments") ||
    cleanPath.startsWith("/invoices")
  ) {
    return HMIS_DEPARTMENTS[4]; // Finance & Billing
  }

  // 5. HMO & Insurance paths
  if (cleanPath.startsWith("/hmo")) {
    return HMIS_DEPARTMENTS[5]; // HMO & Insurance
  }

  // 6. Administration & HR paths
  if (cleanPath.startsWith("/hr") || cleanPath.startsWith("/staff")) {
    return HMIS_DEPARTMENTS[6]; // HR
  }

  // 7. Procurement & Supply Chain (including /products and /stock-logs)
  if (
    cleanPath.startsWith("/procurement") ||
    cleanPath.startsWith("/supply") ||
    cleanPath.startsWith("/products") ||
    cleanPath.startsWith("/stock-logs")
  ) {
    return HMIS_DEPARTMENTS[7]; // Procurement
  }

  // 8. Quality Assurance & Compliance
  if (cleanPath.startsWith("/quality") || cleanPath.startsWith("/compliance")) {
    return HMIS_DEPARTMENTS[8]; // Quality
  }

  // 9. Hospital Operations & Facilities
  if (
    cleanPath.startsWith("/operations") ||
    cleanPath.startsWith("/facilities")
  ) {
    return HMIS_DEPARTMENTS[9]; // Operations
  }

  // 10. ICT & Digital Health
  if (cleanPath.startsWith("/ict") || cleanPath.startsWith("/it")) {
    return HMIS_DEPARTMENTS[10]; // ICT
  }

  // 11. Reports & Analytics
  if (cleanPath.startsWith("/analytics") || cleanPath.startsWith("/reports")) {
    return HMIS_DEPARTMENTS[11]; // Analytics
  }

  // 12. System Administration
  if (
    cleanPath.startsWith("/system-admin") ||
    cleanPath.startsWith("/admin")
  ) {
    return HMIS_DEPARTMENTS[12]; // System Admin
  }

  // Default to Dashboard
  return HMIS_DEPARTMENTS[0];
}
