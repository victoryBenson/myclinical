import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { AlertTriangle, Clock, CheckCircle2, ShieldAlert } from "lucide-react";

export const IncidentReporting: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Incident & Adverse Event Reporting"
      subtitle="Confidential near-miss reporting, adverse drug reactions (ADR), sentinel events and root cause analysis (RCA)"
      department="Quality Assurance & Compliance"
      badge="Incident Console"
      icon={AlertTriangle}
      tabs={[
        { key: "open-incidents", label: "Open Incident Reports", count: 3 },
        { key: "rca-investigations", label: "Root Cause Analyses (RCA)", count: 2 },
        { key: "near-misses", label: "Near-Miss Safety Catches", count: 14 },
        { key: "sentinel-events", label: "Sentinel Event History (Zero)" },
      ]}
      metrics={[
        { title: "Active Incident Reviews", value: "3 Open", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Near-Misses Logged (Culture)", value: "14 Logged", icon: ShieldAlert },
        { title: "RCA Investigation Turnaround", value: "48 Hours", icon: Clock },
        { title: "Resolution & Closure Rate", value: "98.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Blame-free, confidential staff reporting portal accessible from every workstation",
        "Structured 5-Whys and Fishbone (Ishikawa) root cause analysis investigation tools",
        "Automated adverse drug reaction (ADR) yellow form transmission to national pharmacovigilance centers",
      ]}
    />
  );
};

export default IncidentReporting;
