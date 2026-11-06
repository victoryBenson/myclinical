import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldAlert, Bell, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export const NotificationSettings: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Notification Rules & Trigger Settings"
      subtitle="SMS gateway templates, email notifications, in-app clinical alerts, panic lab value pages and appointment reminders"
      department="System Administration"
      badge="Alert Engines"
      icon={ShieldAlert}
      tabs={[
        { key: "sms-templates", label: "Patient SMS Templates", icon: MessageSquare },
        { key: "email-triggers", label: "Automated Email Alerts", icon: Mail },
        { key: "clinical-paging", label: "Critical Care Emergency Paging", icon: ShieldAlert },
        { key: "in-app-badges", label: "In-App Notification Banners", icon: Bell },
      ]}
      metrics={[
        { title: "Notification Templates", value: "32 Configured", icon: MessageSquare },
        { title: "SMS Delivery Success", value: "99.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Critical Lab Panic Paging", value: "Real-time (< 30s)", icon: ShieldAlert },
        { title: "Active Notification Rules", value: "24 Triggers", icon: Bell },
      ]}
      capabilities={[
        "Customizable SMS templates with dynamic tags: {PatientName}, {DoctorName}, {AppointmentTime}, {BillAmount}",
        "Instant SMS alerts for appointments, queue calls, and critical pharmacy prescription ready notices",
        "Clinical priority push notifications delivered to on-call doctors' mobile devices for STAT laboratory findings",
      ]}
    />
  );
};

export default NotificationSettings;
