import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldAlert, AlertTriangle, Bell, CheckCircle2 } from "lucide-react";

export const HospitalAlerts: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Hospital Alerts & Notices"
      subtitle="Broadcast notifications, code alerts (Code Blue, Code Red), emergency memos and system advisories"
      department="Dashboard"
      badge="Hospital Broadcasts"
      icon={ShieldAlert}
      tabs={[
        { key: "active-alerts", label: "Active Urgent Alerts", count: 2 },
        { key: "clinical-codes", label: "Clinical Code History" },
        { key: "administrative-memos", label: "Hospital Administrative Memos" },
      ]}
      metrics={[
        { title: "Broadcast Systems", value: "Online (100%)", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Active Clinical Alerts", value: "2 Active", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Code Blue Readiness", value: "Standby 100%", icon: ShieldAlert, valueColor: "text-primary" },
        { title: "Notifications Delivered", value: "1,240 Today", icon: Bell },
      ]}
      capabilities={[
        "Instant multi-channel paging (In-app, SMS, mobile push, ward PA systems)",
        "Automated Code Blue, Code Red, Code Pink emergency team triggers",
        "Chronological broadcast log with read acknowledgements by department heads",
      ]}
    />
  );
};

export default HospitalAlerts;
