import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CreditCard, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

export const FinancialAnalytics: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Financial Analytics & Revenue Optimization"
      subtitle="Cost center analysis, revenue leakage audits, service profitability by specialty and payer yield modeling"
      department="Reports & Analytics"
      badge="Financial Analytics"
      icon={CreditCard}
      tabs={[
        { key: "revenue-by-specialty", label: "Specialty Revenue Contribution" },
        { key: "cost-margins", label: "Direct Service Cost vs Margins" },
        { key: "payer-yield", label: "Private vs HMO vs NHIA Payer Yield" },
        { key: "revenue-leakage", label: "Uncaptured Charges & Recovery" },
      ]}
      metrics={[
        { title: "Highest Revenue Unit", value: "Surgery & Theatre (34%)", icon: TrendingUp },
        { title: "Operating Cost Ratio", value: "68.2%", icon: CreditCard },
        { title: "Recovered Charge Leakage", value: "₦2,400,000", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Average Revenue per Inpatient", value: "₦184,000", icon: Layers },
      ]}
      capabilities={[
        "Unit economics per medical procedure and bed-day (direct consumables, clinician time, facility overheads)",
        "Comparative yield modeling identifying which health insurance tariffs produce sustainable operating margins",
        "Point-of-care charge audit identifying untariffed clinical consumables",
      ]}
    />
  );
};

export default FinancialAnalytics;
