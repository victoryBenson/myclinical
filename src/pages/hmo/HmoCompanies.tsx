import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, Users, CheckCircle2, FileCheck, Receipt, FileSpreadsheet } from "lucide-react";

export const HmoCompanies: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="HMO Companies & Insurance Underwriters"
      subtitle="Registered HMO provider directory, policy contracts, enrollee databases, tariff agreements and claims"
      department="HMO & Insurance"
      badge="Underwriter Registry"
      icon={Building2}
      tabs={[
        { key: "directory", label: "HMO Directory", icon: Building2 },
        { key: "enrollees", label: "Enrollees", icon: Users },
        { key: "eligibility", label: "Eligibility Verification", icon: CheckCircle2 },
        { key: "authorizations", label: "Pre-Authorizations", icon: FileCheck },
        { key: "claims", label: "Claims Batching", icon: Receipt },
        { key: "reconciliation", label: "Remittance Reconciliation", icon: FileSpreadsheet },
        { key: "reports", label: "Insurance Reports", icon: FileSpreadsheet },
      ]}
      metrics={[
        { title: "Active HMO Providers", value: "32 Partners", icon: Building2 },
        { title: "Insured Enrollees on File", value: "8,450 Patients", icon: Users },
        { title: "Active Pre-Auth Codes", value: "24 Granted", icon: FileCheck, valueColor: "text-emerald-600" },
        { title: "Current Batch Under Vetting", value: "₦6,800,000", icon: Receipt },
      ]}
      capabilities={[
        "Granular configuration of each HMO company: primary contact, escalation desk, billing cycle and copay policies",
        "Custom negotiated fee schedules and tariff discount matrices per underwriter",
        "Electronic batch submission with validation audit trail preventing rejected claim submissions",
      ]}
    />
  );
};

export default HmoCompanies;
