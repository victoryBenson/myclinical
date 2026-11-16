import { lazy } from "react";
import { Route } from "react-router-dom";

const PatientDashboard = lazy(() => import("../../pages/patients/PatientDashboard"));
const CreatePatientDashboard = lazy(() => import("../../pages/patients/CreatePatientDashboard"));
const Patients = lazy(() => import("../../pages/patients/Patients"));
const PatientProfiles = lazy(() => import("../../pages/patients/PatientProfiles"));
const Appointments = lazy(() => import("../../pages/appointments/Home"));
const PatientAdt = lazy(() => import("../../pages/patients/PatientAdt"));
const PatientEmr = lazy(() => import("../../pages/patients/PatientEmr"));
const PatientFeedback = lazy(() => import("../../pages/patients/PatientFeedback"));
const PatientReferrals = lazy(() => import("../../pages/patients/PatientReferrals"));
const PatientReports = lazy(() => import("../../pages/patients/PatientReports"));

export const patientRoutes = (
  <>
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
  </>
);
