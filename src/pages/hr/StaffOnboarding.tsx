import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CheckCircle2, FileText, ShieldCheck, Users } from "lucide-react";

export const StaffOnboarding: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Staff Onboarding & Induction"
      subtitle="New hire onboarding workflows, hospital orientation checklists, ID badge issuance, IT provisioning and policy sign-offs"
      department="Administration & HR"
      badge="Onboarding Pipeline"
      icon={CheckCircle2}
      tabs={[
        { key: "in-progress", label: "Onboarding In Progress", count: 6 },
        { key: "checklists", label: "Departmental Induction Checklists" },
        { key: "it-provisioning", label: "IT & EMR Access Provisioning", count: 4 },
        { key: "completed", label: "Successfully Completed (Last 90d)" },
      ]}
      metrics={[
        { title: "New Hires In Induction", value: "6 Staff", icon: Users },
        { title: "Induction Completion Rate", value: "100%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "EMR Credentials Issued", value: "6/6 Accounts", icon: ShieldCheck },
        { title: "Compliance Sign-offs", value: "All Signed", icon: FileText },
      ]}
      capabilities={[
        "Step-by-step induction checklist: Infection control, Fire safety, EMR training, Child protection, Medical ethics",
        "Automated IT hardware allocation and role-based EMR security account creation",
        "Probationary period 3-month and 6-month automated review triggers",
      ]}
    />
  );
};

export default StaffOnboarding;
