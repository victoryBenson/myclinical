import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, Zap, Wrench, Shield, CheckCircle2 } from "lucide-react";

export const OperationsOverview: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Hospital Operations & Facilities Overview"
      subtitle="Physical plant management, biomedical engineering, emergency generators, transport and hospital support services"
      department="Operations & Facilities"
      badge="Estates & Plant"
      icon={Building2}
      tabs={[
        { key: "work-orders", label: "Open Maintenance Work Orders", count: 14 },
        { key: "power-status", label: "Utility & Generator Telemetry" },
        { key: "biomedical-status", label: "Biomedical Equipment Readiness", count: "98.8%" },
        { key: "fleet-readiness", label: "Ambulance & Transport Fleet", count: "4 Ready" },
      ]}
      metrics={[
        { title: "Open Facility Work Orders", value: "14 Tickets", icon: Wrench, valueColor: "text-amber-500" },
        { title: "Hospital Power Uptime", value: "99.98% 24/7", icon: Zap, valueColor: "text-emerald-600" },
        { title: "Biomedical PPM Uptime", value: "98.8%", icon: CheckCircle2 },
        { title: "Campus Security Incidents", value: "0 Incidents", icon: Shield },
      ]}
      capabilities={[
        "24/7 computer-aided facility management (CAFM) work order ticketing and dispatch",
        "Continuous monitoring of hospital primary utilities (Public power grid, Diesel generators, Solar battery arrays, Water boreholes)",
        "Automated preventative maintenance (PPM) scheduling for all clinical diagnostic and life-support equipment",
      ]}
    />
  );
};

export default OperationsOverview;
