import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Briefcase, Users, CheckCircle2, Calendar, Award, FileSpreadsheet } from "lucide-react";

export const RecruitmentAts: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Recruitment & Applicant Tracking (ATS)"
      subtitle="Job requisition management, applicant sourcing, clinical competency interviews, offers and credential verification"
      department="Administration & HR"
      badge="Talent Sourcing"
      icon={Briefcase}
      tabs={[
        { key: "vacancies", label: "Job Vacancies", icon: Briefcase, count: 8 },
        { key: "applications", label: "Applications Received", icon: Users, count: 142 },
        { key: "shortlisted", label: "Shortlisted Candidates", icon: CheckCircle2, count: 24 },
        { key: "interviews", label: "Interviews Scheduled", icon: Calendar, count: 12 },
        { key: "offers", label: "Job Offers & Contracting", icon: Award, count: 4 },
        { key: "reports", label: "Recruitment Reports", icon: FileSpreadsheet },
      ]}
      metrics={[
        { title: "Open Positions", value: "8 Vacancies", icon: Briefcase },
        { title: "Candidate Applications", value: "142 Applicants", icon: Users },
        { title: "Time to Fill (Clinical)", value: "34 Days", icon: Calendar },
        { title: "Offer Acceptance Rate", value: "92.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Custom clinical screening questions and minimum licensing requirement filters",
        "Multi-interviewer scoring rubrics (Clinical knowledge, Communication, Crisis response)",
        "Automated offer letter generation with salary breakdown and conditional medical exam requirements",
      ]}
    />
  );
};

export default RecruitmentAts;
