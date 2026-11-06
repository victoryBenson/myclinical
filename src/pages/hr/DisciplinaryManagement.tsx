import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { AlertTriangle, FileText, CheckCircle2, Shield } from "lucide-react";

export const DisciplinaryManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Staff Disciplinary & Grievance Management"
      subtitle="Queries issued, investigative committee hearings, misconduct incidents, warnings and grievance appeals"
      department="Administration & HR"
      badge="Disciplinary Governance"
      icon={AlertTriangle}
      tabs={[
        { key: "active-queries", label: "Active Queries Issued", count: 2 },
        { key: "hearings", label: "Disciplinary Panel Hearings", count: 1 },
        { key: "sanctions", label: "Warning Letters & Sanctions Log" },
        { key: "grievances", label: "Employee Grievance Petitions", count: 1 },
      ]}
      metrics={[
        { title: "Open Inquiries", value: "2 Active", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Resolved Cases (YTD)", value: "14 Cases", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Procedural Compliance", value: "100%", icon: Shield },
        { title: "Documentation File", value: "Locked", icon: FileText },
      ]}
      capabilities={[
        "Structured due process workflow compliant with labor law and hospital medical staff bylaws",
        "Confidential document vault for investigation reports, witness statements and hearing minutes",
        "Standardized disciplinary outcome register (Verbal Warning, Written Query, Final Warning, Suspension, Termination)",
      ]}
    />
  );
};

export default DisciplinaryManagement;
