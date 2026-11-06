import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, ShieldCheck, CheckCircle2, Clock } from "lucide-react";

export const UserManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="User Management & Staff Accounts"
      subtitle="Create, activate, deactivate hospital user accounts, credential assignments, departmental roles and login controls"
      department="System Administration"
      badge="User Accounts"
      icon={Users}
      tabs={[
        { key: "active-users", label: "Active User Accounts", count: 348 },
        { key: "pending-activation", label: "Pending Account Activations", count: 4 },
        { key: "suspended-accounts", label: "Suspended / Deactivated", count: 2 },
        { key: "activity-log", label: "User Account Activity Log" },
      ]}
      metrics={[
        { title: "Total Hospital Logins", value: "348 Accounts", icon: Users },
        { title: "Active & Verified", value: "348 (100%)", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Assigned Roles", value: "14 Standard Roles", icon: ShieldCheck },
        { title: "Password Reset Requests", value: "2 Pending", icon: Clock },
      ]}
      capabilities={[
        "Granular user account creation with mandatory departmental assignment and employee ID linkage",
        "Automated account suspension upon HR notification of employee exit or prolonged absence",
        "Two-factor authentication (2FA) enforcement and session timeout controls",
      ]}
    />
  );
};

export default UserManagement;
