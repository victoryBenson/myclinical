import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileCheck, Shield, CheckCircle2, Clock } from "lucide-react";

export const RegulatoryCompliance: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Regulatory Compliance & Statutory Standards"
      subtitle="Ministry of Health licenses, HEFAMAA state agency permits, radiation safety, fire certificates and waste permits"
      department="Quality Assurance & Compliance"
      badge="Statutory Compliance"
      icon={FileCheck}
      tabs={[
        { key: "statutory-licenses", label: "Hospital Operational Licenses", count: 14 },
        { key: "environmental-permits", label: "Environmental & Waste Permits", count: 6 },
        { key: "radiation-safety", label: "NNRA Radiation Protection Permits", count: 3 },
        { key: "renewal-schedule", label: "Annual Permit Renewal Calendar" },
      ]}
      metrics={[
        { title: "Statutory Permits Active", value: "14 Permits (100%)", icon: FileCheck, valueColor: "text-emerald-600" },
        { title: "Next Renewal Due", value: "48 Days (Fire Cert)", icon: Clock },
        { title: "Regulatory Audit Result", value: "HEFAMAA Approved A+", icon: Shield },
        { title: "Statutory Fines / Citations", value: "0 Citations", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Centralized repository of all state and national regulatory permits with automated expiration alerts",
        "Statutory inspection readiness checklists (Fire safety, Radiation dosimetry, Medical waste disposal)",
        "Automated generation of required statutory monthly data returns for health authorities",
      ]}
    />
  );
};

export default RegulatoryCompliance;
