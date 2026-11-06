import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, Award, Calendar, CheckCircle2 } from "lucide-react";

export const ManagementReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Management Briefings & Strategic Reports"
      subtitle="Monthly executive director briefing packs, medical advisory committee minutes, board presentations and audit reviews"
      department="Reports & Analytics"
      badge="Executive Briefing"
      icon={FileText}
      tabs={[
        { key: "monthly-packs", label: "Monthly Executive Director Packs" },
        { key: "mac-briefings", label: "Medical Advisory Committee (MAC)" },
        { key: "board-packs", label: "Quarterly Board Presentation Decks" },
        { key: "archived-briefs", label: "Archived Management Packs" },
      ]}
      metrics={[
        { title: "Executive Packs Published", value: "12 Annual Decks", icon: FileText },
        { title: "MAC Clinical Reviews", value: "Monthly Current", icon: Award, valueColor: "text-emerald-600" },
        { title: "Next Board Meeting Deck", value: "Q4 Scheduled", icon: Calendar },
        { title: "Sign-off Status", value: "Approved by MD", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Automated consolidation of clinical outcomes, financial statements, and operational KPIs into an executive pack",
        "Executive narrative commentary builder allowing Medical Director and CFO to attach review notes",
        "Encrypted board portal distribution with read receipts and digital annotation capability",
      ]}
    />
  );
};

export default ManagementReports;
