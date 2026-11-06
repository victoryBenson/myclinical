import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayouts";

// 1. Dashboard
import HospitalDashboard from "../pages/dashboard/HospitalDashboard";
import BedOccupancy from "../pages/dashboard/BedOccupancy";
import ClinicalHuddle from "../pages/dashboard/ClinicalHuddle";
import EmergencyStatus from "../pages/dashboard/EmergencyStatus";
import DepartmentStatus from "../pages/dashboard/DepartmentStatus";
import HospitalAlerts from "../pages/dashboard/HospitalAlerts";

// 2. Patient Management
import PatientDashboard from "../pages/patients/PatientDashboard";
import Patients from "../pages/patients/Patients";
import CreatePatientDashboard from "../pages/patients/CreatePatientDashboard";
import PatientProfiles from "../pages/patients/PatientProfiles";
import PatientAdt from "../pages/patients/PatientAdt";
import PatientEmr from "../pages/patients/PatientEmr";
import PatientFeedback from "../pages/patients/PatientFeedback";
import PatientReferrals from "../pages/patients/PatientReferrals";
import PatientReports from "../pages/patients/PatientReports";
import Appointments from "../pages/appointments/Home";

// 3. Clinical Services
import ClinicalOverview from "../pages/clinical/ClinicalOverview";
import DoctorManagement from "../pages/clinical/DoctorManagement";
import NursingManagement from "../pages/clinical/NursingManagement";
import OutpatientDept from "../pages/clinical/OutpatientDept";
import InpatientDept from "../pages/clinical/InpatientDept";
import EmergencyDept from "../pages/clinical/EmergencyDept";
import OperatingTheatre from "../pages/clinical/OperatingTheatre";
import IntensiveCareUnit from "../pages/clinical/IntensiveCareUnit";
import MaternityObstetrics from "../pages/clinical/MaternityObstetrics";
import Paediatrics from "../pages/clinical/Paediatrics";
import PhysiotherapyRehab from "../pages/clinical/PhysiotherapyRehab";
import DieteticsNutrition from "../pages/clinical/DieteticsNutrition";
import ClinicalProcedures from "../pages/clinical/ClinicalProcedures";
import ClinicalDocumentation from "../pages/clinical/ClinicalDocumentation";
import VitalSignsObservations from "../pages/clinical/VitalSignsObservations";
import DischargePlanning from "../pages/clinical/DischargePlanning";

// 4. Pharmacy & Diagnostics
import PharmacyDashboard from "../pages/pharmacy/PharmacyDashboard";
import PharmacyManagement from "../pages/pharmacy/PharmacyManagement";
import Medications from "../pages/pharmacy/Medications";
import Inventory from "../pages/pharmacy/Inventory";
import Prescriptions from "../pages/pharmacy/Prescriptions";
import Suppliers from "../pages/pharmacy/Suppliers";
import PharmacyOrders from "../pages/pharmacy/PharmacyOrders";
import PharmacySales from "../pages/pharmacy/Sales";
import MedicationAdministration from "../pages/pharmacy/MedicationAdministration";

import LabDashboard from "../pages/lab/LabDashboard";
import NewLabRequest from "../pages/lab/NewLabRequests";
import LabRequests from "../pages/lab/LabRequests";
import LabQueue from "../pages/lab/LabQueue";
import LabResults from "../pages/lab/LabResults";
import LabReports from "../pages/lab/LabReports";

import RadiologyImaging from "../pages/diagnostics/RadiologyImaging";
import BloodBankTransfusion from "../pages/diagnostics/BloodBankTransfusion";
import DiagnosticReports from "../pages/diagnostics/DiagnosticReports";

