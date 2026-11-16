import { lazy } from "react";
import { Route } from "react-router-dom";

const ExecutiveDashboard = lazy(() => import("../../pages/analytics/ExecutiveDashboard"));
const HospitalPerformance = lazy(() => import("../../pages/analytics/HospitalPerformance"));
const ClinicalAnalytics = lazy(() => import("../../pages/analytics/ClinicalAnalytics"));
const FinancialAnalytics = lazy(() => import("../../pages/analytics/FinancialAnalytics"));
const HrAnalytics = lazy(() => import("../../pages/analytics/HrAnalytics"));
const OperationalAnalytics = lazy(() => import("../../pages/analytics/OperationalAnalytics"));
const PatientStatistics = lazy(() => import("../../pages/analytics/PatientStatistics"));
const DepartmentalReports = lazy(() => import("../../pages/analytics/DepartmentalReports"));
const ManagementReports = lazy(() => import("../../pages/analytics/ManagementReports"));
const KpiMonitoring = lazy(() => import("../../pages/analytics/KpiMonitoring"));

export const analyticsRoutes = (
  <>
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
  </>
);
