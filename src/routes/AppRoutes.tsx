import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayouts";
import LabDashboard from "../pages/lab/LabDashboard";
import NewLabRequest from "../pages/lab/NewLabRequests";
import LabRequests from "../pages/lab/LabRequests";
import LabQueue from "../pages/lab/LabQueue";
import LabResults from "../pages/lab/LabResults";

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
          <Route path="/" element={<LabDashboard />} />
          <Route path="/lab/new-request" element={<NewLabRequest />} />
          <Route path="/lab/requests" element={<LabRequests />} />
          <Route path="/lab/queue" element={<LabQueue />} />
          <Route path="/lab/results" element={<LabResults />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}