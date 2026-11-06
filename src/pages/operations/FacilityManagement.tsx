import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, Wrench, Clock, CheckCircle2 } from "lucide-react";

export const FacilityManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Facility Management & Maintenance"
      subtitle="Building maintenance, HVAC climate control, plumbing, carpentry, electrical repairs and CAFM work orders"
      department="Operations & Facilities"
      badge="Estates CAFM"
      icon={Building2}
      tabs={[
        { key: "work-orders", label: "Active Maintenance Work Orders", count: 14 },
        { key: "hvac-control", label: "HVAC & Clean Room Pressure" },
        { key: "preventative-calendar", label: "Estates PPM Schedule" },
        { key: "vendor-tickets", label: "External Contractor Jobs", count: 3 },
      ]}
      metrics={[
        { title: "Open Work Orders", value: "14 Open", icon: Wrench, valueColor: "text-amber-500" },
        { title: "Resolved Today", value: "9 Completed", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Avg Repair Turnaround", value: "3.2 Hours", icon: Clock },
        { title: "HVAC Operating Level", value: "100% Calibrated", icon: Building2 },
      ]}
      capabilities={[
        "QR code equipment reporting: clinical staff scan a machine or door sticker to immediately lodge a maintenance ticket",
        "Operating theatre positive pressure and clean air HEPA filter pressure differential monitoring",
        "Contractor check-in and permit-to-work (PTW) safety authorization logs",
      ]}
    />
  );
};

export default FacilityManagement;
