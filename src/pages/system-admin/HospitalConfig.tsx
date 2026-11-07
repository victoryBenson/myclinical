import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, FileText, Shield } from "lucide-react";
import { APP_INFO } from "../../app/appInfo";

export const HospitalConfig: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Hospital Profile & Institution Configuration"
      subtitle="Hospital organization profile, logo, branches, letterhead headers, tax identification and statutory accreditation details"
      department="System Administration"
      badge="Hospital Identity"
      icon={Building2}
      tabs={[
        { key: "institution-profile", label: "Hospital Identity & Branding" },
        { key: "branches-campuses", label: "Multi-Campus & Branch Locations", count: 2 },
        { key: "letterheads", label: "Official Document Letterhead & Signatures" },
        { key: "statutory-ids", label: "Tax Identification, CAC & CAC Numbers" },
      ]}
      metrics={[
        { title: "Deployment Solution", value: APP_INFO.deploymentName, icon: Building2 },
        { title: "Product Attribution", value: `${APP_INFO.attribution} (${APP_INFO.shortVersion})`, icon: Building2, valueColor: "text-emerald-600" },
        { title: "Document Watermark & Logo", value: "High-Resolution Active", icon: FileText, valueColor: "text-emerald-600" },
        { title: "Parent Organization", value: APP_INFO.parentCompany, icon: Shield },
      ]}
      capabilities={[
        "Upload hospital emblem, official letterhead banner, and digital medical director stamp for prescription and discharge slips",
        "Multi-branch architecture support allowing patient files to be seamlessly accessed across all hospital campuses",
        "Hospital mission, emergency hotline, and regulatory disclaimer customization for printed receipts and lab reports",
      ]}
    />
  );
};

export default HospitalConfig;
