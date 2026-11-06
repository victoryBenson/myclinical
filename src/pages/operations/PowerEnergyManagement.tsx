import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Zap, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

export const PowerEnergyManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Power & Energy Plant Management"
      subtitle="Utility power grid, heavy-duty diesel generators, solar inverters, automatic transfer switches (ATS) and fuel reserves"
      department="Operations & Facilities"
      badge="Energy & Power Plant"
      icon={Zap}
      tabs={[
        { key: "power-telemetry", label: "Live Power Grid & Generation" },
        { key: "generators", label: "Diesel Generators (Gen 1 - 3)", count: "3 Online" },
        { key: "diesel-storage", label: "Fuel Tank Levels (18,000L)", count: "82% Full" },
        { key: "solar-inverters", label: "Solar PV & Battery Bank", count: "120 kW" },
      ]}
      metrics={[
        { title: "Active Power Source", value: "Utility Grid (Primary)", icon: Zap, valueColor: "text-emerald-600" },
        { title: "Diesel Reserves", value: "14,800 Liters (82%)", icon: CheckCircle2 },
        { title: "ATS Switch Time", value: "< 8 Seconds", icon: Clock },
        { title: "Generator Runtime (Month)", value: "48 Hours", icon: AlertTriangle },
      ]}
      capabilities={[
        "Automatic Transfer Switch (ATS) sub-second telemetry ensuring zero disruption to critical life-support theatre circuits",
        "Ultrasonic diesel storage level sensors with automated low-fuel reorder triggers",
        "Carbon footprint and energy consumption analytics by hospital building block",
      ]}
    />
  );
};

export default PowerEnergyManagement;
