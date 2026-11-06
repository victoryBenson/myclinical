import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Droplets, CheckCircle2, Users, AlertTriangle } from "lucide-react";

export const BloodBankTransfusion: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Blood Bank & Transfusion Services"
      subtitle="Donor register, blood grouping, cross-matching, packed red cells, fresh frozen plasma and transfusion safety"
      department="Pharmacy & Diagnostics"
      badge="Blood Transfusion"
      icon={Droplets}
      tabs={[
        { key: "units-inventory", label: "Available Blood Units", count: 48 },
        { key: "cross-match", label: "Cross-Match Requests", count: 6 },
        { key: "active-transfusions", label: "Active Transfusions on Wards", count: 3 },
        { key: "donor-register", label: "Voluntary Donor Register" },
        { key: "reactions", label: "Adverse Transfusion Reaction Log" },
      ]}
      metrics={[
        { title: "Total Units in Blood Bank", value: "48 Units", icon: Droplets, valueColor: "text-primary" },
        { title: "Group O-Negative (Universal)", value: "4 Units (Critical)", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Units Cross-Matched Today", value: "14 Units", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Registered Voluntary Donors", value: "324 Donors", icon: Users },
      ]}
      capabilities={[
        "ABO and Rhesus blood grouping verification with double-signature validation",
        "Cross-match compatibility certificate generation with strict barcode bag tagging",
        "Bedside vital signs monitoring protocol during blood product infusion with immediate reaction halt alerts",
      ]}
    />
  );
};

export default BloodBankTransfusion;
