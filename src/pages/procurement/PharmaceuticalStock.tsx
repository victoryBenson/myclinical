import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Pill, Boxes, AlertTriangle, ShieldCheck } from "lucide-react";

export const PharmaceuticalStock: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Pharmaceutical Warehouse Inventory"
      subtitle="Bulk medications, intravenous fluids, antibiotics, controlled dangerous drugs (CDD) and vaccine cold stores"
      department="Procurement & Supply Chain"
      badge="Bulk Pharmaceuticals"
      icon={Pill}
      tabs={[
        { key: "bulk-medications", label: "Central Drug Warehouse Stock", count: 680 },
        { key: "controlled-drugs", label: "Controlled Dangerous Drugs (CDD)", count: 18 },
        { key: "cold-chain", label: "Vaccine & Cold Storage (2-8°C)" },
        { key: "iv-fluids", label: "Bulk Intravenous (IV) Fluids" },
      ]}
      metrics={[
        { title: "Pharmaceutical Valuation", value: "₦26,400,000", icon: Pill },
        { title: "Controlled Drugs Log", value: "100% Balanced", icon: ShieldCheck, valueColor: "text-emerald-600" },
        { title: "Vaccine Cold Chain Status", value: "Optimal (4.2°C)", icon: Boxes },
        { title: "Stockout Warnings", value: "2 Drugs (Reordered)", icon: AlertTriangle, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Mandatory dual-custody verification register for controlled opioids and sedatives (Morphine, Fentanyl, Pethidine)",
        "Automated continuous temperature logging for pharmaceutical refrigerators with audible SMS temperature alarm",
        "Pallet and carton bulk breakdown tracking to unit-dose dispensing units",
      ]}
    />
  );
};

export default PharmaceuticalStock;
