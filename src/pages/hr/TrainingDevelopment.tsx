import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export const TrainingDevelopment: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Training & Continuing Medical Education (CME)"
      subtitle="Mandatory life support certifications (BLS, ACLS, ATLS), CME credits tracking, clinical seminars and workshops"
      department="Administration & HR"
      badge="CME & Training"
      icon={GraduationCap}
      tabs={[
        { key: "upcoming-courses", label: "Upcoming Training Calendar", count: 4 },
        { key: "bls-acls", label: "BLS / ACLS Certification Status", count: "98% Compliant" },
        { key: "cme-credits", label: "Physician CME Credit Ledger" },
        { key: "external-sponsorships", label: "Conference & Study Grants" },
      ]}
      metrics={[
        { title: "CME Credits Logged", value: "1,240 Units", icon: Award },
        { title: "BLS / ACLS Certified", value: "98.4% Staff", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Training Sessions This Month", value: "4 Workshops", icon: Calendar },
        { title: "Hospital CME Points", value: "Accredited", icon: GraduationCap },
      ]}
      capabilities={[
        "Automated alerts for mandatory life support certifications nearing expiration (BLS, ACLS, Neonatal Resuscitation)",
        "Self-service upload of conference certificates with automated credit tallying",
        "Hospital internal grand rounds attendance and digital logbook recording",
      ]}
    />
  );
};

export default TrainingDevelopment;
