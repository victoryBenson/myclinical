import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Lock, Users, ShieldCheck, Clock } from "lucide-react";

export const UserAccessManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="User Access & Identity Management (IAM)"
      subtitle="Single Sign-On (SSO), Active Directory integration, multi-factor authentication (MFA) and account provisioning"
      department="ICT & Digital Health"
      badge="IAM Security"
      icon={Lock}
      tabs={[
        { key: "active-users", label: "Active User Accounts", count: 348 },
        { key: "mfa-status", label: "Multi-Factor Authentication (MFA)" },
        { key: "session-control", label: "Active Live Logins & Sessions", count: 86 },
        { key: "password-resets", label: "Self-Service Password Resets" },
      ]}
      metrics={[
        { title: "Total Provisioned Users", value: "348 Accounts", icon: Users },
        { title: "MFA Enforced Rate", value: "100% Enforced", icon: ShieldCheck, valueColor: "text-emerald-600" },
        { title: "Concurrent Logged-in Staff", value: "86 Active Sessions", icon: Clock },
        { title: "Account Lockout Alerts", value: "0 Locked Accounts", icon: Lock },
      ]}
      capabilities={[
        "Automatic workstation screen timeout after 5 minutes of inactivity compliant with HIPAA privacy rules",
        "Role-Based Access Control (RBAC) synchronized directly with HR employee active status",
        "Emergency break-glass account capability with automatic high-priority audit trail logging",
      ]}
    />
  );
};

export default UserAccessManagement;
