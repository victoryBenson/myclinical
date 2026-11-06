import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CheckCircle2, Truck, AlertTriangle, Boxes } from "lucide-react";

export const GoodsReceivedNotes: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Goods Received Notes (GRN)"
      subtitle="Physical warehouse receipt, batch number entry, expiry dates, temperature inspection and acceptance sign-offs"
      department="Procurement & Supply Chain"
      badge="GRN Inward Gate"
      icon={CheckCircle2}
      tabs={[
        { key: "today-receipts", label: "Shipments Received Today", count: 4 },
        { key: "inspection-queue", label: "Awaiting Quality Inspection", count: 2 },
        { key: "rejected-goods", label: "Damaged / Rejected Deliveries", count: 1 },
        { key: "grn-archive", label: "Historical GRN Register" },
      ]}
      metrics={[
        { title: "GRN Processed (MTD)", value: "68 Notes", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Deliveries Received Today", value: "4 Shipments", icon: Truck },
        { title: "Cold Chain Verified (2-8°C)", value: "100% Compliant", icon: Boxes },
        { title: "Inspection Discrepancies", value: "1 Damaged Pack", icon: AlertTriangle, valueColor: "text-rose-500" },
      ]}
      capabilities={[
        "Three-way purchase matching (PO items vs Delivery Waybill vs physical count)",
        "Compulsory cold-chain temperature logger verification for vaccines and biologicals before receipt acceptance",
        "Automatic stock quantity update in central store immediately upon electronic GRN authorization",
      ]}
    />
  );
};

export default GoodsReceivedNotes;
