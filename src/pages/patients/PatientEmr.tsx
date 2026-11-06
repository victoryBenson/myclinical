import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileCheck, Activity, Stethoscope, Lock } from "lucide-react";

export const PatientEmr: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Medical Records (EMR)"
      subtitle="Complete electronic medical record repository, clinical encounters, diagnostic history and notes"
      department="Patient Management"
      badge="Certified EMR"
      icon={FileCheck}
      tabs={[
        { key: "encounters", label: "Clinical Encounters" },
        { key: "doctor-notes", label: "Physician Progress Notes" },
        { key: "diagnostic-reports", label: "Lab & Imaging Reports" },
        { key: "discharge-summaries", label: "Discharge Summaries" },
        { key: "consent-forms", label: "Signed Consents & Legal" },
      ]}
      metrics={[
        { title: "Total EMR Records", value: "62,490", icon: FileCheck },
        { title: "Today's Clinical Entries", value: "418", icon: Activity },
        { title: "Locked & Signed Notes", value: "98.2%", icon: Lock, valueColor: "text-emerald-600" },
        { title: "Consulting Clinicians", value: "46 Active", icon: Stethoscope },
      ]}
      capabilities={[
        "Structured SOAP (Subjective, Objective, Assessment, Plan) consultation forms",
        "ICD-10 clinical diagnostic coding and SNOMED CT terminology integration",
        "Digital signature and timestamp audit locking preventing retrospective tampering",
        "Direct retrieval of historical laboratory and radiology PACS investigations",
      ]}
    />
  );
};

export default PatientEmr;
