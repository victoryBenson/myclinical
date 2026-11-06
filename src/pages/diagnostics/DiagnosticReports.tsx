import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, FlaskConical, Radio, CheckCircle2 } from "lucide-react";

export const DiagnosticReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Diagnostic Reports & Investigation Archive"
      subtitle="Unified investigative reports across clinical pathology, histology, microbiology and radiology"
      department="Pharmacy & Diagnostics"
      badge="Diagnostic Archive"
      icon={FileText}
      tabs={[
        { key: "all-reports", label: "Consolidated Diagnostic Reports" },
        { key: "lab-pathology", label: "Laboratory Pathology", icon: FlaskConical },
        { key: "radiology-imaging", label: "Radiology & Imaging", icon: Radio },
        { key: "critical-findings", label: "Critical Notification Log" },
      ]}
      metrics={[
        { title: "Diagnostic Reports (30d)", value: "3,280 Reports", icon: FileText },
        { title: "Reports Signed & Released", value: "99.2%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Lab Orders Processed", value: "2,460 Orders", icon: FlaskConical },
        { title: "Imaging Scans Archived", value: "820 Studies", icon: Radio },
      ]}
      capabilities={[
        "Consolidated PDF investigative dossier for patient referrals and overseas consultations",
        "Direct electronic dissemination to outpatient clinics and inpatient ward tablets",
        "Statistical audit reports for infectious disease tracking and antimicrobial resistance surveillance",
      ]}
    />
  );
};

export default DiagnosticReports;
