import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Sliders, Users, TrendingUp, AlertTriangle } from "lucide-react";

export const WorkforcePlanning: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Workforce Planning & Staffing Ratios"
      subtitle="Nurse-to-patient staffing ratios, clinical workload analytics, doctor-to-bed ratios and succession planning"
      department="Administration & HR"
      badge="Strategic Workforce"
      icon={Sliders}
      tabs={[
        { key: "staffing-ratios", label: "Ward Staffing Ratios (Live)" },
        { key: "workload-demand", label: "Workload Projections & Headcount" },
        { key: "succession-pipeline", label: "Clinical Leadership Succession" },
        { key: "retirement-schedule", label: "Upcoming Retirements (3 Years)" },
      ]}
      metrics={[
        { title: "Nurse-to-Bed Ratio (Target 1:4)", value: "1:3.8 (Compliant)", icon: Users, valueColor: "text-emerald-600" },
        { title: "ICU Staffing Ratio (Target 1:1)", value: "1:1 (Optimal)", icon: TrendingUp },
        { title: "Specialist Deficits", value: "2 Gaps (Anaesthesia)", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Workforce Expansion Plan", value: "+14 Hires Approved", icon: Sliders },
      ]}
      capabilities={[
        "WHO WISN (Workload Indicators of Staffing Need) based healthcare workforce modeling",
        "Predictive seasonal staffing demand adjustments (e.g. malaria season, harmattan pediatric surges)",
        "Key clinical role succession risk identification and targeted leadership mentoring programs",
      ]}
    />
  );
};

export default WorkforcePlanning;
