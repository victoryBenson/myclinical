import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Briefcase, Building2, CheckCircle2, Clock } from "lucide-react";

export const CorporateAccounts: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Corporate Retainer Accounts"
      subtitle="Direct corporate clients, executive staff medical plans, pre-employment screenings and retainership billing"
      department="HMO & Insurance"
      badge="Corporate Retainers"
      icon={Briefcase}
      tabs={[
        { key: "corporate-directory", label: "Corporate Clients Directory", count: 24 },
        { key: "monthly-invoices", label: "Monthly Retainer Billing" },
        { key: "pre-employment", label: "Staff Health Screenings", count: 18 },
        { key: "credit-limits", label: "Credit Terms & Ceilings" },
      ]}
      metrics={[
        { title: "Active Corporate Retainers", value: "24 Companies", icon: Building2 },
        { title: "Monthly Corporate Billing", value: "₦8,900,000", icon: Briefcase },
        { title: "Pre-employment Screenings", value: "18 This Week", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Avg Invoice Settlement", value: "30 Days", icon: Clock },
      ]}
      capabilities={[
        "Customized corporate billing packages (executive health checkups, factory occupational health, maternity benefits)",
        "Monthly aggregated statement generation with employee breakdown for corporate HR departments",
        "Staff verification via corporate employee ID cards or HR authorization letters",
      ]}
    />
  );
};

export default CorporateAccounts;