// 5. Finance & Billing
import FinanceOverview from "../pages/finance/FinanceOverview";
import PatientBilling from "../pages/finance/PatientBilling";
import CashierPos from "../pages/finance/CashierPos";
import AccountsReceivable from "../pages/finance/AccountsReceivable";
import AccountsPayable from "../pages/finance/AccountsPayable";
import GeneralLedger from "../pages/finance/GeneralLedger";
import ExpenseManagement from "../pages/finance/ExpenseManagement";
import BudgetManagement from "../pages/finance/BudgetManagement";
import RevenueCycleManagement from "../pages/finance/RevenueCycleManagement";
import PaymentReconciliation from "../pages/finance/PaymentReconciliation";
import FinancialReports from "../pages/finance/FinancialReports";

// 6. HMO & Insurance
import HmoOverview from "../pages/hmo/HmoOverview";
import HmoCompanies from "../pages/hmo/HmoCompanies";
import EnrolleeManagement from "../pages/hmo/EnrolleeManagement";
import EligibilityVerification from "../pages/hmo/EligibilityVerification";
import AuthorizationManagement from "../pages/hmo/AuthorizationManagement";
import TariffManagement from "../pages/hmo/TariffManagement";
import ClaimsSubmission from "../pages/hmo/ClaimsSubmission";
import ClaimsTracking from "../pages/hmo/ClaimsTracking";
import ClaimsReconciliation from "../pages/hmo/ClaimsReconciliation";
import RejectedClaims from "../pages/hmo/RejectedClaims";
import CorporateAccounts from "../pages/hmo/CorporateAccounts";
import HmoReports from "../pages/hmo/HmoReports";

// 7. Administration & HR
import HrOverview from "../pages/hr/HrOverview";
import EmployeeManagement from "../pages/hr/EmployeeManagement";
import StaffDirectory from "../pages/hr/StaffDirectory";
import RecruitmentAts from "../pages/hr/RecruitmentAts";
import StaffOnboarding from "../pages/hr/StaffOnboarding";
import AttendanceManagement from "../pages/hr/AttendanceManagement";
import LeaveManagement from "../pages/hr/LeaveManagement";
import DutyRoster from "../pages/hr/DutyRoster";
import PayrollManagement from "../pages/hr/PayrollManagement";
import StaffAppraisal from "../pages/hr/StaffAppraisal";
import TrainingDevelopment from "../pages/hr/TrainingDevelopment";
import DisciplinaryManagement from "../pages/hr/DisciplinaryManagement";
import EmployeeBenefits from "../pages/hr/EmployeeBenefits";
import CredentialingLicensing from "../pages/hr/CredentialingLicensing";
import WorkforcePlanning from "../pages/hr/WorkforcePlanning";
import HrReports from "../pages/hr/HrReports";

// 8. Procurement & Supply Chain
import ProcurementOverview from "../pages/procurement/ProcurementOverview";
import PurchaseRequisitions from "../pages/procurement/PurchaseRequisitions";
import PurchaseOrders from "../pages/procurement/PurchaseOrders";
import SupplierVendorManagement from "../pages/procurement/SupplierVendorManagement";
import TenderContractManagement from "../pages/procurement/TenderContractManagement";
import GoodsReceivedNotes from "../pages/procurement/GoodsReceivedNotes";
import ProcurementInventory from "../pages/procurement/ProcurementInventory";
import StoreManagement from "../pages/procurement/StoreManagement";
import StockTransfers from "../pages/procurement/StockTransfers";
import StockReconciliation from "../pages/procurement/StockReconciliation";
import ExpiryBatchTracking from "../pages/procurement/ExpiryBatchTracking";
import MedicalConsumables from "../pages/procurement/MedicalConsumables";
import PharmaceuticalStock from "../pages/procurement/PharmaceuticalStock";
import AssetManagement from "../pages/procurement/AssetManagement";
import ProcurementReports from "../pages/procurement/ProcurementReports";

