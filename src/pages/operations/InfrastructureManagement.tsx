import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Layers, Building2, CheckCircle2, Shield } from "lucide-react";

export const InfrastructureManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Infrastructure & Campus Estates"
      subtitle="Hospital building fabric, structural integrity, elevators/lifts, roofing, drainage, medical gas pipelines and civil infrastructure"
      department="Operations & Facilities"
      badge="Campus Infrastructure"
      icon={Layers}
      tabs={[
        { key: "medical-gas", label: "Medical Gas Pipeline System (MGPS)", count: "100% OK" },
        { key: "elevators", label: "Lifts & Bed Elevators", count: "6 Active" },
        { key: "civil-works", label: "Civil & Structural Maintenance" },
        { key: "fire-protection", label: "Fire Hydrants & Sprinklers" },
      ]}
      metrics={[
        { title: "Medical Oxygen Bank Status", value: "Optimal (4.2 Bar)", icon: Layers, valueColor: "text-emerald-600" },
        { title: "Elevators in Service", value: "6/6 Operational", icon: Building2 },
        { title: "Fire Safety Readiness", value: "Certified 100%", icon: Shield },
        { title: "Planned Capital Upgrades", value: "2 Projects", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Continuous digital pressure monitoring for bulk medical oxygen (VIE), medical air, and surgical vacuum pipelines",
        "Elevator emergency call button and quarterly statutory safety inspection certificates",
        "Campus building floor plan mapping and space utilization analytics",
      ]}
    />
  );
};

export default InfrastructureManagement;
