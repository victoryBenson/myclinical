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

// Public auth page loaded on-demand
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
            {/* Public Authentication Routes */}
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

            {/* Protected HMIS Application Shell */}
            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout isDark={isDark} toggleTheme={toggleTheme} />
                </ProtectedRoute>
              }
            >
              {/* 1. Dashboard Directorates */}
              {dashboardRoutes}

              {/* 2. Patient Management */}
              {patientRoutes}

              {/* 3. Clinical Services */}
              {clinicalRoutes}

              {/* 4. Pharmacy, Laboratory & Diagnostics */}
              {pharmacyDiagnosticsRoutes}

              {/* 5. Finance & Billing */}
              {financeRoutes}

              {/* 6. HMO & Health Insurance */}
              {hmoRoutes}

              {/* 7. Administration & Human Resources */}
              {hrRoutes}

              {/* 8. Procurement & Supply Chain */}
              {procurementRoutes}

              {/* 9. Quality Assurance & Compliance */}
              {qualityRoutes}

              {/* 10. Operations & Facilities */}
              {operationsRoutes}

              {/* 11. ICT & Digital Health */}
              {ictRoutes}

              {/* 12. Reports & Analytics */}
              {analyticsRoutes}

              {/* 13. System Administration */}
              {systemAdminRoutes}
            </Route>

            {/* Default Catch-all Fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </BrowserRouter>
  );
}
