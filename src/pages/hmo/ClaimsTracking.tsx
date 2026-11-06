import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Clock, CheckCircle2, AlertTriangle, FileSpreadsheet } from "lucide-react";

export const ClaimsTracking: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Claims Tracking & Vetting Pipeline"
      subtitle="Lifecycle tracking of submitted claims batches: received, under medical audit, approved and awaiting payment"
      department="HMO & Insurance"
      badge="Tracking Console"
      icon={Clock}
      tabs={[
        { key: "in-vetting", label: "Under Provider Vetting", count: 12 },
        { key: "approved-unpaid", label: "Approved (Awaiting Remittance)", count: 6 },
        { key: "queried-claims", label: "Queried Claims", count: 4 },
        { key: "settled-claims", label: "Settled Batches (Archived)" },
      ]}
      metrics={[
        { title: "Claims In Vetting", value: "₦8,450,000", icon: Clock },
        { title: "Approved by Underwriters", value: "₦5,120,000", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Under Medical Query", value: "₦680,000", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Average Days to Settle", value: "28 Days", icon: FileSpreadsheet },
      ]}
      capabilities={[
        "Real-time status tracking for each submitted batch across every HMO underwriter",
        "Automated deadline notifications alerting claims officers of aging unpaid batches approaching SLA breach",
        "Communication log with underwriter medical auditors for rapid dispute resolution",
      ]}
    />
  );
};

export default ClaimsTracking;
