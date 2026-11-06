import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Clock, HeartPulse, CheckCircle2, AlertTriangle } from "lucide-react";

export const MedicationAdministration: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Medication Administration (eMAR)"
      subtitle="Inpatient bedside electronic medication administration, 5-Rights verification, IV infusions and dose charting"
      department="Pharmacy & Diagnostics"
      badge="Bedside eMAR"
      icon={Clock}
      tabs={[
        { key: "due-now", label: "Medications Due Now", count: 32 },
        { key: "scheduled", label: "Scheduled Rounds (Next 8h)", count: 74 },
        { key: "continuous-iv", label: "Continuous IV Infusions", count: 14 },
        { key: "prn-as-needed", label: "PRN (As Needed) Drugs" },
        { key: "mar-history", label: "24-Hour MAR Administration Log" },
      ]}
      metrics={[
        { title: "Doses Administered Today", value: "318 Given", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Doses Due in Next Hour", value: "32 Due", icon: Clock, valueColor: "text-amber-500" },
        { title: "Active IV Infusions", value: "14 Pumps", icon: HeartPulse },
        { title: "High Alert Medications", value: "8 Active (Heparin/Insulin)", icon: AlertTriangle, valueColor: "text-rose-500" },
      ]}
      capabilities={[
        "Bedside barcode scanning: Patient wristband + Medication unit-dose barcode verification",
        "Clinical '5 Rights' check: Right Patient, Right Drug, Right Dose, Right Route, Right Time",
        "Dual-nurse independent sign-off protocol for high-risk medications (Chemotherapy, Opioids, Insulin)",
        "Automated infusion rate calculation and smart pump interface integration",
      ]}
      workflowStages={[
        { step: 1, title: "Scan Patient", desc: "Nurse scans patient wristband to open bedside MAR chart." },
        { step: 2, title: "Scan Medication", desc: "Barcode confirms correct drug, dosage form and strength." },
        { step: 3, title: "Administer & Log", desc: "Drug administered and real-time electronic timestamp logged." },
      ]}
    />
  );
};

export default MedicationAdministration;
