import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { MessageSquare, Award, AlertTriangle, Users } from "lucide-react";

export const PatientFeedback: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Feedback & Experience"
      subtitle="Satisfaction ratings, inpatient care surveys, complaints management and service reviews"
      department="Patient Management"
      badge="Patient Voice"
      icon={MessageSquare}
      tabs={[
        { key: "all-feedback", label: "All Feedback Submissions" },
        { key: "inpatient-surveys", label: "Inpatient Experience Surveys" },
        { key: "outpatient-ratings", label: "OPD Clinic Ratings" },
        { key: "complaints", label: "Complaints & Queries", count: 3 },
      ]}
      metrics={[
        { title: "Net Promoter Score (NPS)", value: "+74", icon: Award, valueColor: "text-emerald-600" },
        { title: "Overall Satisfaction", value: "94.2%", icon: Users },
        { title: "Open Complaints", value: "3 In Review", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Avg Resolution Time", value: "24 Hours", icon: MessageSquare },
      ]}
      capabilities={[
        "Automated post-visit SMS and portal satisfaction surveys",
        "Multi-point care rating: Nursing care, Doctor communication, Cleanliness, Food, Waiting time",
        "Clinical governance complaints escalation and corrective action reporting",
      ]}
    />
  );
};

export default PatientFeedback;
