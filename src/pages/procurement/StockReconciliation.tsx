import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, CheckCircle2, AlertTriangle, Boxes } from "lucide-react";

export const StockReconciliation: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Stock Reconciliation & Physical Count Logs"
      subtitle="Physical inventory counts, discrepancy investigation, stock adjustments, shrinkage tracking and stock-take logs"
      department="Procurement & Supply Chain"
      badge="Stock-Take Logs"
      icon={FileSpreadsheet}
      tabs={[
        { key: "stock-take-schedule", label: "Scheduled Physical Stock-Takes" },
        { key: "discrepancies", label: "Count Discrepancies & Adjustments", count: 4 },
        { key: "stock-movement-logs", label: "Complete Stock Transaction Logs" },
        { key: "shrinkage-audit", label: "Loss & Breakage Reports" },
      ]}
      metrics={[
        { title: "Physical Count Accuracy", value: "99.1%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Count Discrepancies", value: "4 Items (In Review)", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Total Audited Items", value: "1,420 SKUs", icon: Boxes },
        { title: "Inventory Variance Value", value: "₦42,000 (0.08%)", icon: FileSpreadsheet },
      ]}
      capabilities={[
        "Barcode scanner count mode for rapid physical stock verification",
        "Dual-counter blind verification protocol minimizing counting bias",
        "Automated journal generation for approved stock adjustment write-offs and write-ons",
      ]}
    />
  );
};

export default StockReconciliation;
