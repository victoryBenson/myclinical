import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Syringe, Clock, CheckCircle2, Shield } from "lucide-react";

export const ClinicalProcedures: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Clinical Procedures & Minor Ops"
      subtitle="Minor surgical procedures, endoscopic examinations, wound debridement and interventional suites"
      department="Clinical Services"
      badge="Specialist Procedures"
      icon={Syringe}
      tabs={[
        { key: "scheduled", label: "Procedures Scheduled", count: 18 },
        { key: "in-progress", label: "Currently In Room", count: 4 },
        { key: "wound-care", label: "Complex Wound Care / Dressings", count: 22 },
        { key: "endoscopy", label: "Endoscopy & Colonoscopy Suite", count: 6 },
      ]}
      metrics={[
        { title: "Procedures Completed Today", value: "18 Cases", icon: Syringe },
        { title: "Procedure Rooms Active", value: "4 Suites", icon: Clock },
        { title: "Sterile Packs Consumed", value: "32 Trays", icon: Shield },
        { title: "Patient Complication Rate", value: "0.0%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Pre-procedure check and electronic procedural informed consent sign-off",
        "Sedation and local anaesthetic dosage charting with post-procedure recovery scoring",
        "Procedure photo documentation for wound healing tracking across outpatient visits",
      ]}
    />
  );
};

export default ClinicalProcedures;
