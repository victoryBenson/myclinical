import { lazy } from "react";
import { Route } from "react-router-dom";

const HospitalDashboard = lazy(() => import("../../pages/dashboard/HospitalDashboard"));
const BedOccupancy = lazy(() => import("../../pages/dashboard/BedOccupancy"));
const ClinicalHuddle = lazy(() => import("../../pages/dashboard/ClinicalHuddle"));
const EmergencyStatus = lazy(() => import("../../pages/dashboard/EmergencyStatus"));
const DepartmentStatus = lazy(() => import("../../pages/dashboard/DepartmentStatus"));
const HospitalAlerts = lazy(() => import("../../pages/dashboard/HospitalAlerts"));

export const dashboardRoutes = (
  <>
    <Route path="/" element={<HospitalDashboard />} />
    <Route path="/dashboard" element={<HospitalDashboard />} />
    <Route path="/dashboard/bed-occupancy" element={<BedOccupancy />} />
    <Route path="/dashboard/clinical-huddle" element={<ClinicalHuddle />} />
    <Route path="/dashboard/emergency-status" element={<EmergencyStatus />} />
    <Route path="/dashboard/department-status" element={<DepartmentStatus />} />
    <Route path="/dashboard/alerts" element={<HospitalAlerts />} />
  </>
);
