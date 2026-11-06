import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { BedDouble, CheckCircle2, LogOut, Clock } from "lucide-react";

export const PatientAdt: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Admission, Discharge & Transfer (ADT)"
      subtitle="Inpatient admission booking, inter-ward transfers, discharge summaries and bed tracking"
      department="Patient Management"
      badge="Hospital ADT Engine"
      icon={BedDouble}
      tabs={[
        { key: "active-admissions", label: "Current Inpatients", count: 168 },
        { key: "pending-admissions", label: "Admission Orders (Pending)", count: 12 },
        { key: "transfers", label: "Inter-Ward Transfers", count: 4 },
        { key: "discharges", label: "Discharge In Progress", count: 9 },
        { key: "history", label: "ADT History Log" },
      ]}
      metrics={[
        { title: "Current Inpatients", value: "168 Beds", icon: BedDouble },
        { title: "Today's Admissions", value: "24 Patients", icon: CheckCircle2, valueColor: "text-primary" },
        { title: "Today's Discharges", value: "19 Completed", icon: LogOut, valueColor: "text-emerald-600" },
        { title: "Avg Inpatient LOS", value: "3.8 Days", icon: Clock },
      ]}
      capabilities={[
        "Electronic admission request processing directly from outpatient clinics and emergency",
        "Bed assignment matrix linked to medical specialties, gender segregation and isolation needs",
        "Inter-ward step-up and step-down transfer workflows (e.g., ICU to General Medical Ward)",
        "Automated discharge clearance coordinating pharmacy take-home meds, nursing and billing",
      ]}
      workflowStages={[
        { step: 1, title: "Admission Order", desc: "Attending doctor issues clinical admission order with diagnosis." },
        { step: 2, title: "Bed Allotment & Check-in", desc: "Ward nurse assigns bed and performs admission vitals." },
        { step: 3, title: "Inpatient Care & Rounds", desc: "Daily multidisciplinary notes, medication chart and labs." },
        { step: 4, title: "Discharge & Clearance", desc: "Discharge summary signed, medications dispensed, bill cleared." },
      ]}
    />
  );
};

export default PatientAdt;
