import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Settings2, Globe, Calendar, CheckCircle2 } from "lucide-react";

export const SystemSettings: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Global System Settings & Localization"
      subtitle="Currency format (₦ NGN), timezone (WAT), date formatting (DD/MM/YYYY), session timeouts and fiscal year boundaries"
      department="System Administration"
      badge="Global Localization"
      icon={Settings2}
      tabs={[
        { key: "localization", label: "Currency, Date & Localization" },
        { key: "session-security", label: "Session Expiry & Timeout" },
        { key: "fiscal-calendar", label: "Fiscal Calendar & Tax Years" },
        { key: "database-settings", label: "System Storage & Caching" },
      ]}
      metrics={[
        { title: "System Currency", value: "Nigerian Naira (₦ / NGN)", icon: Globe, valueColor: "text-emerald-600" },
        { title: "Standard Date Format", value: "DD/MM/YYYY (24h)", icon: Calendar },
        { title: "Session Inactivity Timeout", value: "15 Minutes (HIPAA)", icon: Settings2 },
        { title: "System Operational Mode", value: "Production Active", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Hospital financial localization: configure currency symbol, decimal precision, and rounding rules",
        "Configurable inactivity timeouts per workstation tier (shorter timeout for busy outpatient clinics, longer for ICU monitors)",
        "Fiscal year start and end dates automatically driving accounting periods and annual financial reports",
      ]}
    />
  );
};

export default SystemSettings;
