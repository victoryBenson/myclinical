import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Droplets, CheckCircle2, ShieldCheck, AlertTriangle } from "lucide-react";

export const WaterEnvironment: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Water & Environmental Sanitation"
      subtitle="Borehole filtration plant, reverse osmosis for dialysis, water quality testing, sewage treatment and pest control"
      department="Operations & Facilities"
      badge="Water & Sanitation"
      icon={Droplets}
      tabs={[
        { key: "water-levels", label: "Treated Water Storage Levels", count: "92% Full" },
        { key: "ro-plant", label: "Reverse Osmosis (Dialysis Water)", count: "TDS 8 ppm" },
        { key: "water-testing", label: "Microbial & Chemical Water Tests" },
        { key: "pest-control", label: "Campus Pest Control Logs" },
      ]}
      metrics={[
        { title: "Treated Water Reserves", value: "80,000 Liters", icon: Droplets, valueColor: "text-emerald-600" },
        { title: "Dialysis RO Water Purity", value: "AAMI Grade (Pass)", icon: ShieldCheck },
        { title: "Daily Water Consumption", value: "24,000 Liters/Day", icon: CheckCircle2 },
        { title: "Microbial Coliform Count", value: "0 CFU (Sterile)", icon: AlertTriangle },
      ]}
      capabilities={[
        "Continuous automated Total Dissolved Solids (TDS) and pH monitoring for Haemodialysis Reverse Osmosis water",
        "Overhead storage tank automatic refill pumps with dry-run protection sensors",
        "Monthly environmental microbiological swab testing of hospital water distribution lines",
      ]}
    />
  );
};

export default WaterEnvironment;
