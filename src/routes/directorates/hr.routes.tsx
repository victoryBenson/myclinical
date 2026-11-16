import { lazy } from "react";
import { Route } from "react-router-dom";

const HrOverview = lazy(() => import("../../pages/hr/HrOverview"));
const EmployeeManagement = lazy(() => import("../../pages/hr/EmployeeManagement"));
const StaffDirectory = lazy(() => import("../../pages/hr/StaffDirectory"));
const RecruitmentAts = lazy(() => import("../../pages/hr/RecruitmentAts"));
const StaffOnboarding = lazy(() => import("../../pages/hr/StaffOnboarding"));
const AttendanceManagement = lazy(() => import("../../pages/hr/AttendanceManagement"));
const LeaveManagement = lazy(() => import("../../pages/hr/LeaveManagement"));
const DutyRoster = lazy(() => import("../../pages/hr/DutyRoster"));
const PayrollManagement = lazy(() => import("../../pages/hr/PayrollManagement"));
const StaffAppraisal = lazy(() => import("../../pages/hr/StaffAppraisal"));
const TrainingDevelopment = lazy(() => import("../../pages/hr/TrainingDevelopment"));
const DisciplinaryManagement = lazy(() => import("../../pages/hr/DisciplinaryManagement"));
const EmployeeBenefits = lazy(() => import("../../pages/hr/EmployeeBenefits"));
const CredentialingLicensing = lazy(() => import("../../pages/hr/CredentialingLicensing"));
const WorkforcePlanning = lazy(() => import("../../pages/hr/WorkforcePlanning"));
const HrReports = lazy(() => import("../../pages/hr/HrReports"));

export const hrRoutes = (
  <>
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
  </>
);
