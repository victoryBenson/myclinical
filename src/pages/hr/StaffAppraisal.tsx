import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Award, CheckCircle2, Clock, Users } from "lucide-react";

export const StaffAppraisal: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Staff Appraisal & Performance Management"
      subtitle="Annual 360-degree performance appraisals, clinical competence evaluations, KPIs and career progression"
      department="Administration & HR"
      badge="Performance & KPIs"
      icon={Award}
      tabs={[
        { key: "active-cycle", label: "Annual Appraisal Cycle" },
        { key: "self-assessments", label: "Self-Assessments Completed", count: 284 },
        { key: "supervisor-reviews", label: "HOD Reviews Pending", count: 18 },
        { key: "peer-evaluations", label: "Clinical 360 Peer Feedback" },
      ]}
      metrics={[
        { title: "Appraisal Cycle Progress", value: "88% Completed", icon: Award, valueColor: "text-emerald-600" },
        { title: "Top Performance Rating", value: "24% Exceeding", icon: CheckCircle2 },
        { title: "Pending HOD Sign-off", value: "18 Staff", icon: Clock, valueColor: "text-amber-500" },
        { title: "Eligible for Promotion", value: "32 Employees", icon: Users },
      ]}
      capabilities={[
        "Clinical performance metrics: Diagnostic accuracy, complication rates, documentation timeliness, patient satisfaction",
        "Personal development plan (PDP) agreement between staff member and supervisor",
        "Automated linking of appraisal scores to annual increments and promotion committees",
      ]}
    />
  );
};

export default StaffAppraisal;
