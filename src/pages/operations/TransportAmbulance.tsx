import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Car, Clock, CheckCircle2, ShieldAlert } from "lucide-react";

export const TransportAmbulance: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Transport & Ambulance Fleet Management"
      subtitle="Emergency ambulance dispatch, paramedic readiness, hospital shuttle vehicles, fuel monitoring and trip logs"
      department="Operations & Facilities"
      badge="Ambulance Fleet"
      icon={Car}
      tabs={[
        { key: "ambulance-status", label: "Ambulance Units (Amb 1 - 4)", count: "4 Ready" },
        { key: "active-dispatches", label: "Active Emergency Dispatches", count: 1 },
        { key: "fleet-schedule", label: "Hospital Transport & Shuttles" },
        { key: "maintenance-fuel", label: "Fuel Logs & Vehicle PPM" },
      ]}
      metrics={[
        { title: "Ambulance Fleet Readiness", value: "4/4 Advanced Life Support", icon: Car, valueColor: "text-emerald-600" },
        { title: "Avg Dispatch Activation", value: "2.4 Minutes", icon: Clock },
        { title: "Emergency Dispatches (24h)", value: "6 Missions", icon: ShieldAlert },
        { title: "On-board Equipment Checked", value: "100% Ready", icon: CheckCircle2 },
      ]}
      capabilities={[
        "GPS real-time vehicle tracking with integrated traffic avoidance routing",
        "On-board emergency equipment check: Defibrillators, mobile oxygen, suction units and resuscitation drugs",
        "Pre-hospital telemetry transmission from ambulance direct to Emergency department triage before arrival",
      ]}
    />
  );
};

export default TransportAmbulance;
