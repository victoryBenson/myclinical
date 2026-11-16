import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayouts";
import PageLoader from "../components/ui/PageLoader";
import RouteErrorBoundary from "../components/ui/RouteErrorBoundary";
import {
  dashboardRoutes,
  patientRoutes,
  clinicalRoutes,
  pharmacyDiagnosticsRoutes,
  financeRoutes,
  hmoRoutes,
  hrRoutes,
  procurementRoutes,
  qualityRoutes,
  operationsRoutes,
  ictRoutes,
  analyticsRoutes,
  systemAdminRoutes,
} from "./directorates";

const Login = lazy(() => import("../pages/auth/Login"));

interface AppRoutesProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function AppRoutes({ isDark, toggleTheme }: AppRoutesProps) {
  return (
    <BrowserRouter>
      <RouteErrorBoundary>
        <Suspense
          fallback={
            <PageLoader
              fullScreen
              message="Initializing Ithere Care Healthcare Platform..."
            />
          }
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/auth/login" element={<Login />} />
            <Route
              path="/unauthorized"
              element={
                <div className="flex min-h-[300px] items-center justify-center p-8 text-center text-rose-500 font-semibold">
                  Unauthorized Access — Please contact your system administrator.
                </div>
              }
            />

              <Route
                element={
                  <ProtectedRoute>
                    <DashboardLayout isDark={isDark} toggleTheme={toggleTheme} />
                  </ProtectedRoute>
                }
              >
                {dashboardRoutes}
                {patientRoutes}
                {clinicalRoutes}
                {pharmacyDiagnosticsRoutes}
                {financeRoutes}
                {hmoRoutes}
                {hrRoutes}
                {procurementRoutes}
                {qualityRoutes}
                {operationsRoutes}
                {ictRoutes}
                {analyticsRoutes}
                {systemAdminRoutes}
              </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </BrowserRouter>
  );
}
