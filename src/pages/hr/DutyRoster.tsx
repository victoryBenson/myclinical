import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Activity, Calendar, Clock, AlertTriangle } from "lucide-react";

export const DutyRoster: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Duty Roster & Shift Scheduling"
      subtitle="24/7 hospital shift scheduling: morning, afternoon, night, call duty, locum coverage and shift swaps"
      department="Administration & HR"
      badge="24/7 Shift Roster"
      icon={Activity}
      tabs={[
        { key: "monthly-roster", label: "Monthly Department Rosters" },
        { key: "on-call-specialists", label: "Today's On-Call Doctors", count: 8 },
        { key: "shift-swaps", label: "Shift Swap Requests", count: 4 },
        { key: "locum-hours", label: "Locum Doctor & Nurse Logs" },
      ]}
      metrics={[
        { title: "Active 24/7 Shifts", value: "3 Shifts/Day", icon: Activity },
        { title: "Specialists On-Call", value: "8 Consultants", icon: Calendar },
        { title: "Pending Shift Swaps", value: "4 Requests", icon: Clock, valueColor: "text-amber-500" },
        { title: "Roster Staffing Compliance", value: "98.6%", icon: AlertTriangle, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Intelligent shift scheduling algorithms adhering to working time directives and mandatory rest intervals",
        "Peer-to-peer shift exchange requests with electronic supervisor approval",
        "Emergency locum doctor paging and compensation rate tracking per call hour",
      ]}
    />
  );
};

export default DutyRoster;
