import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, Phone, Building2, CheckCircle2 } from "lucide-react";

export const StaffDirectory: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Hospital Staff Directory"
      subtitle="Hospital-wide internal telephone extensions, duty stations, clinical specialty units and communication channels"
      department="Administration & HR"
      badge="Hospital Directory"
      icon={Users}
      tabs={[
        { key: "all-staff", label: "Complete Staff Contacts" },
        { key: "on-duty-today", label: "Currently On Shift", count: 286 },
        { key: "department-heads", label: "Heads of Department (HODs)", count: 18 },
        { key: "emergency-team", label: "Emergency Response & Code Blue Team" },
      ]}
      metrics={[
        { title: "Staff Contacts Listed", value: "348 Listed", icon: Users },
        { title: "Active Department Extensions", value: "72 Extensions", icon: Phone },
        { title: "On-Duty Verified", value: "286 Staff", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Clinical Departments", value: "18 Units", icon: Building2 },
      ]}
      capabilities={[
        "Instant search by name, department, role, or clinical unit",
        "Direct one-click internal calling and secure instant messaging trigger",
        "Designated emergency lead and on-call consultant telephone directory",
      ]}
    />
  );
};

export default StaffDirectory;
