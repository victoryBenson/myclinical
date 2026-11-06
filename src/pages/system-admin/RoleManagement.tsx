import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ShieldCheck, Users, Layers, CheckCircle2 } from "lucide-react";

export const RoleManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Role Management & Security Profiles"
      subtitle="Define clinical, financial, administrative, and nursing roles (Doctor, Specialist, Matron, Pharmacist, Cashier, Admin)"
      department="System Administration"
      badge="Security Profiles"
      icon={ShieldCheck}
      tabs={[
        { key: "system-roles", label: "Predefined Hospital Roles", count: 14 },
        { key: "custom-roles", label: "Custom Specialized Roles", count: 4 },
        { key: "role-assignments", label: "Staff-to-Role Mappings" },
        { key: "security-audit", label: "Role Segregation of Duties Audit" },
      ]}
      metrics={[
        { title: "Active Security Roles", value: "18 Roles", icon: ShieldCheck },
        { title: "Segregation of Duties", value: "Strict (SOD Pass)", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Clinical Roles Configured", value: "8 Roles", icon: Users },
        { title: "Admin & Financial Roles", value: "10 Roles", icon: Layers },
      ]}
      capabilities={[
        "Pre-built clinical templates: Consultant Physician, Resident Doctor, Ward Nurse, Pharmacist, Lab Technologist, HMO Officer, Cashier, Administrator",
        "Segregation of Duties (SOD) validation: prevents a user from having conflicting roles (e.g., Cashier cannot approve their own till balance)",
        "Role inheritance modeling allowing specialized roles to inherit baseline clinical rights",
      ]}
    />
  );
};

export default RoleManagement;
