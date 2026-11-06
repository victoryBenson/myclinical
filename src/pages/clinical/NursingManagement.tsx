import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { HeartPulse, Users, Calendar, BedDouble, Clock, Activity, FileSpreadsheet } from "lucide-react";

export const NursingManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Nursing Management"
      subtitle="Nursing workforce administration, ward bed allocations, shift handovers, assessments and vital observation charts"
      department="Clinical Services"
      badge="Nursing Directorate"
      icon={HeartPulse}
      tabs={[
        { key: "overview", label: "Nursing Overview", icon: HeartPulse },
        { key: "directory", label: "Nurse Directory", icon: Users },
        { key: "roster", label: "Duty Roster & Shifts", icon: Calendar },
        { key: "wards", label: "Ward Assignments", icon: BedDouble },
        { key: "assessments", label: "Nursing Assessments", icon: Activity },
        { key: "vitals", label: "Vital Signs Monitoring", icon: Clock },
        { key: "mar", label: "Medication Administration", icon: HeartPulse },
        { key: "reports", label: "Nursing Reports", icon: FileSpreadsheet },
      ]}
      metrics={[
        { title: "Total Nursing Staff", value: "186 Nurses", icon: Users },
        { title: "Nurses on Current Shift", value: "54 Active", icon: Clock, valueColor: "text-emerald-600" },
        { title: "Nurse-to-Patient Ratio", value: "1:4 General / 1:1 ICU", icon: BedDouble },
        { title: "Medication Rounds Complete", value: "99.1%", icon: HeartPulse },
      ]}
      capabilities={[
        "Ward shift scheduling with automated locum cover and rotational duty roster",
        "Bedside nursing care plans: Waterlow pressure ulcer risk, Morse fall scale, wound care",
        "Real-time vital signs charting with National Early Warning Score (NEWS2) escalation",
        "Inpatient electronic Medication Administration Record (eMAR) bedside validation",
      ]}
    />
  );
};

export default NursingManagement;
