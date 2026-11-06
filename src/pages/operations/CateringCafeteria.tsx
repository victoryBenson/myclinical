import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { UtensilsCrossed, CheckCircle2, Clock, Users } from "lucide-react";

export const CateringCafeteria: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Catering, Inpatient Food & Cafeteria"
      subtitle="Inpatient diet production, meal delivery carts, patient food allergies, cafeteria point-of-sale and kitchen hygiene"
      department="Operations & Facilities"
      badge="Hospital Kitchen"
      icon={UtensilsCrossed}
      tabs={[
        { key: "meal-service", label: "Today's Meal Service (Breakfast, Lunch, Dinner)" },
        { key: "special-diets", label: "Therapeutic Diet Orders from Dietetics", count: 92 },
        { key: "cafeteria-pos", label: "Hospital Cafeteria POS" },
        { key: "kitchen-hygiene", label: "HACCP Food Safety Audits" },
      ]}
      metrics={[
        { title: "Inpatient Meals Prepared", value: "480 Trays/Day", icon: UtensilsCrossed },
        { title: "Special Diet Accuracy", value: "100% Verified", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "On-time Meal Delivery", value: "98.4%", icon: Clock },
        { title: "HACCP Hygiene Pass Score", value: "99.2%", icon: Users },
      ]}
      capabilities={[
        "Automated sync with clinical dietetics: therapeutic diet orders (diabetic, renal, low-salt, soft puree) generate kitchen prep slips",
        "Bedside allergen verification stickers on all delivered thermal meal trays",
        "Staff meal allowance card integration and visitor cafeteria point-of-sale receipting",
      ]}
    />
  );
};

export default CateringCafeteria;
