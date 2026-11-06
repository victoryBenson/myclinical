import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Activity, Users, Calendar, CheckCircle2 } from "lucide-react";

export const PhysiotherapyRehab: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Physiotherapy & Rehabilitation"
      subtitle="Physical therapy sessions, stroke rehabilitation, musculoskeletal recovery and mobility plans"
      department="Clinical Services"
      badge="Rehabilitation Services"
      icon={Activity}
      tabs={[
        { key: "appointments", label: "Scheduled Therapy Sessions", count: 24 },
        { key: "inpatient-physio", label: "Ward Bedside Therapy", count: 12 },
        { key: "exercise-plans", label: "Personalized Exercise Plans" },
        { key: "outcomes", label: "Functional Independence Measure (FIM)" },
      ]}
      metrics={[
        { title: "Sessions Completed Today", value: "24 Patients", icon: Activity },
        { title: "Active Rehab Plans", value: "86 Patients", icon: Users },
        { title: "Bedside Consults", value: "12 Inpatients", icon: Calendar },
        { title: "Mobility Improvement Rate", value: "92.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Musculoskeletal, neurological, cardiopulmonary and pediatric physiotherapy charting",
        "Range of Motion (ROM) and muscle power grading documentation",
        "Home exercise prescription sheets with printable illustrated guides",
      ]}
    />
  );
};

export default PhysiotherapyRehab;
