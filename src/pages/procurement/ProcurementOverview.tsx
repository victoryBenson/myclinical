import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Truck, Boxes, ShoppingCart, CheckCircle2 } from "lucide-react";

export const ProcurementOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Procurement & Supply Chain Overview"
      subtitle="Hospital purchasing, purchase orders, medical consumable stores, pharmaceutical warehousing and stock tracking"
      department="Procurement & Supply Chain"
      badge="Materials Command"
      icon={Truck}
      tabs={[
        { key: "purchasing-pipeline", label: "Procurement Pipeline" },
        { key: "low-stock-alerts", label: "Critical Low Stock Alerts", count: 14 },
        { key: "open-pos", label: "Active Purchase Orders", count: 8 },
        { key: "expiring-soon", label: "Batch Expiry Warnings", count: 6 },
      ]}
      metrics={[
        { title: "Total Inventory Value", value: "₦48,200,000", icon: Boxes },
        { title: "Open Purchase Orders", value: "8 Active (₦6.2M)", icon: ShoppingCart },
        { title: "Approved Vendors", value: "64 Suppliers", icon: Truck },
        { title: "Stock Availability Rate", value: "98.2%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Automated economic order quantity (EOQ) and reorder threshold calculators",
        "Full traceability from purchase requisition -> PO -> GRN -> Store Issue -> Patient Consumption",
        "Barcoded warehouse management with automated FIFO/FEFO picking algorithms",
      ]}
    />
  );
};

export default ProcurementOverview;
