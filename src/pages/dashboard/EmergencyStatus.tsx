import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { AlertTriangle, Clock, HeartPulse, ShieldAlert } from "lucide-react";

export const EmergencyStatus: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Emergency & Triage Status"
      subtitle="Live emergency room admissions, triage priority queues, and resuscitation bay status"
      department="Dashboard"
      badge="24/7 ER Live Status"
      icon={AlertTriangle}
      tabs={[
        { key: "triage-queue", label: "Triage Waiting Queue", count: 14 },
        { key: "red-priority", label: "Red / Resuscitation (P1)", count: 2 },
        { key: "yellow-urgent", label: "Yellow / Very Urgent (P2)", count: 5 },
        { key: "green-standard", label: "Green / Standard (P3)", count: 7 },
      ]}
      metrics={[
        { title: "Current ER Patients", value: "14 In Process", icon: HeartPulse },
        { title: "Average Triage Wait", value: "8 Minutes", icon: Clock },
        { title: "Resus Bays Active", value: "2/4 Occupied", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Ambulance Inbound", value: "1 En Route (ETA 6m)", icon: ShieldAlert, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Automated Manchester Triage System (MTS) and Emergency Severity Index (ESI) scoring",
        "Direct one-click conversion from ER triage to acute admission or OR bypass",
        "Telemetry integration for real-time vitals and crash cart alerts",
      ]}
    />
  );
};

export default EmergencyStatus;
