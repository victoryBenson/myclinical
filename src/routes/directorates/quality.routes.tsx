import { lazy } from "react";
import { Route } from "react-router-dom";

const QualityOverview = lazy(() => import("../../pages/quality/QualityOverview"));
const ClinicalAudit = lazy(() => import("../../pages/quality/ClinicalAudit"));
const InternalAudit = lazy(() => import("../../pages/quality/InternalAudit"));
const PatientSafety = lazy(() => import("../../pages/quality/PatientSafety"));
const IncidentReporting = lazy(() => import("../../pages/quality/IncidentReporting"));
const RiskManagement = lazy(() => import("../../pages/quality/RiskManagement"));
const ClinicalGovernance = lazy(() => import("../../pages/quality/ClinicalGovernance"));
const AccreditationManagement = lazy(() => import("../../pages/quality/AccreditationManagement"));
const RegulatoryCompliance = lazy(() => import("../../pages/quality/RegulatoryCompliance"));
const SopPolicies = lazy(() => import("../../pages/quality/SopPolicies"));
const InfectionControl = lazy(() => import("../../pages/quality/InfectionControl"));
const PatientSatisfaction = lazy(() => import("../../pages/quality/PatientSatisfaction"));
const CapaManagement = lazy(() => import("../../pages/quality/CapaManagement"));

export const qualityRoutes = (
  <>
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
  </>
);
