import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { TrendingUp, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export const RevenueCycleManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Revenue Cycle Management (RCM)"
      subtitle="End-to-end patient financial lifecycle: charge capture, insurance eligibility, denial management and revenue velocity"
      department="Finance & Billing"
      badge="RCM Engine"
      icon={TrendingUp}
      tabs={[
        { key: "rcm-pipeline", label: "RCM Funnel Stages" },
        { key: "denial-management", label: "Claims Denials & Recovery", count: 8 },
        { key: "charge-leakage", label: "Charge Audit & Recovery" },
        { key: "payer-velocity", label: "Payer Settlement Velocity" },
      ]}
      metrics={[
        { title: "Net Collection Rate", value: "96.8%", icon: TrendingUp, valueColor: "text-emerald-600" },
        { title: "Days in Accounts Receivable", value: "32 Days", icon: Clock },
        { title: "First-Pass Clean Claim Rate", value: "91.2%", icon: CheckCircle2 },
        { title: "Claims Denial Rate", value: "3.2% (Low)", icon: AlertTriangle },
      ]}
      capabilities={[
        "Automated front-end eligibility scrubbing preventing insurance rejections at the point of registration",
        "Clinical coding scrubber matching ICD-10 diagnoses to procedural fee tariffs",
        "Appeals engine for rejected insurance claims with clinical justification dossier generation",
      ]}
    />
  );
};

export default RevenueCycleManagement;
