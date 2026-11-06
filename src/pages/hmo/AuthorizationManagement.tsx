import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileCheck, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export const AuthorizationManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Authorization & Pre-Authorization (PA)"
      subtitle="Secondary and tertiary care pre-authorization requests, PA code tracking, surgical approval codes"
      department="HMO & Insurance"
      badge="PA Codes"
      icon={FileCheck}
      tabs={[
        { key: "pending-pa", label: "Pending PA Requests", count: 8 },
        { key: "approved-pa", label: "Approved PA Codes", count: 24 },
        { key: "query-pa", label: "Under HMO Medical Query", count: 3 },
        { key: "expired-pa", label: "Expired / Utilized PA Codes" },
      ]}
      metrics={[
        { title: "PA Requests (MTD)", value: "148 Codes", icon: FileCheck },
        { title: "Approved Codes", value: "136 (92%)", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Avg Turnaround Time", value: "24 Minutes", icon: Clock },
        { title: "Pending Provider Response", value: "8 Requests", icon: AlertTriangle, valueColor: "text-amber-500" },
      ]}
      capabilities={[
        "Electronic pre-authorization request packet with clinical notes, diagnosis, ICD-10 and itemized cost estimate",
        "Direct binding of issued PA code to patient's electronic hospital bill to ensure 100% claims reimbursement",
        "Automated alerts if patient care exceeds authorized financial or length-of-stay limits",
      ]}
    />
  );
};

export default AuthorizationManagement;
