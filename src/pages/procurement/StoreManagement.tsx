import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, Boxes, Truck, CheckCircle2 } from "lucide-react";

export const StoreManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Store & Warehouse Management"
      subtitle="Sub-store locations: Central Medical Store, Theatre Store, Emergency Room Store, Lab Stores and Ward Cupboards"
      department="Procurement & Supply Chain"
      badge="Store Locations"
      icon={Building2}
      tabs={[
        { key: "store-locations", label: "Hospital Sub-Stores", count: 8 },
        { key: "central-warehouse", label: "Central Medical Warehouse" },
        { key: "theatre-store", label: "Operating Theatre Sub-Store" },
        { key: "bin-locations", label: "Bin & Shelf Layout Map" },
      ]}
      metrics={[
        { title: "Configured Sub-Stores", value: "8 Locations", icon: Building2 },
        { title: "Total Storage Bins", value: "840 Shelves", icon: Boxes },
        { title: "Inter-store Dispatches", value: "24 Today", icon: Truck },
        { title: "Storage Compliance (Temp/Humidity)", value: "100%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Granular store location management with individual storekeeper credentials and stock responsibilities",
        "Automated min/max inventory rules per individual sub-store location",
        "Environmental sensor integration logging temperature and humidity levels for sensitive pharmaceutical stores",
      ]}
    />
  );
};

export default StoreManagement;
