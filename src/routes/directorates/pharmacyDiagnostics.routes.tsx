import { lazy } from "react";
import { Route } from "react-router-dom";

// Pharmacy
const PharmacyDashboard = lazy(() => import("../../pages/pharmacy/PharmacyDashboard"));
const PharmacyManagement = lazy(() => import("../../pages/pharmacy/PharmacyManagement"));
const Medications = lazy(() => import("../../pages/pharmacy/Medications"));
const Inventory = lazy(() => import("../../pages/pharmacy/Inventory"));
const Prescriptions = lazy(() => import("../../pages/pharmacy/Prescriptions"));
const Suppliers = lazy(() => import("../../pages/pharmacy/Suppliers"));
const PharmacyOrders = lazy(() => import("../../pages/pharmacy/PharmacyOrders"));
const PharmacySales = lazy(() => import("../../pages/pharmacy/Sales"));
const MedicationAdministration = lazy(() => import("../../pages/pharmacy/MedicationAdministration"));

// Medical Lab
const LabDashboard = lazy(() => import("../../pages/lab/LabDashboard"));
const NewLabRequest = lazy(() => import("../../pages/lab/NewLabRequests"));
const LabRequests = lazy(() => import("../../pages/lab/LabRequests"));
const LabQueue = lazy(() => import("../../pages/lab/LabQueue"));
const LabResults = lazy(() => import("../../pages/lab/LabResults"));
const LabReports = lazy(() => import("../../pages/lab/LabReports"));

// Diagnostics & Imaging
const RadiologyImaging = lazy(() => import("../../pages/diagnostics/RadiologyImaging"));
const BloodBankTransfusion = lazy(() => import("../../pages/diagnostics/BloodBankTransfusion"));
const DiagnosticReports = lazy(() => import("../../pages/diagnostics/DiagnosticReports"));

export const pharmacyDiagnosticsRoutes = (
  <>
    {/* Pharmacy Services */}
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
  </>
);
