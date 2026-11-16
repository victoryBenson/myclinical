import { lazy } from "react";
import { Route } from "react-router-dom";

const HmoOverview = lazy(() => import("../../pages/hmo/HmoOverview"));
const HmoCompanies = lazy(() => import("../../pages/hmo/HmoCompanies"));
const EnrolleeManagement = lazy(() => import("../../pages/hmo/EnrolleeManagement"));
const EligibilityVerification = lazy(() => import("../../pages/hmo/EligibilityVerification"));
const AuthorizationManagement = lazy(() => import("../../pages/hmo/AuthorizationManagement"));
const TariffManagement = lazy(() => import("../../pages/hmo/TariffManagement"));
const ClaimsSubmission = lazy(() => import("../../pages/hmo/ClaimsSubmission"));
const ClaimsTracking = lazy(() => import("../../pages/hmo/ClaimsTracking"));
const ClaimsReconciliation = lazy(() => import("../../pages/hmo/ClaimsReconciliation"));
const RejectedClaims = lazy(() => import("../../pages/hmo/RejectedClaims"));
const CorporateAccounts = lazy(() => import("../../pages/hmo/CorporateAccounts"));
const HmoReports = lazy(() => import("../../pages/hmo/HmoReports"));

export const hmoRoutes = (
  <>
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
  </>
);
