import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Car, Clock, CheckCircle2, Shield } from "lucide-react";

export const ParkingManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Hospital Parking & Traffic Logistics"
      subtitle="Campus car park bays, doctor reserved slots, emergency ambulance bay clearance and visitor ticket control"
      department="Operations & Facilities"
      badge="Traffic & Parking"
      icon={Car}
      tabs={[
        { key: "parking-occupancy", label: "Live Parking Occupancy", count: "142/180 Slots" },
        { key: "doctor-bays", label: "Consultant Reserved Bays", count: "32 Bays" },
        { key: "ambulance-bays", label: "ER Ambulance Red Zone Clearance", count: "100% Clear" },
        { key: "tariffs-tickets", label: "Visitor Parking Ticket Logs" },
      ]}
      metrics={[
        { title: "Total Parking Capacity", value: "180 Bays", icon: Car },
        { title: "Available Visitor Slots", value: "38 Bays", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Ambulance Access Bay", value: "Strictly Clear", icon: Shield },
        { title: "Avg Parking Duration", value: "1.4 Hours", icon: Clock },
      ]}
      capabilities={[
        "License Plate Recognition (ANPR) camera barriers for fast staff and doctor entry",
        "Continuous automated sensor detection preventing unauthorized parking in emergency ambulance clearance zones",
        "Automated visitor hourly parking ticket calculation with cashless POS and mobile payment options",
      ]}
    />
  );
};

export default ParkingManagement;