// 9. Quality Assurance & Compliance
import QualityOverview from "../pages/quality/QualityOverview";
import ClinicalAudit from "../pages/quality/ClinicalAudit";
import InternalAudit from "../pages/quality/InternalAudit";
import PatientSafety from "../pages/quality/PatientSafety";
import IncidentReporting from "../pages/quality/IncidentReporting";
import RiskManagement from "../pages/quality/RiskManagement";
import ClinicalGovernance from "../pages/quality/ClinicalGovernance";
import AccreditationManagement from "../pages/quality/AccreditationManagement";
import RegulatoryCompliance from "../pages/quality/RegulatoryCompliance";
import SopPolicies from "../pages/quality/SopPolicies";
import InfectionControl from "../pages/quality/InfectionControl";
import PatientSatisfaction from "../pages/quality/PatientSatisfaction";
import CapaManagement from "../pages/quality/CapaManagement";

// 10. Operations & Facilities
import OperationsOverview from "../pages/operations/OperationsOverview";
import FacilityManagement from "../pages/operations/FacilityManagement";
import BiomedicalEngineering from "../pages/operations/BiomedicalEngineering";
import EquipmentMaintenance from "../pages/operations/EquipmentMaintenance";
import InfrastructureManagement from "../pages/operations/InfrastructureManagement";
import PowerEnergyManagement from "../pages/operations/PowerEnergyManagement";
import WaterEnvironment from "../pages/operations/WaterEnvironment";
import HousekeepingManagement from "../pages/operations/HousekeepingManagement";
import LaundryManagement from "../pages/operations/LaundryManagement";
import SecurityManagement from "../pages/operations/SecurityManagement";
import TransportAmbulance from "../pages/operations/TransportAmbulance";
import CateringCafeteria from "../pages/operations/CateringCafeteria";
import WasteManagement from "../pages/operations/WasteManagement";
import ParkingManagement from "../pages/operations/ParkingManagement";

// 11. ICT & Digital Health
import IctOverview from "../pages/ict/IctOverview";
import IctServiceDesk from "../pages/ict/IctServiceDesk";
import ItAssetManagement from "../pages/ict/ItAssetManagement";
import NetworkMonitoring from "../pages/ict/NetworkMonitoring";
import UserAccessManagement from "../pages/ict/UserAccessManagement";
import Cybersecurity from "../pages/ict/Cybersecurity";
import SystemConfiguration from "../pages/ict/SystemConfiguration";
import BackupDisasterRecovery from "../pages/ict/BackupDisasterRecovery";
import SystemAuditLogs from "../pages/ict/SystemAuditLogs";
import IntegrationManagement from "../pages/ict/IntegrationManagement";
import DataManagement from "../pages/ict/DataManagement";
import SystemMonitoring from "../pages/ict/SystemMonitoring";

// 12. Reports & Analytics
import ExecutiveDashboard from "../pages/analytics/ExecutiveDashboard";
import HospitalPerformance from "../pages/analytics/HospitalPerformance";
import ClinicalAnalytics from "../pages/analytics/ClinicalAnalytics";
import FinancialAnalytics from "../pages/analytics/FinancialAnalytics";
import HrAnalytics from "../pages/analytics/HrAnalytics";
import OperationalAnalytics from "../pages/analytics/OperationalAnalytics";
import PatientStatistics from "../pages/analytics/PatientStatistics";
import DepartmentalReports from "../pages/analytics/DepartmentalReports";
import ManagementReports from "../pages/analytics/ManagementReports";
import KpiMonitoring from "../pages/analytics/KpiMonitoring";

// 13. System Administration
import UserManagement from "../pages/system-admin/UserManagement";
import RoleManagement from "../pages/system-admin/RoleManagement";
import PermissionManagement from "../pages/system-admin/PermissionManagement";
import DepartmentConfig from "../pages/system-admin/DepartmentConfig";
import HospitalConfig from "../pages/system-admin/HospitalConfig";
import WorkflowConfig from "../pages/system-admin/WorkflowConfig";
import NotificationSettings from "../pages/system-admin/NotificationSettings";
import AdminAuditLogs from "../pages/system-admin/SystemAuditLogs";
import SystemSettings from "../pages/system-admin/SystemSettings";

