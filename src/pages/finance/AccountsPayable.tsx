import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Receipt, Truck, Calendar, CheckCircle2 } from "lucide-react";

export const AccountsPayable: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Accounts Payable & Supplier Obligations"
      subtitle="Vendor invoices, pharmaceutical supplier credit, recurring hospital utility bills and payment schedules"
      department="Finance & Billing"
      badge="Creditors Ledger"
      icon={Receipt}
      tabs={[
        { key: "unpaid-invoices", label: "Pending Invoices to Pay", count: 18 },
        { key: "supplier-ledgers", label: "Vendor Accounts & Balances" },
        { key: "utility-obligations", label: "Recurring Hospital Utilities" },
        { key: "payment-disbursements", label: "Disbursement History" },
      ]}
      metrics={[
        { title: "Total Payables Outstanding", value: "₦9,640,000", icon: Receipt },
        { title: "Due This Week", value: "₦2,400,000", icon: Calendar, valueColor: "text-amber-500" },
        { title: "Pharmaceutical Creditors", value: "₦6,120,000", icon: Truck },
        { title: "Payments Cleared (MTD)", value: "₦14,200,000", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Three-way matching between Purchase Order (PO), Goods Received Note (GRN), and Supplier Invoice",
        "Payment batch generation with dual-signatory financial authorization",
        "Supplier credit terms and early settlement discount tracking",
      ]}
    />
  );
};

export default AccountsPayable;
