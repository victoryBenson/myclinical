import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { AlertTriangle, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export const ExpiryBatchTracking: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Expiry & Batch Tracking (FEFO)"
      subtitle="First-Expiry-First-Out (FEFO) dispensing rules, near-expiry automated alerts, batch recalls and quarantine logs"
      department="Procurement & Supply Chain"
      badge="FEFO Safety Engine"
      icon={AlertTriangle}
      tabs={[
        { key: "expiring-30-days", label: "Expiring in < 30 Days", count: 4 },
        { key: "expiring-90-days", label: "Expiring in 31 - 90 Days", count: 12 },
        { key: "quarantine-hold", label: "Quarantined / Recalled Batches", count: 1 },
        { key: "batch-audit", label: "Batch Traceability Logs" },
      ]}
      metrics={[
        { title: "FEFO Compliance Score", value: "99.8%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Near-Expiry Value", value: "₦184,000", icon: Clock, valueColor: "text-amber-500" },
        { title: "Quarantined Batches", value: "1 Batch", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Expired Write-Offs (YTD)", value: "0.12% (Target < 1%)", icon: ShieldAlert },
      ]}
      capabilities={[
        "Automatic system enforcement: dispensing interface prevents selecting a later batch while an earlier expiring batch exists",
        "Recall kill-switch: instantaneously blocks dispensing of any flagged manufacturer batch across all hospital sub-stores and pharmacy points",
        "Vendor return workflow for eligible near-expiry credit exchanges",
      ]}
    />
  );
};

export default ExpiryBatchTracking;
