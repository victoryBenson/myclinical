import { lazy } from "react";
import { Route } from "react-router-dom";

const UserManagement = lazy(() => import("../../pages/system-admin/UserManagement"));
const RoleManagement = lazy(() => import("../../pages/system-admin/RoleManagement"));
const PermissionManagement = lazy(() => import("../../pages/system-admin/PermissionManagement"));
const DepartmentConfig = lazy(() => import("../../pages/system-admin/DepartmentConfig"));
const HospitalConfig = lazy(() => import("../../pages/system-admin/HospitalConfig"));
const WorkflowConfig = lazy(() => import("../../pages/system-admin/WorkflowConfig"));
const NotificationSettings = lazy(() => import("../../pages/system-admin/NotificationSettings"));
const AdminAuditLogs = lazy(() => import("../../pages/system-admin/SystemAuditLogs"));
const SystemSettings = lazy(() => import("../../pages/system-admin/SystemSettings"));

export const systemAdminRoutes = (
  <>
    <Route path="/system-admin" element={<UserManagement />} />
    <Route path="/system-admin/users" element={<UserManagement />} />
    <Route path="/system-admin/roles" element={<RoleManagement />} />
    <Route path="/system-admin/permissions" element={<PermissionManagement />} />
    <Route path="/system-admin/departments" element={<DepartmentConfig />} />
    <Route path="/system-admin/hospital-profile" element={<HospitalConfig />} />
    <Route path="/system-admin/workflows" element={<WorkflowConfig />} />
    <Route path="/system-admin/notifications" element={<NotificationSettings />} />
    <Route path="/system-admin/audit-logs" element={<AdminAuditLogs />} />
    <Route path="/system-admin/settings" element={<SystemSettings />} />
  </>
);
