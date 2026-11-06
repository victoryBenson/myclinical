import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Wrench, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export const BiomedicalEngineering: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Biomedical Engineering & Clinical Devices"
      subtitle="Defibrillators, ventilators, anaesthesia workstations, patient monitors calibration, electrical safety and PPM"
      department="Operations & Facilities"
      badge="BioMed Safety"
      icon={Wrench}
      tabs={[
        { key: "biomed-assets", label: "Medical Device Registry", count: 320 },
        { key: "calibration-schedule", label: "Upcoming Calibrations", count: 8 },
        { key: "breakdown-logs", label: "Breakdowns Under Repair", count: 2 },
        { key: "electrical-safety", label: "IEC 62353 Safety Test Records" },
      ]}
      metrics={[
        { title: "Cataloged Medical Devices", value: "320 Devices", icon: Wrench },
        { title: "Operational Uptime", value: "98.8%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Under BioMed Service", value: "2 Devices", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Electrical Safety Pass", value: "100% Tested", icon: ShieldCheck },
      ]}
      capabilities={[
        "Compulsory IEC 62353 electrical leakage current and earth bond safety certifications",
        "Anaesthesia vaporizer, infusion pump, and defibrillator annual calibration tracking",
        "Manufacturer medical device safety recall alerts integrated with local hospital asset inventory",
      ]}
    />
  );
};

export default BiomedicalEngineering;
