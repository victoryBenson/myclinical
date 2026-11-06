import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldCheck, Award, Clock, AlertTriangle } from "lucide-react";

export const CredentialingLicensing: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Credentialing & Professional Licensing"
      subtitle="Medical regulatory licensing (MDCN, NMCN, PCN, MLSCN, RRBN), clinical privileges and annual retention practicing fees"
      department="Administration & HR"
      badge="Regulatory Licensing"
      icon={ShieldCheck}
      tabs={[
        { key: "physician-licenses", label: "MDCN Doctor Licenses", count: "72 Active" },
        { key: "nurse-licenses", label: "NMCN Nurse Licenses", count: "186 Active" },
        { key: "pharmacist-licenses", label: "PCN Pharmacist Licenses", count: "16 Active" },
        { key: "privileging-matrix", label: "Clinical Procedural Privileges" },
        { key: "expiring-soon", label: "Expiring (Next 90 Days)", count: 8 },
      ]}
      metrics={[
        { title: "Licensed Clinical Staff", value: "312 Compliant", icon: ShieldCheck, valueColor: "text-emerald-600" },
        { title: "Compliance Rate", value: "99.4%", icon: Award },
        { title: "Renewal Notices Active", value: "8 Staff", icon: Clock, valueColor: "text-amber-500" },
        { title: "Unlicensed / Lapsed", value: "0 Tolerated", icon: AlertTriangle },
      ]}
      capabilities={[
        "Automated alerts 90, 60 and 30 days prior to annual practicing license expiration",
        "Clinical privileges delineation defining which specific surgeries or procedures each specialist is authorized to perform",
        "Primary source credential verification audit trail with university medical schools and national boards",
      ]}
    />
  );
};

export default CredentialingLicensing;
