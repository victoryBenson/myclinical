import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

export const ClaimsReconciliation: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Claims & Remittance Reconciliation"
      subtitle="Matching received HMO bank remittances against submitted claim lines, short-payments and tax deductions"
      department="HMO & Insurance"
      badge="Remittance Recon"
      icon={FileSpreadsheet}
      tabs={[
        { key: "remittance-matching", label: "Remittance Advice Matching" },
        { key: "short-payments", label: "Short Payments / Deductions", count: 8 },
        { key: "withholding-tax", label: "Withholding Tax (WHT) Credit Notes" },
        { key: "reconciliation-statements", label: "HMO Statement of Account" },
      ]}
      metrics={[
        { title: "Remittance Received (MTD)", value: "₦12,850,000", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Matched Claims Value", value: "97.4%", icon: FileSpreadsheet },
        { title: "Short Payment Variance", value: "₦340,000", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Unallocated Payments", value: "₦0", icon: Clock },
      ]}
      capabilities={[
        "Automatic reconciliation matching bulk bank credits with line-by-line patient claims",
        "Reason code capture for underpayments (e.g. non-covered items, tariff disagreements)",
        "Withholding tax certificate generation linked to hospital accounting records",
      ]}
    />
  );
};

export default ClaimsReconciliation;
