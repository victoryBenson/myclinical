import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayouts";
import LabDashboard from "../pages/lab/LabDashboard";
import NewLabRequest from "../pages/lab/NewLabRequests";
import LabRequests from "../pages/lab/LabRequests";
import LabQueue from "../pages/lab/LabQueue";
import LabResults from "../pages/lab/LabResults";
import LabReports from "../pages/lab/LabReports";
import PharmacyDashboard from "../pages/pharmacy/PharmacyDashboard";
import Medications from "../pages/pharmacy/Medications";
import Inventory from "../pages/pharmacy/Inventory";
import Prescriptions from "../pages/pharmacy/Prescriptions";
import Suppliers from "../pages/pharmacy/Suppliers";
import PharmacyOrders from "../pages/pharmacy/PharmacyOrders";
import PharmacySales from "../pages/pharmacy/Sales";
import PatientDashboard from "../pages/patients/PatientDashboard";
import Patients from "../pages/patients/Patients";

interface AppRoutesProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function AppRoutes({
  isDark,
  toggleTheme,
}: AppRoutesProps) {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

            <Route
                element={
                <ProtectedRoute>
                    <DashboardLayout
                    isDark={isDark}
                    toggleTheme={toggleTheme}
                    />
                </ProtectedRoute>
                }
            >
            {/* patient's module routes */}

            <Route path="/" element={<PatientDashboard />} />
            <Route path="/patients" element={<Patients/>} />
            <Route path="/admissions" element={<div>Admissions List</div>} />
            <Route path="/admissions/new" element={<div>New Admission Form</div>} />

          <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
          <Route path="/lab" element={<LabDashboard />} />
          <Route path="/lab/new-request" element={<NewLabRequest />} />
          <Route path="/lab/requests" element={<LabRequests />} />
          <Route path="/lab/queue" element={<LabQueue />} />
          <Route path="/lab/results" element={<LabResults />} />
          <Route path="/lab/reports" element={<LabReports />} />

          <Route path="/pharmacy" element={<PharmacyDashboard />} />
          <Route path="/pharmacy/medications" element={<Medications />} />
          <Route path="/pharmacy/inventory" element={<Inventory />} />
          <Route path="/pharmacy/prescriptions" element={<Prescriptions />} />
          <Route path="/pharmacy/suppliers" element={<Suppliers />} />
          <Route path="/pharmacy/purchase-orders" element={<PharmacyOrders />} />
          <Route path="/pharmacy/sales" element={<PharmacySales />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}