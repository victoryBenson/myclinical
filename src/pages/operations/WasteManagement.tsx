import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Trash2, ShieldAlert, CheckCircle2, Clock } from "lucide-react";

export const WasteManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Healthcare Waste & Biohazard Management"
      subtitle="Color-coded waste segregation (Yellow/Red/Black), sharps disposal, incinerator operations and toxic manifest logs"
      department="Operations & Facilities"
      badge="Biohazard Control"
      icon={Trash2}
      tabs={[
        { key: "waste-manifest", label: "Daily Waste Manifest & Weights" },
        { key: "incinerator", label: "On-site Incinerator Runs", count: "140 kg Burn" },
        { key: "sharps-disposal", label: "Sharps Box Collection Register" },
        { key: "hazardous-permits", label: "Licensed Biohazard Carrier Consignments" },
      ]}
      metrics={[
        { title: "Biohazard Segregation Pass", value: "99.4%", icon: ShieldAlert, valueColor: "text-emerald-600" },
        { title: "Clinical Waste Weight (24h)", value: "140 kg", icon: Trash2 },
        { title: "Incinerator Burn Temp", value: "1100°C Verified", icon: CheckCircle2 },
        { title: "Licensed Hauler Collection", value: "Every 48 Hours", icon: Clock },
      ]}
      capabilities={[
        "WHO healthcare waste color coding: Yellow (Infectious), Red (Anatomical), Brown (Chemical), Black (General)",
        "Automated weight capture and consignment note manifest generation for licensed biohazard removal",
        "Sharps container fill-level audit ensuring safe replacement before reaching 75% capacity",
      ]}
    />
  );
};

export default WasteManagement;
