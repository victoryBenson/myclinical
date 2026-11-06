import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, FileText, Briefcase, Award, Clock, CalendarDays, ShieldCheck } from "lucide-react";

export const EmployeeManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Employee Management"
      subtitle="Master personnel records, contracts, qualifications, digital files, biometric IDs and employment history"
      department="Administration & HR"
      badge="Employee Directory"
      icon={Users}
      tabs={[
        { key: "directory", label: "Employee Directory", icon: Users },
        { key: "profile", label: "Employee Profile", icon: Users },
        { key: "employment", label: "Employment Information", icon: Briefcase },
        { key: "documents", label: "Documents & Credentials", icon: ShieldCheck },
        { key: "attendance", label: "Attendance History", icon: Clock },
        { key: "leave", label: "Leave History", icon: CalendarDays },
        { key: "performance", label: "Performance History", icon: Award },
      ]}
      metrics={[
        { title: "Total Master Records", value: "348 Staff", icon: Users },
        { title: "Clinical Personnel", value: "242 Medical", icon: ShieldCheck },
        { title: "Admin & Operations", value: "106 Staff", icon: Briefcase },
        { title: "Personnel Files Up to Date", value: "98.5%", icon: FileText, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Full digital employee profile: Personal, Contact, Next-of-Kin, Banking, Tax ID, Pension PIN",
        "Clinical credentialing documentation: Degree certificates, Specialist fellowships, Regulatory licenses",
        "Historical chronological logs of promotions, transfers, salary increments, appraisals and disciplinary notices",
      ]}
    />
  );
};

export default EmployeeManagement;
