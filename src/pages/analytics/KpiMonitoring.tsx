import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Award, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";

export const KpiMonitoring: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Strategic KPI & Healthcare Benchmark Monitoring"
      subtitle="Balanced scorecard: Clinical Excellence, Patient Safety, Financial Sustainability and Operational Efficiency"
      department="Reports & Analytics"
      badge="Balanced Scorecard"
      icon={Award}
      tabs={[
        { key: "balanced-scorecard", label: "Hospital Balanced Scorecard" },
        { key: "clinical-kpis", label: "Clinical Excellence KPIs", count: 8 },
        { key: "financial-kpis", label: "Financial Sustainability KPIs", count: 6 },
        { key: "operational-kpis", label: "Operational & Safety KPIs", count: 8 },
      ]}
      metrics={[
        { title: "Overall KPI Achievement", value: "94.6%", icon: Award, valueColor: "text-emerald-600" },
        { title: "Target Green Zone", value: "22 / 24 KPIs", icon: CheckCircle2 },
        { title: "KPIs Requiring Focus", value: "2 KPIs (Amber)", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Quarter-on-Quarter Growth", value: "+4.8%", icon: TrendingUp },
      ]}
      capabilities={[
        "Visual balanced scorecard mapping strategic goals to departmental operational targets",
        "Threshold color coding: Green (Target achieved), Amber (Within tolerance), Red (Critical variance)",
        "Automated root-cause trigger and CAPA generation when any critical healthcare KPI enters the red zone",
      ]}
    />
  );
};

export default KpiMonitoring;
