import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, Users, Calendar, Activity } from "lucide-react";

export const PatientProfiles: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Profiles & Medical Summary"
      subtitle="Holistic 360-degree patient health records, longitudinal encounter timeline and allergies"
      department="Patient Management"
      badge="Comprehensive Chart"
      icon={FileText}
      tabs={[
        { key: "summary", label: "Patient Health Summary" },
        { key: "timeline", label: "Encounter Timeline" },
        { key: "medications", label: "Active Medication List" },
        { key: "allergies", label: "Allergies & Cautions" },
        { key: "documents", label: "Scanned Records & Consents" },
      ]}
      metrics={[
        { title: "Master Patient Records", value: "14,820", icon: Users },
        { title: "Active Inpatients", value: "168 Profiles", icon: Activity },
        { title: "Documented Allergies", value: "3,140 Logged", icon: FileText },
        { title: "Recent Updates (24h)", value: "342 Records", icon: Calendar },
      ]}
      capabilities={[
        "Longitudinal medical history from all hospital encounters (OPD, IPD, ER, Surgery)",
        "Severe allergy, G6PD, and critical medical contraindication banners",
        "Document uploads (consent forms, prior outside hospital records, ID documents)",
        "Biometric patient identifier matching with master hospital index (MPI)",
      ]}
    />
  );
};

export default PatientProfiles;
