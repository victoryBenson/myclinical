import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Lock, Shield, CheckCircle2, Layers } from "lucide-react";

export const PermissionManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Permission Management & Access Matrix"
      subtitle="Granular permissions matrix: View, Create, Edit, Approve, Delete, Export, Sign, and Override per module"
      department="System Administration"
      badge="Granular RBAC"
      icon={Lock}
      tabs={[
        { key: "rbac-matrix", label: "Module Permissions Matrix" },
        { key: "clinical-permissions", label: "EMR & Clinical Chart Rights" },
        { key: "financial-permissions", label: "Billing, Discount & Refund Rights" },
        { key: "override-logs", label: "Break-Glass & Privilege Overrides" },
      ]}
      metrics={[
        { title: "Granular Permission Nodes", value: "248 Permissions", icon: Lock },
        { title: "Protected Data Fields", value: "100% Encrypted", icon: Shield, valueColor: "text-emerald-600" },
        { title: "Active Module Gates", value: "All 13 Directorates", icon: Layers },
        { title: "Privilege Overrides (30d)", value: "2 Authorized (Logged)", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Interactive matrix interface for checking/unchecking permissions across roles and departments",
        "Clinical confidentiality gates: HIV, mental health, and sensitive test results viewable only by designated clinicians",
        "Financial approval limits: defines maximum discount or refund each cashier or billing manager can authorize",
      ]}
    />
  );
};

export default PermissionManagement;
