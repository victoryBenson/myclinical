import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, Clock, Award, TrendingUp } from "lucide-react";

export const HrAnalytics: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="HR Analytics & Workforce Intelligence"
      subtitle="Staff productivity, nurse-to-patient staffing ratios, overtime expenditures, employee retention and talent metrics"
      department="Reports & Analytics"
      badge="Workforce BI"
      icon={Users}
      tabs={[
        { key: "productivity", label: "Clinical Staff Productivity Metrics" },
        { key: "overtime-costs", label: "Overtime Expenditure Trends" },
        { key: "retention-rates", label: "Staff Retention & Attrition" },
        { key: "training-roi", label: "Training Hours & Certification" },
      ]}
      metrics={[
        { title: "Clinical Staff Productivity", value: "96.4%", icon: Users, valueColor: "text-emerald-600" },
        { title: "Monthly Overtime Spend", value: "₦1,850,000", icon: Clock },
        { title: "Annual Retention Rate", value: "96.4%", icon: Award },
        { title: "Staff CME Points Logged", value: "1,240 Points", icon: TrendingUp },
      ]}
      capabilities={[
        "Productivity dashboards tracking consultations per physician and procedures per surgical team",
        "Overtime expenditure forecasting identifying understaffed ward shifts",
        "Clinical skill matrix gap analysis helping HR plan targeted talent recruitment",
      ]}
    />
  );
};

export default HrAnalytics;
