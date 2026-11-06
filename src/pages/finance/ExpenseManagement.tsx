import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Receipt, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

export const ExpenseManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Expense Management & Petty Cash"
      subtitle="Operational expense requisitions, petty cash disbursements, departmental spend requests and audit vouchers"
      department="Finance & Billing"
      badge="Expense Control"
      icon={Receipt}
      tabs={[
        { key: "expense-requests", label: "Pending Requisitions", count: 8 },
        { key: "petty-cash", label: "Petty Cash Imprest", count: 3 },
        { key: "approved-vouchers", label: "Approved Expense Vouchers" },
        { key: "categories", label: "Expense Heads & Cost Centers" },
      ]}
      metrics={[
        { title: "Monthly Operating Expenses", value: "₦6,420,000", icon: Receipt },
        { title: "Pending Approvals", value: "8 Requests", icon: Clock, valueColor: "text-amber-500" },
        { title: "Petty Cash Balance", value: "₦280,000", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Variance vs Budget", value: "-4.2% (Under)", icon: AlertTriangle },
      ]}
      capabilities={[
        "Multi-level approval threshold routing (HOD -> Finance Director -> Medical Director)",
        "Receipt and invoice document attachment with optical scanning",
        "Cost center allocation to monitor department-by-department running costs",
      ]}
    />
  );
};

export default ExpenseManagement;
