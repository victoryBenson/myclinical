import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { AlertTriangle, Clock, CheckCircle2, RotateCcw } from "lucide-react";

export const RejectedClaims: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Rejected & Disputed Claims"
      subtitle="Underwriter rejection notices, denial reasons, appeal dossier generation and claim resubmissions"
      department="HMO & Insurance"
      badge="Denial Appeals"
      icon={AlertTriangle}
      tabs={[
        { key: "active-rejections", label: "Active Rejections to Appeal", count: 8 },
        { key: "appeals-submitted", label: "Appeals Under Re-Review", count: 5 },
        { key: "successfully-recovered", label: "Recovered via Appeal", count: 14 },
        { key: "write-offs", label: "Approved Bad Debt Write-offs" },
      ]}
      metrics={[
        { title: "Current Disputed Claims", value: "₦580,000", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Appeal Recovery Rate", value: "78.4%", icon: RotateCcw, valueColor: "text-emerald-600" },
        { title: "Average Appeal Resolution", value: "14 Days", icon: Clock },
        { title: "Recovered (YTD)", value: "₦4,200,000", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Categorization of denial root causes (e.g., lack of PA code, ineligible enrollee, non-formulary drug, unbundling)",
        "Automated appeal letter builder populated with clinical justifications, lab proofs, and doctor notes",
        "Resubmission tracking ensuring secondary claims are audited through to payment",
      ]}
    />
  );
};

export default RejectedClaims;