interface AppRoutesProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function AppRoutes({ isDark, toggleTheme }: AppRoutesProps) {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/unauthorized" element={<div className="p-8 text-center text-rose-500 font-semibold">Unauthorized Access</div>} />

        {/* Protected HMIS Application Shell */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout isDark={isDark} toggleTheme={toggleTheme} />
            </ProtectedRoute>
          }
        >
          {/* ========================================================= */}
          {/* 1. DASHBOARD                                              */}
          {/* ========================================================= */}
          <Route path="/" element={<HospitalDashboard />} />
          <Route path="/dashboard" element={<HospitalDashboard />} />
          <Route path="/dashboard/bed-occupancy" element={<BedOccupancy />} />
          <Route path="/dashboard/clinical-huddle" element={<ClinicalHuddle />} />
          <Route path="/dashboard/emergency-status" element={<EmergencyStatus />} />
          <Route path="/dashboard/department-status" element={<DepartmentStatus />} />
          <Route path="/dashboard/alerts" element={<HospitalAlerts />} />

          {/* ========================================================= */}
          {/* 2. PATIENT MANAGEMENT                                     */}
          {/* ========================================================= */}
          <Route path="/patients" element={<PatientDashboard />} />
          <Route path="/patients/overview" element={<PatientDashboard />} />
          <Route path="/patients/registration" element={<CreatePatientDashboard />} />
          <Route path="/patients/directory" element={<Patients />} />
          <Route path="/patients/profiles" element={<PatientProfiles />} />
          <Route path="/patients/appointments" element={<Appointments />} />
          <Route path="/appointments/new" element={<Appointments />} />
          <Route path="/patients/adt" element={<PatientAdt />} />
          <Route path="/admissions" element={<PatientAdt />} />
          <Route path="/patients/emr" element={<PatientEmr />} />
          <Route path="/patients/feedback" element={<PatientFeedback />} />
          <Route path="/patients/referrals" element={<PatientReferrals />} />
          <Route path="/patients/reports" element={<PatientReports />} />

          {/* ========================================================= */}
          {/* 3. CLINICAL SERVICES                                      */}
          {/* ========================================================= */}
          <Route path="/clinical" element={<ClinicalOverview />} />
          <Route path="/clinical/overview" element={<ClinicalOverview />} />
          <Route path="/clinical/doctors" element={<DoctorManagement />} />
          <Route path="/clinical/nursing" element={<NursingManagement />} />
          <Route path="/clinical/opd" element={<OutpatientDept />} />
          <Route path="/clinical/ipd" element={<InpatientDept />} />
          <Route path="/clinical/emergency" element={<EmergencyDept />} />
          <Route path="/clinical/theatre" element={<OperatingTheatre />} />
          <Route path="/clinical/icu" element={<IntensiveCareUnit />} />
          <Route path="/clinical/maternity" element={<MaternityObstetrics />} />
          <Route path="/clinical/paediatrics" element={<Paediatrics />} />
          <Route path="/clinical/physiotherapy" element={<PhysiotherapyRehab />} />
          <Route path="/clinical/dietetics" element={<DieteticsNutrition />} />
          <Route path="/clinical/procedures" element={<ClinicalProcedures />} />
          <Route path="/clinical/documentation" element={<ClinicalDocumentation />} />
          <Route path="/clinical/vitals" element={<VitalSignsObservations />} />
          <Route path="/clinical/discharge-planning" element={<DischargePlanning />} />

