import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Settings2, Sliders, CheckCircle2, Shield } from "lucide-react";

export const SystemConfiguration: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="System Configuration & Global Settings"
      subtitle="Application environments, SMTP mail gateways, SMS notification routing, payment gateway API keys and system parameters"
      department="ICT & Digital Health"
      badge="Core Parameters"
      icon={Settings2}
      tabs={[
        { key: "env-parameters", label: "Global Parameters & Variables" },
        { key: "notification-gateways", label: "SMS & Email Service Gateways" },
        { key: "api-credentials", label: "Third-Party API Credentials" },
        { key: "system-maintenance", label: "Scheduled Maintenance Windows" },
      ]}
      metrics={[
        { title: "Configuration Parameters", value: "148 Keys", icon: Sliders },
        { title: "Connected Gateways", value: "All Active", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "SMS Balance (Twilio)", value: "24,800 Units", icon: Settings2 },
        { title: "Configuration Version", value: "v2.4.0 Release", icon: Shield },
      ]}
      capabilities={[
        "Secure environment variable management with encrypted storage for external API tokens",
        "SMS gateway failover routing between multiple local telecom aggregators ensuring delivery of OTPs and alert pages",
        "System maintenance scheduler with broadcast warning banners shown to active logged-in hospital staff",
      ]}
    />
  );
};

export default SystemConfiguration;
