import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, TrendingUp, Truck, Boxes } from "lucide-react";

export const ProcurementReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Procurement & Materials Analytics"
      subtitle="Stock consumption velocity, spend by vendor, price variance analysis, stockout frequencies and inventory turns"
      department="Procurement & Supply Chain"
      badge="Materials Analytics"
      icon={FileSpreadsheet}
      tabs={[
        { key: "spend-analysis", label: "Procurement Spend by Category" },
        { key: "consumption-velocity", label: "Stock Consumption Trends" },
        { key: "vendor-performance", label: "Supplier Compliance & On-Time Delivery" },
        { key: "abc-xyz-analysis", label: "ABC / VED Inventory Classification" },
      ]}
      metrics={[
        { title: "Monthly Procurement Spend", value: "₦14,800,000", icon: TrendingUp },
        { title: "Price Variance vs Budget", value: "-1.8% (Favorable)", icon: FileSpreadsheet, valueColor: "text-emerald-600" },
        { title: "Lead Time Average", value: "4.8 Days", icon: Truck },
        { title: "Stockout Incidents", value: "0 Stockouts", icon: Boxes },
      ]}
      capabilities={[
        "ABC (Value-based) and VED (Vital, Essential, Desirable) inventory classification matrices",
        "Vendor price comparison trends across quarterly contracts",
        "Executive PDF report pack generation ready for audit and board inspection",
      ]}
    />
  );
};

export default ProcurementReports;
