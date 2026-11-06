import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Activity, Stethoscope, HeartPulse, BedDouble, AlertTriangle } from "lucide-react";

export const ClinicalOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Clinical Services Overview"
      subtitle="Hospital-wide clinical care coordination, physician consultations, inpatient care units and clinical metrics"
      department="Clinical Services"
      badge="Clinical Command"
      icon={Activity}
      tabs={[
        { key: "active-consultations", label: "Active Consultations", count: 48 },
        { key: "inpatient-rounds", label: "Ward Rounds Progress", count: "12 Wards" },
        { key: "specialty-clinics", label: "Today's Specialty Clinics", count: 6 },
        { key: "theatre-schedule", label: "OR Surgical Schedule", count: 9 },
      ]}
      metrics={[
        { title: "Consultations Completed", value: "142 Today", icon: Stethoscope },
        { title: "Inpatients Receiving Care", value: "168 Active", icon: BedDouble },
        { title: "Active Clinical Alerts", value: "3 Critical", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Clinical Care Teams", value: "14 On Duty", icon: HeartPulse },
      ]}
      capabilities={[
        "Unified medical care console connecting physicians, nurses, pharmacists and diagnostic specialists",
        "Clinical governance compliance, mortality and morbidity surveillance",
        "Direct one-click ordering of laboratory investigations, imaging scans and pharmaceutical prescriptions",
      ]}
    />
  );
};

export default ClinicalOverview;
