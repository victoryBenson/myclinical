import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Syringe, Boxes, AlertTriangle, CheckCircle2 } from "lucide-react";

export const MedicalConsumables: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Medical & Surgical Consumables"
      subtitle="Cannulas, syringes, IV infusion giving sets, sterile surgical drapes, catheters and surgical gauze"
      department="Procurement & Supply Chain"
      badge="Medical Consumables"
      icon={Syringe}
      tabs={[
        { key: "consumables-stock", label: "Consumables Inventory List", count: 420 },
        { key: "theatre-packs", label: "Pre-packaged Surgical Packs", count: 24 },
        { key: "reorder-needed", label: "Below Reorder Level", count: 6 },
        { key: "ward-consumption", label: "Ward Daily Consumption Audit" },
      ]}
      metrics={[
        { title: "Consumable SKUs Managed", value: "420 Items", icon: Boxes },
        { title: "Sterile Surgical Kits", value: "84 Ready", icon: Syringe, valueColor: "text-emerald-600" },
        { title: "Below Safety Buffer", value: "6 Items", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Daily Hospital Burn Rate", value: "₦420,000", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Charge-back integration: consumption of surgical packs in theatre automatically bills to patient chart",
        "Pre-assembled clinical kit definitions (e.g. Normal Delivery Pack, Central Line Insertion Pack, Lumbar Puncture Kit)",
        "Automated vendor notification when emergency consumable stock reaches designated trigger point",
      ]}
    />
  );
};

export default MedicalConsumables;
