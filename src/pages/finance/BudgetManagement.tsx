import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Sliders, TrendingUp, CheckCircle2, AlertTriangle } from "lucide-react";

export const BudgetManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Budget Management & Forecasting"
      subtitle="Annual capital and operating expenditure budgets, department allocations, burn rates and variance tracking"
      department="Finance & Billing"
      badge="Budget Planning"
      icon={Sliders}
      tabs={[
        { key: "annual-budget", label: "Annual Master Budget" },
        { key: "department-allocations", label: "Department Budget Allocations", count: 13 },
        { key: "variance-analysis", label: "Budget vs Actual Variance" },
        { key: "capex-requests", label: "Capital Expenditure (CAPEX)" },
      ]}
      metrics={[
        { title: "Total Hospital Budget", value: "₦180,000,000", icon: Sliders },
        { title: "Budget Utilized (YTD)", value: "58.4%", icon: TrendingUp },
        { title: "Available Balance", value: "₦74,880,000", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Over-budget Alerts", value: "0 Departments", icon: AlertTriangle },
      ]}
      capabilities={[
        "Departmental budget cap controls with automated requisition blocking if budget is exhausted",
        "Variance analysis with alerts for abnormal expenditure spikes",
        "Capital expenditure appraisal workflow for clinical and diagnostic equipment purchases",
      ]}
    />
  );
};

export default BudgetManagement;