          {/* ========================================================= */}
          {/* 4. PHARMACY & DIAGNOSTICS                                 */}
          {/* ========================================================= */}
          <Route path="/pharmacy" element={<PharmacyDashboard />} />
          <Route path="/pharmacy/overview" element={<PharmacyDashboard />} />
          <Route path="/pharmacy/management" element={<PharmacyManagement />} />
          <Route path="/pharmacy/medications" element={<Medications />} />
          <Route path="/pharmacy/inventory" element={<Inventory />} />
          <Route path="/pharmacy/prescriptions" element={<Prescriptions />} />
          <Route path="/pharmacy/suppliers" element={<Suppliers />} />
          <Route path="/pharmacy/purchase-orders" element={<PharmacyOrders />} />
          <Route path="/pharmacy/sales" element={<PharmacySales />} />
          <Route path="/pharmacy/medication-administration" element={<MedicationAdministration />} />

          {/* Medical Lab Routes */}
          <Route path="/lab" element={<LabDashboard />} />
          <Route path="/lab/new-request" element={<NewLabRequest />} />
          <Route path="/lab/requests" element={<LabRequests />} />
          <Route path="/lab/queue" element={<LabQueue />} />
          <Route path="/lab/results" element={<LabResults />} />
          <Route path="/lab/reports" element={<LabReports />} />

          {/* Imaging & Diagnostics */}
          <Route path="/diagnostics/radiology" element={<RadiologyImaging />} />
          <Route path="/diagnostics/blood-bank" element={<BloodBankTransfusion />} />
          <Route path="/diagnostics/reports" element={<DiagnosticReports />} />

          {/* ========================================================= */}
          {/* 5. FINANCE & BILLING                                      */}
          {/* ========================================================= */}
          <Route path="/finance" element={<FinanceOverview />} />
          <Route path="/finance/overview" element={<FinanceOverview />} />
          <Route path="/finance/billing" element={<PatientBilling />} />
          <Route path="/invoices" element={<PatientBilling />} />
          <Route path="/finance/cashier" element={<CashierPos />} />
          <Route path="/payments" element={<CashierPos />} />
          <Route path="/finance/receivable" element={<AccountsReceivable />} />
          <Route path="/finance/payable" element={<AccountsPayable />} />
          <Route path="/finance/general-ledger" element={<GeneralLedger />} />
          <Route path="/finance/expenses" element={<ExpenseManagement />} />
          <Route path="/finance/budget" element={<BudgetManagement />} />
          <Route path="/finance/rcm" element={<RevenueCycleManagement />} />
          <Route path="/finance/reconciliation" element={<PaymentReconciliation />} />
          <Route path="/finance/reports" element={<FinancialReports />} />

          {/* ========================================================= */}
          {/* 6. HMO & INSURANCE                                        */}
          {/* ========================================================= */}
          <Route path="/hmo" element={<HmoOverview />} />
          <Route path="/hmo/overview" element={<HmoOverview />} />
          <Route path="/hmo/companies" element={<HmoCompanies />} />
          <Route path="/hmo/enrollees" element={<EnrolleeManagement />} />
          <Route path="/hmo/eligibility" element={<EligibilityVerification />} />
          <Route path="/hmo/authorizations" element={<AuthorizationManagement />} />
          <Route path="/hmo/tariffs" element={<TariffManagement />} />
          <Route path="/hmo/claims-submission" element={<ClaimsSubmission />} />
          <Route path="/hmo/claims-tracking" element={<ClaimsTracking />} />
          <Route path="/hmo/claims-reconciliation" element={<ClaimsReconciliation />} />
          <Route path="/hmo/rejected-claims" element={<RejectedClaims />} />
          <Route path="/hmo/corporate-accounts" element={<CorporateAccounts />} />
          <Route path="/hmo/reports" element={<HmoReports />} />

