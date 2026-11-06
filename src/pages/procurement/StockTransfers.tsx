import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Truck, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export const StockTransfers: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Stock Transfers & Ward Issues"
      subtitle="Inter-store stock replenishment, ward indent issuances, transport waybills and electronic dispatch receipts"
      department="Procurement & Supply Chain"
      badge="Inter-Store Logistics"
      icon={Truck}
      tabs={[
        { key: "pending-indents", label: "Pending Ward Indents", count: 6 },
        { key: "in-transit", label: "Stock In-Transit", count: 3 },
        { key: "transfer-history", label: "Completed Stock Transfers" },
        { key: "stock-returns", label: "Unused Stock Returns to Store" },
      ]}
      metrics={[
        { title: "Transfers Issued Today", value: "18 Orders", icon: Truck },
        { title: "Ward Indents Pending", value: "6 Requests", icon: Clock, valueColor: "text-amber-500" },
        { title: "In-Transit Dispatches", value: "3 Active", icon: AlertTriangle },
        { title: "Dispatch Acknowledgment Rate", value: "100%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Two-step transfer handshake (Storekeeper dispatch confirmation -> Receiving ward nurse electronic acknowledgment)",
        "Automated batch and serial number tracking across all internal movements",
        "Ward emergency stock top-up overrides with retrospective audit documentation",
      ]}
    />
  );
};

export default StockTransfers;
