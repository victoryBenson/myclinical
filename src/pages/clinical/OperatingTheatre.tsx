import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Syringe, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export const OperatingTheatre: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Theatre & Operating Room (OR)"
      subtitle="Surgical suite scheduling, WHO surgical safety checklists, anaesthesia records and recovery PACU"
      department="Clinical Services"
      badge="Surgical Suites"
      icon={Syringe}
      tabs={[
        { key: "schedule", label: "Today's Surgical List", count: 9 },
        { key: "or-rooms", label: "Theatre Suites (OR 1 - 4)", count: "4 Suites" },
        { key: "pacu", label: "Post-Anaesthesia Care Unit (PACU)", count: 3 },
        { key: "checklists", label: "WHO Surgical Checklists" },
        { key: "consents", label: "Informed Surgical Consents" },
      ]}
      metrics={[
        { title: "Surgeries Today", value: "9 Scheduled", icon: Syringe },
        { title: "Surgeries In Progress", value: "3 Active", icon: Clock, valueColor: "text-primary" },
        { title: "Post-Op In PACU", value: "3 Recovering", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Emergency OR Standby", value: "OR Suite 4 Ready", icon: AlertTriangle },
      ]}
      capabilities={[
        "Interactive theatre room timeline board tracking pre-op, knife-to-skin, closure and turnaround times",
        "Full digital implementation of the WHO Surgical Safety Checklist (Sign In, Time Out, Sign Out)",
        "Anaesthetic intra-operative charting with automatic vital sign monitor logging",
        "Surgical implant tracking, sponge/swab count verification and instrument sterile processing logs",
      ]}
    />
  );
};

export default OperatingTheatre;
