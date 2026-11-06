import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileText, CheckCircle2, Clock, Users } from "lucide-react";

export const SopPolicies: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="SOP & Policy Management"
      subtitle="Hospital Standard Operating Procedures, clinical protocol version control, staff acknowledgment and policy reviews"
      department="Quality Assurance & Compliance"
      badge="Controlled Documents"
      icon={FileText}
      tabs={[
        { key: "sop-catalogue", label: "Master SOP Catalogue", count: 184 },
        { key: "under-review", label: "SOPs Under Periodic Review", count: 12 },
        { key: "staff-read-receipts", label: "Staff Read & Sign Acknowledgments" },
        { key: "superseded", label: "Archived & Superseded Versions" },
      ]}
      metrics={[
        { title: "Controlled SOPs Active", value: "184 SOPs", icon: FileText },
        { title: "Staff Read Compliance", value: "96.8%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Review Cadence Compliance", value: "98.2%", icon: Clock },
        { title: "Clinical Protocols Active", value: "112 Clinical", icon: Users },
      ]}
      capabilities={[
        "Controlled document version control (Draft -> Technical Review -> Committee Approval -> Released)",
        "Mandatory staff electronic acknowledgment upon release of updated clinical or operational policies",
        "Searchable full-text SOP index accessible from every ward terminal",
      ]}
    />
  );
};

export default SopPolicies;
