import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Activity, Stethoscope, Clock, Users } from "lucide-react";

export const ClinicalHuddle: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Daily Clinical Huddle"
      subtitle="Shift handover briefings, critical patient watchlists, on-call specialist assignments"
      department="Dashboard"
      badge="Daily Operational Sync"
      icon={Activity}
      tabs={[
        { key: "morning-shift", label: "Morning Shift (07:00 - 15:00)" },
        { key: "afternoon-shift", label: "Afternoon Shift (14:30 - 21:30)" },
        { key: "night-shift", label: "Night Shift (21:00 - 08:00)" },
        { key: "critical-watch", label: "Critical Watchlist", count: 7 },
      ]}
      metrics={[
        { title: "Clinicians on Active Shift", value: "38 Doctors", icon: Stethoscope },
        { title: "Nursing Staff on Duty", value: "84 Nurses", icon: Users },
        { title: "Handover Status", value: "Completed (100%)", icon: Clock, valueColor: "text-emerald-600" },
        { title: "Critical Patients Monitored", value: "7 High Risk", icon: Activity, valueColor: "text-rose-500" },
      ]}
      capabilities={[
        "Standardized SBAR (Situation, Background, Assessment, Recommendation) clinical handovers",
        "Multi-disciplinary team patient watchlist with one-click chart access",
        "On-call physician contact board and specialty consult tracking",
      ]}
    />
  );
};

export default ClinicalHuddle;
