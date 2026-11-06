import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Briefcase, Users, Clock, Award } from "lucide-react";

export const HrOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Human Resources & Administration Overview"
      subtitle="Hospital workforce administration, personnel files, shift coverage, payroll and medical staff compliance"
      department="Administration & HR"
      badge="Workforce Command"
      icon={Briefcase}
      tabs={[
        { key: "workforce-summary", label: "Workforce Headcount" },
        { key: "shift-attendance", label: "Today's Shift Attendance", count: "98.2%" },
        { key: "leaves-active", label: "Staff on Approved Leave", count: 14 },
        { key: "licensing-alerts", label: "Licensing Expirations (Next 60d)", count: 6 },
      ]}
      metrics={[
        { title: "Total Hospital Staff", value: "348 Employees", icon: Users },
        { title: "Staff on Active Duty Today", value: "286 Staff", icon: Clock, valueColor: "text-emerald-600" },
        { title: "Active Open Vacancies", value: "8 Roles", icon: Briefcase },
        { title: "Staff Retention Rate", value: "96.4%", icon: Award },
      ]}
      capabilities={[
        "Comprehensive personnel tracking for clinical doctors, nurses, allied health, administrative and support staff",
        "Biometric time and attendance tracking mapped directly to monthly payroll deductions",
        "Statutory licensing compliance tracking for medical regulatory councils (MDCN, NMCN, PCN, MLSCN)",
      ]}
    />
  );
};

export default HrOverview;
