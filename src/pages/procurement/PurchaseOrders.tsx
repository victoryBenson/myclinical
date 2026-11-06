import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, ShoppingCart, Truck, CheckCircle2 } from "lucide-react";

export const PurchaseOrders: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Purchase Orders (PO)"
      subtitle="Formal electronic purchase orders to approved medical, pharmaceutical and engineering suppliers"
      department="Procurement & Supply Chain"
      badge="PO Management"
      icon={FileText}
      tabs={[
        { key: "active-orders", label: "Active Purchase Orders", count: 8 },
        { key: "awaiting-delivery", label: "Awaiting Delivery (In Transit)", count: 5 },
        { key: "partial-deliveries", label: "Partially Received", count: 2 },
        { key: "completed-orders", label: "Fulfilled & Closed Orders" },
      ]}
      metrics={[
        { title: "Active Purchase Orders", value: "8 Active", icon: ShoppingCart },
        { title: "Committed PO Spend", value: "₦6,250,000", icon: FileText },
        { title: "Deliveries Expected Today", value: "3 Shipments", icon: Truck, valueColor: "text-primary" },
        { title: "On-time Delivery Rate", value: "94.8%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Standard PDF Purchase Order generation with terms, delivery deadlines, and tax numbers",
        "Direct email and portal dispatch to registered suppliers with delivery acknowledgment receipt",
        "Automatic tracking of partial deliveries with backorder status updates",
      ]}
    />
  );
};

export default PurchaseOrders;
