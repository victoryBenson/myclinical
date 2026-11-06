import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Droplets, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

export const InfectionControl: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Infection Prevention & Control (IPC)"
      subtitle="Healthcare-Associated Infection (HAI) surveillance, surgical site infection audits, hand hygiene audits and isolation protocols"
      department="Quality Assurance & Compliance"
      badge="IPC Surveillance"
      icon={Droplets}
      tabs={[
        { key: "hai-surveillance", label: "HAI Surveillance (SSI, CAUTI, CLABSI)", count: 2 },
        { key: "hand-hygiene", label: "Hand Hygiene Audit Compliance", count: "96.4%" },
        { key: "isolation-wards", label: "Patients in Contact/Airborne Isolation", count: 4 },
        { key: "antibiogram", label: "Hospital Microbial Antibiogram" },
      ]}
      metrics={[
        { title: "Overall HAI Rate", value: "0.42 / 1000 Patient Days", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Hand Hygiene Adherence", value: "96.4% Compliance", icon: CheckCircle2 },
        { title: "Inpatients in Isolation", value: "4 Patients", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Water & Autoclave Tests", value: "100% Sterile Pass", icon: Droplets },
      ]}
      capabilities={[
        "Surveillance algorithms detecting healthcare-associated infections (CAUTI, CLABSI, VAP, Surgical Site Infections)",
        "WHO 5 Moments for Hand Hygiene observational audit logging across all nursing wards and theatres",
        "Hospital cumulative antibiogram tracking multi-drug resistant organisms (MRSA, ESBL, CRE)",
      ]}
    />
  );
};

export default InfectionControl;
