import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CheckCircle2, Shield, FileText, AlertTriangle } from "lucide-react";

export const InternalAudit: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Internal Operational & Financial Audit"
      subtitle="Operational compliance checks, revenue assurance audits, documentation completeness and protocol inspections"
      department="Quality Assurance & Compliance"
      badge="Process Compliance"
      icon={CheckCircle2}
      tabs={[
        { key: "scheduled-audits", label: "Departmental Audit Calendar" },
        { key: "findings-registry", label: "Audit Findings & Non-conformities", count: 6 },
        { key: "revenue-assurance", label: "Billing & Revenue Leakage Audits" },
        { key: "action-plans", label: "Remediation Action Plans" },
      ]}
      metrics={[
        { title: "Audits Completed (YTD)", value: "32 Inspections", icon: CheckCircle2 },
        { title: "Process Adherence", value: "97.4%", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Open Action Items", value: "6 Items", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Audit Reports Archived", value: "32 Files", icon: FileText },
      ]}
      capabilities={[
        "Periodic surprise inspections of cashier tills, pharmacy dangerous drug vaults and store bins",
        "Clinical chart documentation audit verifying required doctor signatures and consent forms",
        "Digital risk ranking of all audit findings with automatic escalation to Audit Committee",
      ]}
    />
  );
};

export default InternalAudit;
