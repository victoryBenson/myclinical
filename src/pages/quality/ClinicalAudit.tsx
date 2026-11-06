import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ClipboardCheck, CheckCircle2, Clock, Award } from "lucide-react";

export const ClinicalAudit: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Clinical Audit & Medical Peer Review"
      subtitle="Mortality & Morbidity reviews, surgical outcome peer evaluations, clinical guideline compliance and medical audits"
      department="Quality Assurance & Compliance"
      badge="Clinical Peer Review"
      icon={ClipboardCheck}
      tabs={[
        { key: "m-and-m", label: "Mortality & Morbidity (M&M) Reviews", count: 4 },
        { key: "surgical-audits", label: "Surgical Outcome Audits" },
        { key: "prescribing-audits", label: "Antibiotic Stewardship Audits" },
        { key: "audit-calendar", label: "Annual Clinical Audit Program" },
      ]}
      metrics={[
        { title: "Clinical Audits Completed", value: "24 Studies", icon: ClipboardCheck },
        { title: "Clinical Compliance Score", value: "98.2%", icon: Award, valueColor: "text-emerald-600" },
        { title: "Audits In Progress", value: "4 Active", icon: Clock, valueColor: "text-amber-500" },
        { title: "Recommendations Implemented", value: "94.6%", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Standardized M&M reporting templates analyzing preventability, contributory factors and system improvements",
        "WHO surgical outcome indicators (unplanned re-operations within 48 hours, day-case readmissions)",
        "Antimicrobial stewardship audit tracking rational antibiotic usage and resistance profiles",
      ]}
    />
  );
};

export default ClinicalAudit;
