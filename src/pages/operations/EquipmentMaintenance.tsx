import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Settings2, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export const EquipmentMaintenance: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Equipment Maintenance & Servicing"
      subtitle="Scheduled periodic preventative maintenance (PPM), corrective repairs, service contracts and downtime logs"
      department="Operations & Facilities"
      badge="PPM Servicing"
      icon={Settings2}
      tabs={[
        { key: "ppm-calendar", label: "PPM Service Schedule", count: 18 },
        { key: "corrective-repairs", label: "Corrective Service Jobs", count: 4 },
        { key: "spare-parts", label: "Maintenance Spares Inventory" },
        { key: "downtime-history", label: "Equipment Downtime Analytics" },
      ]}
      metrics={[
        { title: "PPM Schedule Adherence", value: "98.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Jobs Under Repair", value: "4 Equipment", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Mean Time to Repair (MTTR)", value: "2.8 Hours", icon: Clock },
        { title: "Active Maintenance Contracts", value: "18 AMCs", icon: Settings2 },
      ]}
      capabilities={[
        "Automatic generation of preventative maintenance work tickets based on runtime hours or calendar intervals",
        "Spare parts inventory reservation preventing service delays",
        "Mean Time Between Failures (MTBF) and Mean Time To Repair (MTTR) reliability analytics",
      ]}
    />
  );
};

export default EquipmentMaintenance;
