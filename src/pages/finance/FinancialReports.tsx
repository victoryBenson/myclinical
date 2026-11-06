import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, TrendingUp, Layers, Award } from "lucide-react";

export const FinancialReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Financial Reports & Statements"
      subtitle="Profit & loss statements, balance sheet, departmental profit margins, cash flow statements and executive financial packs"
      department="Finance & Billing"
      badge="Financial Reporting"
      icon={FileSpreadsheet}
      tabs={[
        { key: "p-and-l", label: "Profit & Loss (Income Statement)" },
        { key: "balance-sheet", label: "Balance Sheet (Statement of Financial Position)" },
        { key: "cash-flow", label: "Cash Flow Statement" },
        { key: "departmental-pl", label: "Departmental Contribution Margins" },
      ]}
      metrics={[
        { title: "Net Hospital Operating Margin", value: "22.4%", icon: TrendingUp, valueColor: "text-emerald-600" },
        { title: "Total Operating Revenue (YTD)", value: "₦142,500,000", icon: FileSpreadsheet },
        { title: "EBITDA Margin", value: "26.1%", icon: Award },
        { title: "Department Cost Centers", value: "14 Analyzed", icon: Layers },
      ]}
      capabilities={[
        "Standard GAAP and IFRS compliant hospital financial statement generation",
        "Cost accounting analysis comparing revenue generated vs drug & consumable costs per clinical department",
        "Executive board financial briefing pack generation with one-click Excel and PDF export",
      ]}
    />
  );
};

export default FinancialReports;
