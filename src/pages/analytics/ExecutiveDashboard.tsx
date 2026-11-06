import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { BarChart3, TrendingUp, Award, Layers } from "lucide-react";

export const ExecutiveDashboard: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Executive BI Dashboard"
      subtitle="Board-level healthcare executive overview: hospital bed occupancy, revenue margin, patient footfall and clinical quality"
      department="Reports & Analytics"
      badge="Board Executive BI"
      icon={BarChart3}
      tabs={[
        { key: "executive-kpis", label: "Executive Scorecard" },
        { key: "revenue-margins", label: "Revenue & Operating Margins" },
        { key: "occupancy-trends", label: "Inpatient Bed Occupancy Trends" },
        { key: "clinical-outcomes", label: "Clinical Quality & Safety Outcomes" },
      ]}
      metrics={[
        { title: "Monthly Hospital Revenue", value: "₦64,800,000", icon: TrendingUp, valueColor: "text-emerald-600" },
        { title: "Bed Occupancy Rate", value: "84.2%", icon: Layers },
        { title: "Average Inpatient LOS", value: "3.8 Days", icon: BarChart3 },
        { title: "Patient Satisfaction", value: "96.4%", icon: Award },
      ]}
      capabilities={[
        "Holistic institutional performance synthesis combining financial, clinical, and operational metrics into a unified dashboard",
        "Predictive admissions modeling forecasting seasonal bed requirements and staffing needs",
        "Executive PDF board briefing export formatted for board of directors and investor review",
      ]}
    />
  );
};

export default ExecutiveDashboard;
