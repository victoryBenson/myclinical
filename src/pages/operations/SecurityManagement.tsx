import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Shield, Users, CheckCircle2, Clock } from "lucide-react";

export const SecurityManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Security, Access Control & Surveillance"
      subtitle="CCTV monitoring, security guard posts, visitor pass issuance, infant abduction alarms and incident logs"
      department="Operations & Facilities"
      badge="Campus Security"
      icon={Shield}
      tabs={[
        { key: "cctv-cameras", label: "CCTV Video Matrix (64 Feeds)", count: "100% Online" },
        { key: "visitor-passes", label: "Active Visitor Badges Issued", count: 84 },
        { key: "guard-patrols", label: "Security Guard Patrol Logs" },
        { key: "incident-book", label: "Security Occurrence Book (Zero)" },
      ]}
      metrics={[
        { title: "Security Officers on Shift", value: "18 Guards", icon: Users },
        { title: "CCTV Camera Feeds", value: "64/64 Active", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Active Ward Visitors", value: "84 Badges", icon: Clock },
        { title: "Infant Security Alarm", value: "Armed & Active", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Maternity infant abduction protection tags synced with automated exit door locks and alarm buzzers",
        "Visitor electronic check-in with printed photo badges and automatic visiting hour expiration alerts",
        "Panic button integration in Emergency triage and Psychiatric consult suites with instant security dispatch",
      ]}
    />
  );
};

export default SecurityManagement;
