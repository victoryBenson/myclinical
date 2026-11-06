import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Award, ClipboardCheck, AlertTriangle, Shield, CheckCircle2, FileSpreadsheet } from "lucide-react";

export const QualityOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Quality Assurance & Clinical Governance"
      subtitle="Clinical safety indicators, hospital accreditation benchmarks, incident reporting, risk and infection surveillance"
      department="Quality Assurance & Compliance"
      badge="Hospital Governance"
      icon={Award}
      tabs={[
        { key: "indicators", label: "Quality Indicators", icon: Award },
        { key: "audits", label: "Clinical Audits", icon: ClipboardCheck },
        { key: "incidents", label: "Incident Reports", icon: AlertTriangle, count: 3 },
        { key: "risk", label: "Risk Register", icon: Shield },
        { key: "capa", label: "CAPA Corrective Actions", icon: CheckCircle2, count: 6 },
        { key: "compliance", label: "Regulatory Compliance", icon: CheckCircle2 },
        { key: "reports", label: "Quality Reports", icon: FileSpreadsheet },
      ]}
      metrics={[
        { title: "Hospital Quality Score", value: "96.4%", icon: Award, valueColor: "text-emerald-600" },
        { title: "Clinical Audits (YTD)", value: "24 Completed", icon: ClipboardCheck },
        { title: "Open Incident Reports", value: "3 In Review", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Accreditation Readiness", value: "98.2% (COHSASA / JCI)", icon: Shield },
      ]}
      capabilities={[
        "Real-time monitoring of hospital mortality, surgical site infections, medication errors, and readmissions",
        "Clinical peer review and multi-disciplinary morbidity & mortality (M&M) audit documentation",
        "Full root-cause analysis (RCA) and Corrective & Preventive Action (CAPA) tracking pipeline",
      ]}
    />
  );
};

export default QualityOverview;
