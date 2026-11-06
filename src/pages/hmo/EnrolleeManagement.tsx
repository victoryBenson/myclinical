import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, CheckCircle2, Shield, Calendar } from "lucide-react";

export const EnrolleeManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Enrollee Management"
      subtitle="Beneficiary policy records, policy number validation, principal and dependent relationships"
      department="HMO & Insurance"
      badge="Beneficiary Registry"
      icon={Users}
      tabs={[
        { key: "all-enrollees", label: "Active Enrollee Directory" },
        { key: "dependents", label: "Dependent Accounts" },
        { key: "policy-renewals", label: "Expiring Policies (Next 30d)", count: 28 },
        { key: "cards", label: "Digital Insurance Cards" },
      ]}
      metrics={[
        { title: "Total Insured Enrollees", value: "8,450 Patients", icon: Users },
        { title: "Active Policies", value: "98.1%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Family Packages", value: "1,240 Families", icon: Shield },
        { title: "Expiring Policies", value: "28 This Month", icon: Calendar, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Biometric and photo ID enrollee matching preventing insurance card impersonation",
        "Clear benefit package limit tracking: Primary, Secondary, Tertiary care and surgical allowances",
        "Automated sync with HMO provider beneficiary lists via secure SFTP and API connectors",
      ]}
    />
  );
};

export default EnrolleeManagement;
