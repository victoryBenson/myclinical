import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Clock, CheckCircle2, AlertTriangle, Users } from "lucide-react";

export const AttendanceManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Attendance & Time Management"
      subtitle="Biometric clock-in records, shift duration, overtime tracking, lateness penalties and attendance reconciliation"
      department="Administration & HR"
      badge="Time & Attendance"
      icon={Clock}
      tabs={[
        { key: "daily-attendance", label: "Today's Biometric Log", count: 286 },
        { key: "shift-exceptions", label: "Lateness & Absenteeism Alerts", count: 6 },
        { key: "overtime-claims", label: "Overtime Hours Claimed", count: 18 },
        { key: "monthly-summary", label: "Monthly Timesheet Aggregation" },
      ]}
      metrics={[
        { title: "Staff Clocked In Today", value: "286 / 292 (98%)", icon: Clock, valueColor: "text-emerald-600" },
        { title: "On-time Arrival Score", value: "95.2%", icon: CheckCircle2 },
        { title: "Overtime Logged (Month)", value: "342 Hours", icon: Users },
        { title: "Unexplained Absences", value: "2 Cases", icon: AlertTriangle, valueColor: "text-rose-500" },
      ]}
      capabilities={[
        "Biometric fingerprint and facial recognition hardware integration at all hospital checkpoints",
        "Geofenced mobile clock-in for home care nurses and ambulance dispatch teams",
        "Direct export into payroll engine for automated overtime calculations and unauthorized absence deductions",
      ]}
    />
  );
};

export default AttendanceManagement;
