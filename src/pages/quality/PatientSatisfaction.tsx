import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { MessageSquare, Award, Users, CheckCircle2 } from "lucide-react";

export const PatientSatisfaction: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Satisfaction & Experience Analytics"
      subtitle="Net Promoter Score (NPS), clinical communication ratings, ward cleanliness, food quality and patient journey audits"
      department="Quality Assurance & Compliance"
      badge="Patient Experience"
      icon={MessageSquare}
      tabs={[
        { key: "nps-trends", label: "NPS & CSAT Monthly Trends" },
        { key: "survey-responses", label: "Recent Patient Survey Feedbacks", count: 184 },
        { key: "department-ratings", label: "Ratings by Hospital Department" },
        { key: "improvement-actions", label: "Patient-Driven Service Improvements" },
      ]}
      metrics={[
        { title: "Net Promoter Score", value: "+74 (Excellent)", icon: Award, valueColor: "text-emerald-600" },
        { title: "Doctor Communication Score", value: "96.8%", icon: Users },
        { title: "Nursing Care Score", value: "95.4%", icon: CheckCircle2 },
        { title: "Discharge Wait Satisfaction", value: "88.2%", icon: MessageSquare },
      ]}
      capabilities={[
        "Automated post-discharge and post-consultation digital survey triggering",
        "Disaggregated patient feedback filtering by attending consultant, ward, or service counter",
        "Negative feedback automated escalation to patient experience liaisons within 2 hours",
      ]}
    />
  );
};

export default PatientSatisfaction;
