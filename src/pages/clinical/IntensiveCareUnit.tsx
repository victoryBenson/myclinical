import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { HeartPulse, BedDouble, Activity, ShieldAlert } from "lucide-react";

export const IntensiveCareUnit: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Intensive Care Unit (ICU)"
      subtitle="Critical care monitoring, mechanical ventilator charting, hemodynamic support and organ perfusion telemetry"
      department="Clinical Services"
      badge="Critical Care Level 3"
      icon={HeartPulse}
      tabs={[
        { key: "icu-beds", label: "ICU Beds (1 - 12)", count: 10 },
        { key: "ventilators", label: "Ventilator Parameters", count: 4 },
        { key: "infusions", label: "Inotropic & Vasopressor Infusions" },
        { key: "abg-labs", label: "Arterial Blood Gas (ABG) Trend" },
      ]}
      metrics={[
        { title: "ICU Bed Occupancy", value: "10/12 Beds (83%)", icon: BedDouble },
        { title: "Ventilated Patients", value: "4 On Vent", icon: HeartPulse, valueColor: "text-rose-500" },
        { title: "Nurse-to-Patient Ratio", value: "1:1 Dedicated", icon: Activity, valueColor: "text-emerald-600" },
        { title: "High Acuity Alerts", value: "2 Monitored", icon: ShieldAlert },
      ]}
      capabilities={[
        "Continuous multi-parameter bedside monitor telemetry integration",
        "Glasgow Coma Scale (GCS), APACHE II and SOFA mortality prediction scoring",
        "Arterial line arterial blood gas (ABG) acid-base calculator with automated interpretation",
      ]}
    />
  );
};

export default IntensiveCareUnit;
