import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldCheck, Building2, CheckCircle2, AlertTriangle, FileSpreadsheet } from "lucide-react";

export const HmoOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="HMO & Managed Care Overview"
      subtitle="Insurance enrollee verification, pre-authorization codes, tariff compliance and claims recovery"
      department="HMO & Insurance"
      badge="Managed Care"
      icon={ShieldCheck}
      tabs={[
        { key: "claims-status", label: "Claims Processing Pipeline" },
        { key: "pa-requests", label: "Pending Pre-Authorizations", count: 8 },
        { key: "enrollee-census", label: "Today's Enrollee Visits", count: 64 },
        { key: "rejections", label: "Query / Rejection Queue", count: 4 },
      ]}
      metrics={[
        { title: "Registered HMO Companies", value: "32 Providers", icon: Building2 },
        { title: "Monthly Claims Generated", value: "₦14,200,000", icon: FileSpreadsheet },
        { title: "Claims Approval Rate", value: "95.8%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Outstanding Under Review", value: "₦2,450,000", icon: AlertTriangle, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Integration with major national and private health insurance schemes (NHIA, AXA Mansard, Hygeia, Reliance, Leadway)",
        "Automated pre-authorization verification for surgical admissions and specialist diagnostics",
        "Direct electronic claims generation with automated ICD-10 diagnostic coding and tariff schedule validation",
      ]}
    />
  );
};

export default HmoOverview;
