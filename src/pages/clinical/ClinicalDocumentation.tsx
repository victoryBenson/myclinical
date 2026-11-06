import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, CheckCircle2, Lock, Activity } from "lucide-react";

export const ClinicalDocumentation: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Clinical Documentation & Notes"
      subtitle="SOAP consultation records, medical certificates, referral slips and specialty clinical proformas"
      department="Clinical Services"
      badge="Medical Records"
      icon={FileText}
      tabs={[
        { key: "soap-notes", label: "SOAP Progress Notes" },
        { key: "discharge-notes", label: "Discharge Summaries" },
        { key: "medical-reports", label: "Medical Fitness & Legal Certificates" },
        { key: "audit-review", label: "Documentation Peer Audit" },
      ]}
      metrics={[
        { title: "Clinical Entries (24h)", value: "520 Notes", icon: FileText },
        { title: "Documentation Completeness", value: "98.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Digitally Signed", value: "512 Notes", icon: Lock },
        { title: "Awaiting Consultant Sign-off", value: "8 Notes", icon: Activity, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Specialty clinical templates (Internal Medicine, Surgery, Obs/Gyn, Ophthalmology, ENT)",
        "Voice-to-text dictation integration and medical abbreviation auto-expansion",
        "Strict tamper-evident audit locking compliant with healthcare privacy regulations",
      ]}
    />
  );
};

export default ClinicalDocumentation;
