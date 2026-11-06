import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Sliders, CheckCircle2, Clock, Activity } from "lucide-react";

export const WorkflowConfig: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Workflow Configuration & Business Rules"
      subtitle="Clinical pathways, mandatory billing checkpoints, triage escalation rules and approval threshold chains"
      department="System Administration"
      badge="Business Rules"
      icon={Sliders}
      tabs={[
        { key: "triage-rules", label: "Triage & Emergency Pathways" },
        { key: "billing-gates", label: "Billing & Cashier Mandate Gates" },
        { key: "approval-chains", label: "Multi-Level Procurement Approvals" },
        { key: "discharge-rules", label: "Discharge Clearance Verification" },
      ]}
      metrics={[
        { title: "Configured Business Rules", value: "48 Rules Active", icon: Sliders },
        { title: "Workflow Efficiency Gain", value: "+32% Faster Turnaround", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Automated Handoffs", value: "14 Pipelines", icon: Activity },
        { title: "SLA Escalation Triggers", value: "8 Active Triggers", icon: Clock },
      ]}
      capabilities={[
        "Visual workflow builder configuring stage transitions: Registration -> Triage -> Consultation -> Diagnostics -> Pharmacy -> Billing",
        "Configurable financial gating: choose whether pharmacy can dispense before payment for private patients vs HMO patients",
        "Automated clinical alert triggers when lab results breach designated panic values",
      ]}
    />
  );
};

export default WorkflowConfig;
