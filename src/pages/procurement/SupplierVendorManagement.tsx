import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Truck, Award, CheckCircle2, Shield } from "lucide-react";

export const SupplierVendorManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Supplier & Vendor Management"
      subtitle="Approved vendor list (AVL), vendor performance scorecards, compliance certificates and price contracts"
      department="Procurement & Supply Chain"
      badge="Vendor Registry"
      icon={Truck}
      tabs={[
        { key: "vendor-directory", label: "Approved Vendor Directory", count: 64 },
        { key: "scorecards", label: "Vendor Performance Scorecards" },
        { key: "certifications", label: "Regulatory Compliance (NAFDAC / ISO)" },
        { key: "blacklisted", label: "Suspended / Non-compliant Vendors" },
      ]}
      metrics={[
        { title: "Registered Suppliers", value: "64 Vendors", icon: Truck },
        { title: "Top Tier (A Rating)", value: "28 Vendors", icon: Award, valueColor: "text-emerald-600" },
        { title: "Active Price Catalogs", value: "48 Price Lists", icon: CheckCircle2 },
        { title: "Regulatory Due Diligence", value: "100% Verified", icon: Shield },
      ]}
      capabilities={[
        "NAFDAC, Pharmacists Council, and tax compliance validation for pharmaceutical distributors",
        "Quarterly vendor scorecards: Lead time compliance, product quality, invoice accuracy and price competitiveness",
        "Preferred vendor tagging for automatic quote request routing",
      ]}
    />
  );
};

export default SupplierVendorManagement;
