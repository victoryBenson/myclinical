import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldAlert, AlertTriangle, CheckCircle2, Layers } from "lucide-react";

export const RiskManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Enterprise Healthcare Risk Management"
      subtitle="Hospital risk register, clinical & operational risk matrices, hazard mitigation and severity scoring"
      department="Quality Assurance & Compliance"
      badge="Risk Register"
      icon={ShieldAlert}
      tabs={[
        { key: "risk-register", label: "Master Hospital Risk Register", count: 24 },
        { key: "high-severity", label: "High Severity Risks (Red Zone)", count: 2 },
        { key: "mitigation-plans", label: "Mitigation Action Tracking" },
        { key: "heat-map", label: "5x5 Likelihood vs Impact Matrix" },
      ]}
      metrics={[
        { title: "Cataloged Risks", value: "24 Risks", icon: Layers },
        { title: "Red Zone (High Priority)", value: "2 Monitored", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Mitigated / Controlled", value: "22 Risks", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Quarterly Review Status", value: "Current (Q4)", icon: ShieldAlert },
      ]}
      capabilities={[
        "Standardized 5x5 Likelihood x Impact scoring across Clinical, Financial, Reputational, Legal and Safety domains",
        "Assigned risk owners with periodic mandatory re-evaluation schedules",
        "Direct escalation to Hospital Board Audit & Risk Committee for critical enterprise risks",
      ]}
    />
  );
};

export default RiskManagement;
