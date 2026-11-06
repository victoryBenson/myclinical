import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Cpu, Server, Lock, Radio } from "lucide-react";

export const IctOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="ICT & Digital Health Overview"
      subtitle="Hospital IT infrastructure, clinical workstation telemetry, cybersecurity, data backups and system integrations"
      department="ICT & Digital Health"
      badge="IT Command Center"
      icon={Cpu}
      tabs={[
        { key: "system-health", label: "Server & Application Health" },
        { key: "helpdesk-tickets", label: "Open Service Desk Tickets", count: 6 },
        { key: "network-telemetry", label: "Network LAN / Wi-Fi Telemetry" },
        { key: "security-threats", label: "Cybersecurity Threat Dashboard" },
      ]}
      metrics={[
        { title: "Core HMIS Availability", value: "99.99% Uptime", icon: Server, valueColor: "text-emerald-600" },
        { title: "Open Support Tickets", value: "6 Tickets", icon: Cpu, valueColor: "text-amber-500" },
        { title: "Connected Clinical Devices", value: "480 Nodes", icon: Radio },
        { title: "Firewall Intrusion Status", value: "0 Breaches (Secure)", icon: Lock },
      ]}
      capabilities={[
        "Real-time application performance monitoring (APM) tracking server response times and database latencies",
        "Hospital network bandwidth throttling ensuring high-priority PACS DICOM and EMR traffic never stalls",
        "Automated failover clustering across local server farm and cloud standby replica",
      ]}
    />
  );
};

export default IctOverview;
