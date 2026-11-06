import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldCheck, Award, FileText, CheckCircle2 } from "lucide-react";

export const ClinicalGovernance: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Clinical Governance & Ethics"
      subtitle="Institutional review board (IRB), medical staff bylaws, evidence-based guidelines and clinical ethics committees"
      department="Quality Assurance & Compliance"
      badge="Clinical Governance"
      icon={ShieldCheck}
      tabs={[
        { key: "ethics-board", label: "Clinical Ethics Committee", count: 2 },
        { key: "practice-guidelines", label: "Evidence-Based Clinical Guidelines" },
        { key: "privileging-board", label: "Medical Staff Privileges Committee" },
        { key: "research-proposals", label: "Clinical Research & Trials Registry" },
      ]}
      metrics={[
        { title: "Clinical Guidelines Active", value: "84 Guidelines", icon: FileText },
        { title: "Ethics Cases Reviewed", value: "6 Cases (YTD)", icon: ShieldCheck },
        { title: "Clinical Governance Score", value: "98.8%", icon: Award, valueColor: "text-emerald-600" },
        { title: "Committee Meeting Cadence", value: "Monthly", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Standardized review protocol for complex ethical cases (Do Not Resuscitate orders, consent in minors, organ donation)",
        "Dissemination and tracking of standardized hospital clinical practice guidelines",
        "Clinical research proposal vetting and human subjects ethical approval certifications",
      ]}
    />
  );
};

export default ClinicalGovernance;
