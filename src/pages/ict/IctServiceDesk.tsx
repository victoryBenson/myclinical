import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { HelpCircle, Clock, CheckCircle2, Users } from "lucide-react";

export const IctServiceDesk: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="ICT Service Desk & IT Support"
      subtitle="IT support ticketing, clinical workstation hardware issues, barcode scanner repairs and user requests"
      department="ICT & Digital Health"
      badge="IT Support"
      icon={HelpCircle}
      tabs={[
        { key: "open-tickets", label: "Open Support Tickets", count: 6 },
        { key: "in-progress", label: "Assigned & In Progress", count: 4 },
        { key: "resolved-today", label: "Resolved Today", count: 18 },
        { key: "knowledge-base", label: "Staff Self-Service IT Guides" },
      ]}
      metrics={[
        { title: "Open Support Tickets", value: "6 Tickets", icon: HelpCircle, valueColor: "text-amber-500" },
        { title: "Avg First Response Time", value: "8 Minutes", icon: Clock },
        { title: "First-Contact Resolution", value: "84.2%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "User Satisfaction Score", value: "4.9 / 5.0", icon: Users },
      ]}
      capabilities={[
        "Priority 1 emergency dispatch for critical clinical areas (Operating Theatres, ICU, Emergency Room)",
        "Remote desktop screen sharing tool allowing IT technicians to assist clinicians in real time",
        "Hardware repair lifecycle tracking with spare terminal loaner swaps",
      ]}
    />
  );
};

export default IctServiceDesk;
