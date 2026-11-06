import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CheckCircle2, ShieldCheck, Clock, AlertTriangle } from "lucide-react";

export const EligibilityVerification: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Eligibility Verification"
      subtitle="Real-time insurance coverage validation, benefit package checks, co-payment limits and exclusion lists"
      department="HMO & Insurance"
      badge="Instant Validation"
      icon={CheckCircle2}
      tabs={[
        { key: "instant-check", label: "Real-time Verification Console" },
        { key: "verification-logs", label: "Today's Verified Patients", count: 64 },
        { key: "ineligible-queries", label: "Ineligible / Inactive Flags", count: 3 },
        { key: "benefit-limits", label: "Benefit Package Guidelines" },
      ]}
      metrics={[
        { title: "Verifications Completed Today", value: "64 Enrollees", icon: CheckCircle2 },
        { title: "Eligibility Success Rate", value: "95.3%", icon: ShieldCheck, valueColor: "text-emerald-600" },
        { title: "Avg Verification Time", value: "1.2 Seconds", icon: Clock },
        { title: "Ineligible Flags Handled", value: "3 Patients", icon: AlertTriangle, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Instant portal validation for enrollees presenting at hospital front desk",
        "Automated warnings for benefit exclusions (e.g., cosmetic procedures, specific IVF drugs, optical frames beyond limit)",
        "Patient copay calculation displayed immediately before clinical consultations commence",
      ]}
    />
  );
};

export default EligibilityVerification;
