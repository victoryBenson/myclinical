import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, Activity, Sparkles, CheckCircle2 } from "lucide-react";

export const Paediatrics: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Paediatrics & Child Health"
      subtitle="Neonatal intensive care (NICU), child immunization, developmental milestones and pediatric inpatient care"
      department="Clinical Services"
      badge="Paediatric Care"
      icon={Users}
      tabs={[
        { key: "inpatient-paeds", label: "Paediatric Ward", count: 18 },
        { key: "nicu", label: "Neonatal ICU & Incubators", count: 8 },
        { key: "immunization", label: "Vaccination Clinic", count: 42 },
        { key: "growth-charts", label: "WHO Growth Percentiles" },
      ]}
      metrics={[
        { title: "Paediatric Inpatients", value: "18 Children", icon: Users },
        { title: "NICU Incubators Active", value: "8/10 Occupied", icon: Activity, valueColor: "text-amber-500" },
        { title: "Vaccinations Given Today", value: "42 Immunizations", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Phototherapy Units Active", value: "3 Infants", icon: Sparkles },
      ]}
      capabilities={[
        "Weight-based pediatric medication dose calculators with safety maximum dose alerts",
        "WHO Growth Standards percentiles (Weight-for-Age, Height-for-Age, Head Circumference)",
        "Automated national immunization schedule tracking with parent SMS recall reminders",
      ]}
    />
  );
};

export default Paediatrics;
