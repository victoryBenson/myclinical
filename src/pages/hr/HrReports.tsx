import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, Users, TrendingUp, Award } from "lucide-react";

export const HrReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="HR Reports & Workforce Analytics"
      subtitle="Staff turnover metrics, absenteeism rates, gender diversity, training hours, payroll trends and compliance"
      department="Administration & HR"
      badge="HR Analytics"
      icon={FileSpreadsheet}
      tabs={[
        { key: "headcount-reports", label: "Headcount & Diversity Reports" },
        { key: "turnover-analytics", label: "Attrition & Retention Analysis" },
        { key: "absenteeism-trends", label: "Lateness & Absenteeism Costs" },
        { key: "payroll-expenditure", label: "Wage Bill & Overtime Trends" },
      ]}
      metrics={[
        { title: "Annual Staff Turnover Rate", value: "3.6% (Low)", icon: TrendingUp, valueColor: "text-emerald-600" },
        { title: "Average Training Hours/Staff", value: "38 Hours/Year", icon: Award },
        { title: "Clinical vs Admin Staff", value: "70% : 30%", icon: Users },
        { title: "Monthly Wage Bill Trend", value: "Stable (+1.2%)", icon: FileSpreadsheet },
      ]}
      capabilities={[
        "Automated generation of statutory Ministry of Health workforce census reports",
        "Cost-of-absenteeism and overtime expenditure analytics by ward and department",
        "Executive graphical dashboards displaying staff sentiment, tenure distribution and credential validity",
      ]}
    />
  );
};

export default HrReports;
