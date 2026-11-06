import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { BedDouble, CheckCircle2, AlertTriangle, Layers } from "lucide-react";

export const BedOccupancy: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Bed Occupancy & Capacity"
      subtitle="Ward-by-ward bed census, ICU capacity, isolation rooms and admission readiness"
      department="Dashboard"
      badge="Live Ward Census"
      icon={BedDouble}
      tabs={[
        { key: "all-wards", label: "All Hospital Wards", count: "12 Wards" },
        { key: "icu-critical", label: "ICU & High Dependency", count: "12 Beds" },
        { key: "maternity-wards", label: "Maternity & Labour", count: "24 Beds" },
        { key: "paediatric-wards", label: "Paediatrics", count: "18 Beds" },
        { key: "isolation-units", label: "Negative Pressure / Isolation", count: "6 Beds" },
      ]}
      metrics={[
        { title: "Total Hospital Beds", value: "200", icon: BedDouble },
        { title: "Currently Occupied", value: "168 (84%)", icon: Layers, valueColor: "text-primary" },
        { title: "Available Beds", value: "32 Ready", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Reserved / In Cleaning", value: "8 Beds", icon: AlertTriangle, valueColor: "text-warning" },
      ]}
      capabilities={[
        "Real-time visual bed layout map with interactive patient assignment",
        "Automated bed cleaning and housekeeping turnaround alerts",
        "Direct link to Admission, Discharge & Transfer (ADT) events",
        "Isolation room ventilation pressure and infection control status indicators",
      ]}
      workflowStages={[
        { step: 1, title: "Bed Request", desc: "Clinician issues admission order from OPD or ER." },
        { step: 2, title: "Ward Allocation", desc: "Head Nurse confirms available bed in suitable specialty ward." },
        { step: 3, title: "Check-in & Vitals", desc: "Patient received into bed and digital admission file activated." },
      ]}
    />
  );
};

export default BedOccupancy;
