import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Layers, CheckCircle2, Shield, AlertTriangle } from "lucide-react";

export const ItAssetManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="IT Asset & Hardware Management"
      subtitle="Clinical PC workstations, nursing tablets, barcode wristband printers, biometric scanners and networking racks"
      department="ICT & Digital Health"
      badge="IT Assets"
      icon={Layers}
      tabs={[
        { key: "workstations", label: "Workstations & All-in-One PCs", count: 210 },
        { key: "clinical-tablets", label: "Ward Mobile Tablets", count: 84 },
        { key: "barcode-printers", label: "Label & Wristband Printers", count: 48 },
        { key: "network-hardware", label: "Switches, Routers & Firewalls" },
      ]}
      metrics={[
        { title: "Managed IT Assets", value: "480 Devices", icon: Layers },
        { title: "Hardware Health Status", value: "99.2% Healthy", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Devices Under Repair", value: "4 Units", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Security Patch Compliance", value: "100% Up to Date", icon: Shield },
      ]}
      capabilities={[
        "Automated software inventory and patch management scanning across all hospital endpoints",
        "Asset assignment tracking by department, consulting suite, and staff user account",
        "Life cycle planning and hardware refresh schedules (3-year rolling upgrades)",
      ]}
    />
  );
};

export default ItAssetManagement;
