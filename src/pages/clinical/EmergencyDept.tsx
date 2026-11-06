import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { AlertTriangle, Clock, HeartPulse, ShieldAlert } from "lucide-react";

export const EmergencyDept: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Emergency Department (A&E)"
      subtitle="Acute emergency medical care, trauma resuscitation, acute cardiac events and 24/7 critical triage"
      department="Clinical Services"
      badge="Trauma Center"
      icon={AlertTriangle}
      tabs={[
        { key: "triage-bay", label: "Triage Bays (P1 - P4)", count: 14 },
        { key: "resus-room", label: "Resuscitation Suite", count: 2 },
        { key: "trauma-cases", label: "Trauma Registry" },
        { key: "short-stay", label: "ER Observation / Short Stay", count: 8 },
      ]}
      metrics={[
        { title: "Current ER Census", value: "14 Patients", icon: HeartPulse },
        { title: "Door-to-Doctor Time", value: "11 Mins", icon: Clock, valueColor: "text-emerald-600" },
        { title: "Resus Bays Active", value: "2 Critical", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Trauma Team Ready", value: "Level 1 Standby", icon: ShieldAlert },
      ]}
      capabilities={[
        "Standardized Manchester Triage System (MTS) color-coded priority allocation",
        "Direct bypass activation to Catheterization Lab, Endoscopy, or Operating Theatre",
        "Crash cart inventory logs and automated defibrillator readiness checks",
      ]}
    />
  );
};

export default EmergencyDept;
