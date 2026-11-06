import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { HeartPulse, Activity, AlertTriangle, Clock } from "lucide-react";

export const VitalSignsObservations: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Vital Signs & Observations"
      subtitle="Blood pressure, SpO2 pulse oximetry, heart rate, temperature, blood glucose and NEWS2 early warning scoring"
      department="Clinical Services"
      badge="Observation Charts"
      icon={HeartPulse}
      tabs={[
        { key: "inpatient-vitals", label: "Ward Bedside Vitals", count: 168 },
        { key: "opd-triage-vitals", label: "OPD Triage Vitals", count: 94 },
        { key: "news2-escalation", label: "NEWS2 Escalation Track", count: 5 },
        { key: "glucometer-records", label: "Bedside Capillary Glucose Log" },
      ]}
      metrics={[
        { title: "Vitals Recorded Today", value: "840 Sets", icon: HeartPulse },
        { title: "NEWS2 Score ≥ 5 (High)", value: "5 Patients", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Avg Recording Frequency", value: "Q4H Standard", icon: Clock },
        { title: "Connected Monitor Feeds", value: "24 Monitored", icon: Activity, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "National Early Warning Score (NEWS2) automated calculation with clinical trigger protocols",
        "Interactive trend lines charting BP, HR, Respiratory Rate and Temperature over time",
        "Bedside Bluetooth device syncing with automated transcription to inpatient chart",
      ]}
    />
  );
};

export default VitalSignsObservations;
