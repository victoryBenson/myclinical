import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CheckCircle2, CreditCard, FileSpreadsheet, Clock } from "lucide-react";

export const PaymentReconciliation: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Payment & Bank Reconciliation"
      subtitle="Automated bank statement reconciliation, POS terminal settlement audits, transfer matching and unallocated receipts"
      department="Finance & Billing"
      badge="Reconciliation"
      icon={CheckCircle2}
      tabs={[
        { key: "bank-recon", label: "Bank Statement Auto-Matching" },
        { key: "pos-settlement", label: "POS Terminal Settlements" },
        { key: "unmatched-deposits", label: "Unallocated Bank Transfers", count: 4 },
        { key: "audit-reports", label: "Monthly Reconciliation Statements" },
      ]}
      metrics={[
        { title: "Matched Transactions (MTD)", value: "4,120 Records", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Matching Success Rate", value: "99.1%", icon: FileSpreadsheet },
        { title: "Unallocated Bank Credits", value: "₦142,000 (4)", icon: Clock, valueColor: "text-amber-500" },
        { title: "Connected Bank Feeds", value: "3 Banks Active", icon: CreditCard },
      ]}
      capabilities={[
        "Automatic Open Banking API statement ingestion with machine-learning transaction matching",
        "Point-of-sale terminal batch reconciliation against bank merchant credit advices",
        "Discrepancy flag engine highlighting delayed settlements, chargebacks or duplicate transactions",
      ]}
    />
  );
};

export default PaymentReconciliation;
