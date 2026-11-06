import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { UtensilsCrossed, Users, Activity, CheckCircle2 } from "lucide-react";

export const DieteticsNutrition: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Dietetics & Clinical Nutrition"
      subtitle="Nutritional assessments, enteral / parenteral feeds, therapeutic diet planning and catering coordination"
      department="Clinical Services"
      badge="Nutritional Support"
      icon={UtensilsCrossed}
      tabs={[
        { key: "inpatient-diets", label: "Inpatient Therapeutic Diets", count: 168 },
        { key: "consults", label: "Nutrition Outpatient Clinics", count: 14 },
        { key: "tpn-feeds", label: "Enteral & TPN Parenteral Plans", count: 6 },
        { key: "kitchen-orders", label: "Hospital Kitchen Diet Slips" },
      ]}
      metrics={[
        { title: "Special Diets Prescribed", value: "92 Diabetic/Renal", icon: UtensilsCrossed },
        { title: "TPN / Tube Feeds", value: "6 Patients", icon: Activity, valueColor: "text-primary" },
        { title: "Nutrition Consults", value: "14 Today", icon: Users },
        { title: "Diet Orders Verified", value: "100%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Caloric and protein requirement calculators (Harris-Benedict, Mifflin-St Jeor formulas)",
        "Direct interface between clinical dietitians and central hospital food production",
        "Renal, diabetic, hypertensive, gluten-free, post-bariatric customized meal templates",
      ]}
    />
  );
};

export default DieteticsNutrition;
