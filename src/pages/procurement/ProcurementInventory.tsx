import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Boxes, ClipboardList, ShoppingCart, Truck, CheckCircle2, ShieldCheck, History } from "lucide-react";

export const ProcurementInventory: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Inventory & Material Management"
      subtitle="Central stock levels, reorder thresholds, departmental stores, consumables inventory and stock movements"
      department="Procurement & Supply Chain"
      badge="Central Inventory"
      icon={Boxes}
      tabs={[
        { key: "requisitions", label: "Requisitions", icon: ClipboardList, count: 12 },
        { key: "purchase-orders", label: "Purchase Orders", icon: ShoppingCart, count: 8 },
        { key: "suppliers", label: "Suppliers", icon: Truck },
        { key: "goods-received", label: "Goods Received", icon: CheckCircle2, count: 4 },
        { key: "approvals", label: "Approvals", icon: ShieldCheck, count: 6 },
        { key: "history", label: "Procurement History", icon: History },
      ]}
      metrics={[
        { title: "Total Cataloged SKUs", value: "1,420 Items", icon: Boxes },
        { title: "Central Warehouse Value", value: "₦48,200,000", icon: ShoppingCart },
        { title: "Critical Stock Alerts", value: "8 Low Items", icon: ClipboardList, valueColor: "text-amber-500" },
        { title: "Inventory Turnover", value: "4.8x / Year", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Real-time visibility across Central Store, Theatre Store, Emergency Pharmacy and Ward Satellites",
        "Automated reorder point replenishment alerts with suggested order quantities based on consumption history",
        "Barcoded shelf location bin tracking and physical stock count variance reconciliation",
      ]}
    />
  );
};

export default ProcurementInventory;
