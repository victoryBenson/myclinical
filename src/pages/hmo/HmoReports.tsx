import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, TrendingUp, ShieldCheck, AlertTriangle } from "lucide-react";

export const HmoReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="HMO & Insurance Analytics & Reports"
      subtitle="Underwriter profitability, utilization audits, claims turnaround velocity and loss ratios"
      department="HMO & Insurance"
      badge="Managed Care Analytics"
      icon={FileSpreadsheet}
      tabs={[
        { key: "underwriter-ranking", label: "HMO Provider Profitability & Volume" },
        { key: "utilization-patterns", label: "Enrollee Healthcare Utilization" },
        { key: "denial-analytics", label: "Denial Rates by Category" },
        { key: "settlement-turnaround", label: "Claims Payment Velocity (SLA)" },
      ]}
      metrics={[
        { title: "Annual HMO Billed Value", value: "₦164,000,000", icon: TrendingUp },
        { title: "Net Recovery Rate", value: "95.2%", icon: ShieldCheck, valueColor: "text-emerald-600" },
        { title: "Top HMO by Volume", value: "AXA Mansard (28%)", icon: FileSpreadsheet },
        { title: "Overall Denial Ratio", value: "4.8% (Target < 5%)", icon: AlertTriangle },
      ]}
      capabilities={[
        "Provider scorecards comparing time-to-settlement, rejection frequency, and profitability",
        "Enrollee healthcare utilization audit for corporate benefit renewals",
        "Exportable Excel and CSV reports ready for hospital executive committee presentations",
      ]}
    />
  );
};

export default HmoReports;
