import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Stethoscope, CalendarDays, Award, Clock, Users } from "lucide-react";

export const DoctorManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Doctor / Physician Management"
      subtitle="Medical staff directory, specialty rosters, outpatient clinics, call schedules and clinical activities"
      department="Clinical Services"
      badge="Medical Directorate"
      icon={Stethoscope}
      tabs={[
        { key: "directory", label: "Doctor Directory", icon: Users },
        { key: "profiles", label: "Doctor Profiles", icon: Stethoscope },
        { key: "specialties", label: "Specialties & Units", icon: Award },
        { key: "schedules", label: "Duty & Call Schedules", icon: CalendarDays },
        { key: "appointments", label: "Consultation Bookings", icon: Clock },
        { key: "activities", label: "Clinical Activities & Surgeries" },
        { key: "reports", label: "Performance Reports" },
      ]}
      metrics={[
        { title: "Consultant Physicians", value: "24 Specialists", icon: Stethoscope },
        { title: "Resident & Medical Officers", value: "48 Doctors", icon: Users },
        { title: "Doctors on Active Shift", value: "32 On Duty", icon: Clock, valueColor: "text-emerald-600" },
        { title: "Avg Patient Consult Time", value: "18 Mins", icon: CalendarDays },
      ]}
      capabilities={[
        "Specialist sub-specialty credentialing (Cardiology, Surgery, Obstetrics, Paediatrics, Orthopaedics)",
        "Automated clinic booking quotas and electronic appointment waitlist management",
        "Clinical activity tracking: outpatient encounters, ward rounds, operative surgeries performed",
        "Physician peer review metrics, documentation compliance, and CME accreditation logs",
      ]}
    />
  );
};

export default DoctorManagement;
