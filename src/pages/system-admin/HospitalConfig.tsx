import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, FileText, Shield } from "lucide-react";

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
        { title: "Institution Name", value: "myClinical Multispecialty", icon: Building2 },
        { title: "Operating Campuses", value: "Main Campus + Annex", icon: Building2 },
        { title: "Document Watermark & Logo", value: "High-Resolution Active", icon: FileText, valueColor: "text-emerald-600" },
        { title: "Regulatory Registration", value: "HEFAMAA Approved", icon: Shield },
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
