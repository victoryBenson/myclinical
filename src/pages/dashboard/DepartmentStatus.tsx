import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Layers, Activity, Users, CheckCircle2 } from "lucide-react";

export const DepartmentStatus: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Departmental Status"
      subtitle="Operational capacity, staff readiness and workload across all hospital divisions"
      department="Dashboard"
      badge="Hospital Units Overview"
      icon={Layers}
      tabs={[
        { key: "clinical-units", label: "Clinical & Inpatient Units" },
        { key: "diagnostic-units", label: "Pharmacy & Diagnostics" },
        { key: "support-units", label: "Operations & Facilities" },
      ]}
      metrics={[
        { title: "Total Operating Units", value: "24 Active", icon: Layers },
        { title: "Normal Operating", value: "21 Units", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "High Workload Alert", value: "3 Units (ER, ICU, Lab)", icon: Activity, valueColor: "text-amber-500" },
        { title: "Total On-Duty Headcount", value: "286 Staff", icon: Users },
      ]}
      capabilities={[
        "Cross-departmental operational telemetry and queue distribution",
        "Staff-to-patient ratio monitoring across all specialized hospital wards",
        "Instant notification of service interruptions or high patient volume",
      ]}
    />
  );
};

export default DepartmentStatus;
