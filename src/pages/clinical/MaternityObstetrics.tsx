import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Sparkles, HeartPulse, BedDouble, CalendarDays } from "lucide-react";

export const MaternityObstetrics: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Maternity & Obstetrics"
      subtitle="Antenatal care clinics, digital partograph labour monitoring, delivery records and postnatal ward"
      department="Clinical Services"
      badge="Maternal & Child"
      icon={Sparkles}
      tabs={[
        { key: "antenatal", label: "Antenatal Clinics (ANC)", count: 32 },
        { key: "labour-ward", label: "Labour & Delivery Suites", count: 6 },
        { key: "postnatal", label: "Postnatal Ward", count: 18 },
        { key: "partograph", label: "WHO Digital Partograph" },
        { key: "birth-registry", label: "Hospital Birth Registry" },
      ]}
      metrics={[
        { title: "Active ANC Enrollees", value: "480 Mothers", icon: Sparkles },
        { title: "Labour Ward Active", value: "6 In Labour", icon: HeartPulse, valueColor: "text-primary" },
        { title: "Deliveries This Month", value: "84 Babies", icon: BedDouble },
        { title: "Neonates in Nursery", value: "12 Infants", icon: CalendarDays },
      ]}
      capabilities={[
        "Digital WHO partograph tracking cervical dilation, descent, uterine contractions and fetal heart rate",
        "High-risk pregnancy scoring (Pre-eclampsia, Gestational Diabetes, Multiple Pregnancy)",
        "Birth notifications and automated generation of official National Population Commission birth data",
      ]}
    />
  );
};

export default MaternityObstetrics;
