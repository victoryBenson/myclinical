import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldAlert, Shield, CheckCircle2, Lock } from "lucide-react";

export const Cybersecurity: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Cybersecurity & Information Security"
      subtitle="Endpoint threat detection (EDR), next-generation firewall, ransomware prevention and HIPAA/NDPR compliance"
      department="ICT & Digital Health"
      badge="Cyber Defense"
      icon={ShieldAlert}
      tabs={[
        { key: "threat-radar", label: "Real-time Threat Monitoring" },
        { key: "endpoint-status", label: "EDR Antivirus Endpoint Agent", count: "100% Protected" },
        { key: "vulnerability-scans", label: "Monthly Vulnerability Scans" },
        { key: "ndpr-compliance", label: "NDPR / HIPAA Data Privacy Audit" },
      ]}
      metrics={[
        { title: "Hospital Threat Level", value: "Low / Normal", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Blocked Attacks (24h)", value: "1,420 Attempts (Automated)", icon: ShieldAlert },
        { title: "Data In-Transit Encryption", value: "TLS 1.3 Strict", icon: Lock },
        { title: "Data At-Rest Encryption", value: "AES-256 Bit", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Next-generation firewall intrusion prevention system (IPS) inspecting incoming traffic for malicious payloads",
        "Ransomware honeypot file systems alerting administrators at the earliest sign of unauthorized encryption",
        "Data loss prevention (DLP) blocking unauthorized export of patient health records to external flash drives",
      ]}
    />
  );
};

export default Cybersecurity;
