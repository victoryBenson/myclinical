import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, Shield, Clock, Users } from "lucide-react";

export const SystemAuditLogs: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="System Audit Trail & Access Logs"
      subtitle="Complete chronological audit trail: user logins, medical record access, financial adjustments and IP origin telemetry"
      department="ICT & Digital Health"
      badge="Audit Trail"
      icon={FileText}
      tabs={[
        { key: "live-audit-stream", label: "Real-time Access Stream" },
        { key: "chart-access-logs", label: "Medical Chart Access History" },
        { key: "auth-events", label: "Logins, Logouts & Failed Tries" },
        { key: "data-modifications", label: "Financial & Order Data Edits" },
      ]}
      metrics={[
        { title: "Audit Events Logged Today", value: "48,200 Events", icon: FileText },
        { title: "WORM Storage Integrity", value: "Tamper-Proof Lock", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Failed Login Alerts", value: "2 Events", icon: Clock },
        { title: "Audited System Users", value: "348 Accounts", icon: Users },
      ]}
      capabilities={[
        "WORM (Write Once, Read Many) append-only storage preventing anyone—including system administrators—from deleting audit records",
        "Specific tracking of every instance a patient's medical record or sensitive lab result is viewed or printed",
        "Geographic IP origin analysis flagging abnormal logins outside designated hospital network subnets",
      ]}
    />
  );
};

export default SystemAuditLogs;
