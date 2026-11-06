import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CheckCircle2, Clock, AlertTriangle, ShieldCheck } from "lucide-react";

export const CapaManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Corrective & Preventive Actions (CAPA)"
      subtitle="Quality non-conformity resolutions, incident remediation plans, effectiveness verification and closure sign-offs"
      department="Quality Assurance & Compliance"
      badge="CAPA Engine"
      icon={CheckCircle2}
      tabs={[
        { key: "active-capa", label: "Active CAPA Plans", count: 6 },
        { key: "awaiting-verification", label: "Awaiting Effectiveness Review", count: 3 },
        { key: "closed-capa", label: "Successfully Closed CAPAs" },
        { key: "overdue-actions", label: "Overdue Remediations (Zero)", count: 0 },
      ]}
      metrics={[
        { title: "Active CAPA Actions", value: "6 Plans", icon: Clock, valueColor: "text-amber-500" },
        { title: "CAPA Closure Rate", value: "94.2%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Effectiveness Verified", value: "100%", icon: ShieldCheck },
        { title: "Recurring Defect Prevention", value: "Zero Re-occurrences", icon: AlertTriangle },
      ]}
      capabilities={[
        "Standardized 8D and DMAIC problem-solving methodology integration",
        "Assigned action owners, interim containment actions, root cause proof, and permanent corrective steps",
        "Mandatory 90-day post-closure effectiveness audit to confirm the root cause is permanently resolved",
      ]}
    />
  );
};

export default CapaManagement;
