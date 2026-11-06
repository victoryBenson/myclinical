import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Boxes, CheckCircle2, Clock, Shield } from "lucide-react";

export const LaundryManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Laundry & Linen Management"
      subtitle="Hospital linen tracking, sterile theatre drapes, ward bed sheets, washing plant and linen distribution"
      department="Operations & Facilities"
      badge="Linen Operations"
      icon={Boxes}
      tabs={[
        { key: "linen-inventory", label: "Clean Linen Store Stock", count: 1240 },
        { key: "washing-cycles", label: "Heavy-Duty Washer Cycles", count: "Cycle 4 Active" },
        { key: "soiled-receipts", label: "Soiled Linen Intake Weights" },
        { key: "theatre-linen", label: "Sterile Operating Theatre Drapes" },
      ]}
      metrics={[
        { title: "Linen Par Stock on Wards", value: "100% Sufficient", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Linen Washed Today", value: "480 kg", icon: Boxes },
        { title: "Washer Thermal Disinfection", value: "71°C Verified", icon: Shield },
        { title: "Clean Distribution Turnaround", value: "4 Hours", icon: Clock },
      ]}
      capabilities={[
        "RFID and barcoded linen tracking monitoring wash cycle count and fabric replacement cycles",
        "Thermal and chemical disinfection verification meeting healthcare laundry standards (NHS CFPP 01-04 / CDC)",
        "Soiled infected linen segregation protocols preventing airborne exposure",
      ]}
    />
  );
};

export default LaundryManagement;
