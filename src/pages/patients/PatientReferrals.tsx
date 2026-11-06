import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Share2, Building2, CheckCircle2, Clock } from "lucide-react";

export const PatientReferrals: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Referral Management"
      subtitle="Inbound and outbound specialist clinical referrals, primary health center liaisons and tertiary care handoffs"
      department="Patient Management"
      badge="Specialist Network"
      icon={Share2}
      tabs={[
        { key: "inbound", label: "Inbound Referrals", count: 18 },
        { key: "outbound", label: "Outbound Tertiary Referrals", count: 4 },
        { key: "inter-departmental", label: "Internal Cross-Specialty Consults", count: 12 },
        { key: "partners", label: "Referring Clinics & Facilities" },
      ]}
      metrics={[
        { title: "Total Referrals This Month", value: "142 Cases", icon: Share2 },
        { title: "Inbound Completed", value: "92 Patients", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Pending Specialist Review", value: "14 Scheduled", icon: Clock, valueColor: "text-primary" },
        { title: "Partner Hospital Network", value: "34 Centers", icon: Building2 },
      ]}
      capabilities={[
        "Electronic clinical referral letter generation with complete medical attachments",
        "Referral receipt tracking and automated specialist appointment triage",
        "Outcome reporting back to referring family physicians and primary care clinics",
      ]}
    />
  );
};

export default PatientReferrals;