          {/* ========================================================= */}
          {/* 7. ADMINISTRATION & HUMAN RESOURCES                       */}
          {/* ========================================================= */}
          <Route path="/hr" element={<HrOverview />} />
          <Route path="/hr/overview" element={<HrOverview />} />
          <Route path="/hr/employees" element={<EmployeeManagement />} />
          <Route path="/hr/directory" element={<StaffDirectory />} />
          <Route path="/hr/recruitment" element={<RecruitmentAts />} />
          <Route path="/hr/onboarding" element={<StaffOnboarding />} />
          <Route path="/hr/attendance" element={<AttendanceManagement />} />
          <Route path="/hr/leave" element={<LeaveManagement />} />
          <Route path="/hr/duty-roster" element={<DutyRoster />} />
          <Route path="/hr/payroll" element={<PayrollManagement />} />
          <Route path="/hr/appraisal" element={<StaffAppraisal />} />
          <Route path="/hr/training" element={<TrainingDevelopment />} />
          <Route path="/hr/disciplinary" element={<DisciplinaryManagement />} />
          <Route path="/hr/benefits" element={<EmployeeBenefits />} />
          <Route path="/hr/credentialing" element={<CredentialingLicensing />} />
          <Route path="/hr/workforce-planning" element={<WorkforcePlanning />} />
          <Route path="/hr/reports" element={<HrReports />} />

          {/* ========================================================= */}
          {/* 8. PROCUREMENT & SUPPLY CHAIN                             */}
          {/* ========================================================= */}
          <Route path="/procurement" element={<ProcurementOverview />} />
          <Route path="/procurement/overview" element={<ProcurementOverview />} />
          <Route path="/procurement/requisitions" element={<PurchaseRequisitions />} />
          <Route path="/procurement/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/procurement/suppliers" element={<SupplierVendorManagement />} />
          <Route path="/procurement/contracts" element={<TenderContractManagement />} />
          <Route path="/procurement/grn" element={<GoodsReceivedNotes />} />
          <Route path="/procurement/inventory" element={<ProcurementInventory />} />
          <Route path="/products" element={<ProcurementInventory />} />
          <Route path="/procurement/stores" element={<StoreManagement />} />
          <Route path="/procurement/stock-transfers" element={<StockTransfers />} />
          <Route path="/procurement/stock-reconciliation" element={<StockReconciliation />} />
          <Route path="/stock-logs" element={<StockReconciliation />} />
          <Route path="/procurement/expiry-tracking" element={<ExpiryBatchTracking />} />
          <Route path="/procurement/consumables" element={<MedicalConsumables />} />
          <Route path="/procurement/pharmaceutical-stock" element={<PharmaceuticalStock />} />
          <Route path="/procurement/assets" element={<AssetManagement />} />
          <Route path="/procurement/reports" element={<ProcurementReports />} />

          {/* ========================================================= */}
          {/* 9. QUALITY ASSURANCE & COMPLIANCE                         */}
          {/* ========================================================= */}
          <Route path="/quality" element={<QualityOverview />} />
          <Route path="/quality/overview" element={<QualityOverview />} />
          <Route path="/quality/clinical-audit" element={<ClinicalAudit />} />
          <Route path="/quality/internal-audit" element={<InternalAudit />} />
          <Route path="/quality/patient-safety" element={<PatientSafety />} />
          <Route path="/quality/incident-reporting" element={<IncidentReporting />} />
          <Route path="/quality/risk-management" element={<RiskManagement />} />
          <Route path="/quality/governance" element={<ClinicalGovernance />} />
          <Route path="/quality/accreditation" element={<AccreditationManagement />} />
          <Route path="/quality/regulatory" element={<RegulatoryCompliance />} />
          <Route path="/quality/sop-policies" element={<SopPolicies />} />
          <Route path="/quality/infection-control" element={<InfectionControl />} />
          <Route path="/quality/satisfaction" element={<PatientSatisfaction />} />
          <Route path="/quality/capa" element={<CapaManagement />} />

