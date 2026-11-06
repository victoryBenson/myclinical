import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, Clock, CalendarDays, CheckCircle2 } from "lucide-react";

export const OutpatientDept: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Outpatient Department (OPD)"
      subtitle="General outpatient clinics, specialty consultations, walk-in triage, queue management and follow-up care"
      department="Clinical Services"
      badge="OPD Care"
      icon={Users}
      tabs={[
        { key: "queue", label: "Live Clinic Queue", count: 28 },
        { key: "consultations", label: "In Consultation", count: 12 },
        { key: "completed", label: "Completed Visits Today", count: 94 },
        { key: "clinics", label: "Clinic Schedules & Rooms" },
      ]}
      metrics={[
        { title: "Today's OPD Patients", value: "134 Registered", icon: Users },
        { title: "Avg Waiting Time", value: "22 Minutes", icon: Clock },
        { title: "Consulting Suites Active", value: "14 Rooms", icon: CalendarDays },
        { title: "Prescriptions Dispatched", value: "112 Rx", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Digital queue token calling system with waiting lounge display screens",
        "Direct routing from triage nurses to appropriate general practitioner or specialty doctor",
        "Point-of-care ordering of laboratory tests, medical imaging and instant pharmacy e-prescriptions",
      ]}
    />
  );
};

export default OutpatientDept;
