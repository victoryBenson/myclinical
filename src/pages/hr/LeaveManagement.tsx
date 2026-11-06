import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CalendarDays, CheckCircle2, Clock, Users } from "lucide-react";

export const LeaveManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Leave & Time-Off Management"
      subtitle="Annual leave planning, sick leave certificates, maternity/paternity leave, study leave and handover approvals"
      department="Administration & HR"
      badge="Leave Approvals"
      icon={CalendarDays}
      tabs={[
        { key: "leave-requests", label: "Pending Leave Requests", count: 8 },
        { key: "active-leaves", label: "Currently On Leave", count: 14 },
        { key: "leave-calendar", label: "Hospital-wide Leave Calendar" },
        { key: "balances", label: "Staff Leave Entitlement Balances" },
      ]}
      metrics={[
        { title: "Staff Currently on Leave", value: "14 Staff", icon: Users },
        { title: "Pending Approval", value: "8 Requests", icon: Clock, valueColor: "text-amber-500" },
        { title: "Annual Leave Allowance", value: "21 - 30 Days", icon: CalendarDays },
        { title: "Staff Cover Verified", value: "100%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Automated relief officer nomination ensuring adequate ward and clinic coverage before leave authorization",
        "Medical certificate verification for sick leave exceeding 48 hours",
        "Live calendar visualization preventing concurrent leave for multiple consultants within the same specialty unit",
      ]}
    />
  );
};

export default LeaveManagement;
