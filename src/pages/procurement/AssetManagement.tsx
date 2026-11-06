import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Layers, CheckCircle2, Calendar, Wrench } from "lucide-react";

export const AssetManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Hospital Asset & Equipment Management"
      subtitle="Fixed asset register, barcode/RFID tagging, physical locations, depreciation calculations and asset disposal"
      department="Procurement & Supply Chain"
      badge="Fixed Assets"
      icon={Layers}
      tabs={[
        { key: "asset-register", label: "Master Fixed Asset Register", count: 840 },
        { key: "biomedical-assets", label: "Biomedical & Clinical Equipment", count: 320 },
        { key: "it-hardware", label: "IT & Telecommunications Assets", count: 210 },
        { key: "depreciation-schedules", label: "Asset Depreciation Ledger" },
      ]}
      metrics={[
        { title: "Total Fixed Assets Value", value: "₦240,000,000", icon: Layers },
        { title: "Tagged & Verified Assets", value: "840 Assets (100%)", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Assets Under Maintenance", value: "8 Units", icon: Wrench, valueColor: "text-amber-500" },
        { title: "Depreciation Calculated (YTD)", value: "₦18,200,000", icon: Calendar },
      ]}
      capabilities={[
        "QR code and barcode asset tagging with handheld scanning audit mode",
        "Straight-line and reducing-balance depreciation calculation mapped directly to general ledger accounts",
        "Asset transfer workflows with department custodian sign-offs and disposal approvals",
      ]}
    />
  );
};

export default AssetManagement;
