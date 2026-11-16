import { lazy } from "react";
import { Route } from "react-router-dom";

const ClinicalOverview = lazy(() => import("../../pages/clinical/ClinicalOverview"));
const DoctorManagement = lazy(() => import("../../pages/clinical/DoctorManagement"));
const NursingManagement = lazy(() => import("../../pages/clinical/NursingManagement"));
const OutpatientDept = lazy(() => import("../../pages/clinical/OutpatientDept"));
const InpatientDept = lazy(() => import("../../pages/clinical/InpatientDept"));
const EmergencyDept = lazy(() => import("../../pages/clinical/EmergencyDept"));
const OperatingTheatre = lazy(() => import("../../pages/clinical/OperatingTheatre"));
const IntensiveCareUnit = lazy(() => import("../../pages/clinical/IntensiveCareUnit"));
const MaternityObstetrics = lazy(() => import("../../pages/clinical/MaternityObstetrics"));
const Paediatrics = lazy(() => import("../../pages/clinical/Paediatrics"));
const PhysiotherapyRehab = lazy(() => import("../../pages/clinical/PhysiotherapyRehab"));
const DieteticsNutrition = lazy(() => import("../../pages/clinical/DieteticsNutrition"));
const ClinicalProcedures = lazy(() => import("../../pages/clinical/ClinicalProcedures"));
const ClinicalDocumentation = lazy(() => import("../../pages/clinical/ClinicalDocumentation"));
const VitalSignsObservations = lazy(() => import("../../pages/clinical/VitalSignsObservations"));
const DischargePlanning = lazy(() => import("../../pages/clinical/DischargePlanning"));

export const clinicalRoutes = (
  <>
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
  </>
);
