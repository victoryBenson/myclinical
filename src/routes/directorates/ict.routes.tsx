import { lazy } from "react";
import { Route } from "react-router-dom";

const IctOverview = lazy(() => import("../../pages/ict/IctOverview"));
const IctServiceDesk = lazy(() => import("../../pages/ict/IctServiceDesk"));
const ItAssetManagement = lazy(() => import("../../pages/ict/ItAssetManagement"));
const NetworkMonitoring = lazy(() => import("../../pages/ict/NetworkMonitoring"));
const UserAccessManagement = lazy(() => import("../../pages/ict/UserAccessManagement"));
const Cybersecurity = lazy(() => import("../../pages/ict/Cybersecurity"));
const SystemConfiguration = lazy(() => import("../../pages/ict/SystemConfiguration"));
const BackupDisasterRecovery = lazy(() => import("../../pages/ict/BackupDisasterRecovery"));
const SystemAuditLogs = lazy(() => import("../../pages/ict/SystemAuditLogs"));
const IntegrationManagement = lazy(() => import("../../pages/ict/IntegrationManagement"));
const DataManagement = lazy(() => import("../../pages/ict/DataManagement"));
const SystemMonitoring = lazy(() => import("../../pages/ict/SystemMonitoring"));

export const ictRoutes = (
  <>
    <Route path="/ict" element={<IctOverview />} />
    <Route path="/ict/overview" element={<IctOverview />} />
    <Route path="/ict/service-desk" element={<IctServiceDesk />} />
    <Route path="/ict/assets" element={<ItAssetManagement />} />
    <Route path="/ict/network" element={<NetworkMonitoring />} />
    <Route path="/ict/access-control" element={<UserAccessManagement />} />
    <Route path="/ict/cybersecurity" element={<Cybersecurity />} />
    <Route path="/ict/configuration" element={<SystemConfiguration />} />
    <Route path="/ict/backup-recovery" element={<BackupDisasterRecovery />} />
    <Route path="/ict/audit-logs" element={<SystemAuditLogs />} />
    <Route path="/ict/integrations" element={<IntegrationManagement />} />
    <Route path="/ict/data-management" element={<DataManagement />} />
    <Route path="/ict/monitoring" element={<SystemMonitoring />} />
  </>
);
