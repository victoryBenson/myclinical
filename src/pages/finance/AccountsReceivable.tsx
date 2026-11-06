import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Wallet, Clock, AlertTriangle } from "lucide-react";

export const AccountsReceivable: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Accounts Receivable & Debtor Aging"
      subtitle="Corporate client credit ledgers, HMO pending receivables, patient deferred payments and aging brackets"
      department="Finance & Billing"
      badge="Debtors Ledger"
      icon={Wallet}
      tabs={[
        { key: "aging-summary", label: "Aging Analysis (0-30, 31-60, 61-90, 90+)" },
        { key: "corporate-debtors", label: "Corporate Account Debts" },
        { key: "hmo-receivables", label: "HMO Unsettled Claims" },
        { key: "individual-debtors", label: "Individual Patient Balances" },
      ]}
      metrics={[
        { title: "Total Outstanding Receivables", value: "₦18,420,000", icon: Wallet, valueColor: "text-amber-500" },
        { title: "Current (0 - 30 Days)", value: "₦11,200,000", icon: Clock },
        { title: "31 - 90 Days", value: "₦5,100,000", icon: Clock },
        { title: "Over 90 Days (Overdue)", value: "₦2,120,000", icon: AlertTriangle, valueColor: "text-rose-500" },
      ]}
      capabilities={[
        "Standard accounting aging buckets with automated dunning letters and reminder statements",
        "Corporate credit ceiling tracking with automated block alerts if limit is exceeded",
        "Remittance matching against outstanding claims batches",
      ]}
    />
  );
};

export default AccountsReceivable;
