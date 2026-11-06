import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Shield, CheckCircle2, AlertTriangle, Users } from "lucide-react";

export const PatientSafety: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Safety & Clinical Risk"
      subtitle="International Patient Safety Goals (IPSG): patient identification, surgical safety, medication safety, fall prevention"
      department="Quality Assurance & Compliance"
      badge="IPSG Safety"
      icon={Shield}
      tabs={[
        { key: "ipsg-goals", label: "WHO 6 Patient Safety Goals" },
        { key: "fall-risk", label: "Inpatient Fall Prevention", count: 8 },
        { key: "medication-safety", label: "Look-Alike Sound-Alike (LASA) Drugs" },
        { key: "pressure-ulcers", label: "Hospital-Acquired Pressure Ulcers", count: 0 },
      ]}
      metrics={[
        { title: "Patient Safety Index", value: "99.2%", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Zero Harm Milestone", value: "124 Days", icon: CheckCircle2 },
        { title: "Inpatient Falls (Zero Goal)", value: "0 Falls (30d)", icon: Users },
        { title: "High Alert Drug Verification", value: "100%", icon: AlertTriangle },
      ]}
      capabilities={[
        "Automated wristband 2-identifier verification enforcement at all clinical contact points",
        "Look-Alike Sound-Alike (LASA) automated warning banners during medication ordering",
        "Bedside Morse Fall Scale and Braden Pressure Sore scoring with automated nursing intervention alerts",
      ]}
    />
  );
};

export default PatientSafety;
