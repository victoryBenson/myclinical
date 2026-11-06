import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { TrendingUp, CreditCard, Receipt, Wallet } from "lucide-react";

export const FinanceOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Finance & Billing Overview"
      subtitle="Hospital revenue collection, cashier settlements, patient billing, accounts ledger and financial health"
      department="Finance & Billing"
      badge="Hospital Finance"
      icon={TrendingUp}
      tabs={[
        { key: "revenue-summary", label: "Daily Revenue Summary" },
        { key: "cashier-settlements", label: "Cashier Shift Reconciliations", count: 8 },
        { key: "inpatient-billing", label: "Inpatient Running Bills", count: 168 },
        { key: "outstanding-debtors", label: "Accounts Receivable Aging" },
      ]}
      metrics={[
        { title: "Today's Hospital Collections", value: "₦4,850,000", icon: TrendingUp, valueColor: "text-emerald-600" },
        { title: "Inpatient Bills In Progress", value: "₦12,420,000", icon: Receipt },
        { title: "Cashier POS Shift Status", value: "8/8 Reconciled", icon: CreditCard },
        { title: "Accounts Receivable (30d)", value: "₦8,150,000", icon: Wallet, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Real-time revenue monitoring disaggregated by cash, POS, online transfers and HMO credit",
        "Automated fee tariff calculation according to private, corporate, and subsidized rate schedules",
        "Integration with clinical order entry ensuring zero charge leakage for medications, labs and nursing consumables",
      ]}
    />
  );
};

export default FinanceOverview;
