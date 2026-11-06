import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, Shield, Clock, Users } from "lucide-react";

export const SystemAuditLogs: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="System Audit Logs & Security Chronicle"
      subtitle="Comprehensive administrative audit trail of all data modifications, permission changes, role assignments and logins"
      department="System Administration"
      badge="Administrative Audit"
      icon={FileText}
      tabs={[
        { key: "admin-actions", label: "Administrative Actions Log" },
        { key: "role-modifications", label: "User Role & Permission Edits" },
        { key: "financial-overrides", label: "Financial Waivers & Bill Changes" },
        { key: "system-events", label: "Core Configuration Changes" },
      ]}
      metrics={[
        { title: "Logged Administrative Events", value: "12,450 Events", icon: FileText },
        { title: "Immutable Storage", value: "Verified Tamper-Proof", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Superuser Actions", value: "18 Today (Dr. Alex)", icon: Users },
        { title: "Audit Trail Retention", value: "7 Years Statutory", icon: Clock },
      ]}
      capabilities={[
        "Granular field-level delta logging: records Before vs After values for any altered clinical or financial parameter",
        "Permanent non-deletable audit log ensuring strict hospital compliance with healthcare regulations",
        "Searchable event log filtering by specific timestamp, administrator name, and IP address",
      ]}
    />
  );
};

export default SystemAuditLogs;
