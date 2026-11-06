import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, Layers, CheckCircle2, Shield } from "lucide-react";

export const GeneralLedger: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="General Ledger & Chart of Accounts"
      subtitle="Standard chart of accounts, journal vouchers, double-entry bookkeeping, trial balance and financial periods"
      department="Finance & Billing"
      badge="General Ledger"
      icon={FileSpreadsheet}
      tabs={[
        { key: "chart-of-accounts", label: "Chart of Accounts (COA)" },
        { key: "journal-vouchers", label: "Journal Vouchers", count: 12 },
        { key: "trial-balance", label: "Trial Balance" },
        { key: "financial-periods", label: "Accounting Period Closes" },
      ]}
      metrics={[
        { title: "Chart of Accounts Code", value: "320 Accounts", icon: Layers },
        { title: "Trial Balance Status", value: "Balanced 100%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Current Fiscal Year", value: "FY 2026/2027", icon: FileSpreadsheet },
        { title: "Audit Integrity Check", value: "Verified OK", icon: Shield },
      ]}
      capabilities={[
        "Enterprise double-entry posting rules automated from billing, payroll and inventory transactions",
        "Cost center tagging for clinical departments (Surgery, Radiology, Pharmacy, Administration)",
        "Real-time trial balance generation with instant ledger drill-down",
      ]}
    />
  );
};

export default GeneralLedger;