          {/* ========================================================= */}
          {/* 10. OPERATIONS & FACILITIES                               */}
          {/* ========================================================= */}
          <Route path="/operations" element={<OperationsOverview />} />
          <Route path="/operations/overview" element={<OperationsOverview />} />
          <Route path="/operations/facilities" element={<FacilityManagement />} />
          <Route path="/operations/biomedical" element={<BiomedicalEngineering />} />
          <Route path="/operations/equipment" element={<EquipmentMaintenance />} />
          <Route path="/operations/infrastructure" element={<InfrastructureManagement />} />
          <Route path="/operations/power-energy" element={<PowerEnergyManagement />} />
          <Route path="/operations/water-environment" element={<WaterEnvironment />} />
          <Route path="/operations/housekeeping" element={<HousekeepingManagement />} />
          <Route path="/operations/laundry" element={<LaundryManagement />} />
          <Route path="/operations/security" element={<SecurityManagement />} />
          <Route path="/operations/ambulance" element={<TransportAmbulance />} />
          <Route path="/operations/catering" element={<CateringCafeteria />} />
          <Route path="/operations/waste" element={<WasteManagement />} />
          <Route path="/operations/parking" element={<ParkingManagement />} />

          {/* ========================================================= */}
          {/* 11. ICT & DIGITAL HEALTH                                  */}
          {/* ========================================================= */}
          <Route path="/ict" element={<IctOverview />} />
          <Route path="/ict/overview" element={<IctOverview />} />
          <Route path="/ict/service-desk" element={<IctServiceDesk />} />
          <Route path="/ict/assets" element={<ItAssetManagement />} />
          <Route path="/ict/network" element={<NetworkMonitoring />} />
          <Route path="/ict/access-control" element={<UserAccessManagement />} />
          <Route path="/ict/cybersecurity" element={<Cybersecurity />} />
          <Route path="/ict/configuration" element={<SystemConfiguration />} />
          <Route path="/ict/backup-recovery" element={<BackupDisasterRecovery />} />
          <Route path="/ict/audit-logs" element={<SystemAuditLogs />} />
          <Route path="/ict/integrations" element={<IntegrationManagement />} />
          <Route path="/ict/data-management" element={<DataManagement />} />
          <Route path="/ict/monitoring" element={<SystemMonitoring />} />

          {/* ========================================================= */}
          {/* 12. REPORTS & ANALYTICS                                   */}
          {/* ========================================================= */}
          <Route path="/analytics" element={<ExecutiveDashboard />} />
          <Route path="/analytics/executive" element={<ExecutiveDashboard />} />
          <Route path="/analytics/performance" element={<HospitalPerformance />} />
          <Route path="/analytics/clinical" element={<ClinicalAnalytics />} />
          <Route path="/analytics/financial" element={<FinancialAnalytics />} />
          <Route path="/analytics/hr" element={<HrAnalytics />} />
          <Route path="/analytics/operations" element={<OperationalAnalytics />} />
          <Route path="/analytics/patient-statistics" element={<PatientStatistics />} />
          <Route path="/analytics/departmental" element={<DepartmentalReports />} />
          <Route path="/analytics/management" element={<ManagementReports />} />
          <Route path="/analytics/kpis" element={<KpiMonitoring />} />

          {/* ========================================================= */}
          {/* 13. SYSTEM ADMINISTRATION                                 */}
          {/* ========================================================= */}
          <Route path="/system-admin" element={<UserManagement />} />
          <Route path="/system-admin/users" element={<UserManagement />} />
          <Route path="/system-admin/roles" element={<RoleManagement />} />
          <Route path="/system-admin/permissions" element={<PermissionManagement />} />
          <Route path="/system-admin/departments" element={<DepartmentConfig />} />
          <Route path="/system-admin/hospital-profile" element={<HospitalConfig />} />
          <Route path="/system-admin/workflows" element={<WorkflowConfig />} />
          <Route path="/system-admin/notifications" element={<NotificationSettings />} />
          <Route path="/system-admin/audit-logs" element={<AdminAuditLogs />} />
          <Route path="/system-admin/settings" element={<SystemSettings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
