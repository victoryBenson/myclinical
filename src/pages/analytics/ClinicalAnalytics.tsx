import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Stethoscope, Activity, HeartPulse, ShieldAlert } from "lucide-react";

export const ClinicalAnalytics: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Clinical Analytics & Epidemiological Intelligence"
      subtitle="Disease incidence, surgical case volumes, hospital mortality, 30-day readmissions and clinical outcomes"
      department="Reports & Analytics"
      badge="Clinical Intelligence"
      icon={Stethoscope}
      tabs={[
        { key: "disease-incidence", label: "Top ICD-10 Disease Incidence" },
        { key: "surgical-volumes", label: "Surgical Outcomes & Volumes" },
        { key: "readmission-rates", label: "30-Day Readmission Analysis" },
        { key: "mortality-reviews", label: "Hospital Standardized Mortality (HSMR)" },
      ]}
      metrics={[
        { title: "Top Diagnosis Recorded", value: "Severe Malaria (24%)", icon: Activity },
        { title: "Surgeries Analyzed (MTD)", value: "184 Cases", icon: HeartPulse },
        { title: "30-Day Readmission Rate", value: "2.4% (Benchmark < 5%)", icon: Stethoscope, valueColor: "text-emerald-600" },
        { title: "HSMR Mortality Index", value: "0.68 (Favorable)", icon: ShieldAlert },
      ]}
      capabilities={[
        "Epidemiological heat maps tracking communicable and non-communicable disease incidence",
        "Risk-adjusted surgical mortality and complication rates by surgical sub-specialty",
        "Hospital Standardized Mortality Ratio (HSMR) calculations compliant with healthcare quality reporting standards",
      ]}
    />
  );
};

export default ClinicalAnalytics;
