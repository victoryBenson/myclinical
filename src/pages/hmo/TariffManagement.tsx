import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Sliders, Receipt, Layers, CheckCircle2 } from "lucide-react";

export const TariffManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Tariff & Price List Management"
      subtitle="HMO agreed fee schedules, procedure tariffs, drug formulary prices, co-pays and exclusions"
      department="HMO & Insurance"
      badge="Tariff Engine"
      icon={Sliders}
      tabs={[
        { key: "agreed-tariffs", label: "HMO Agreed Fee Schedules" },
        { key: "procedure-tariffs", label: "Surgical & Procedure Fees" },
        { key: "investigation-tariffs", label: "Lab & Radiology Rates" },
        { key: "copay-rules", label: "Co-Payment & Deductible Rules" },
      ]}
      metrics={[
        { title: "Configured Tariff Schedules", value: "32 Custom Lists", icon: Sliders },
        { title: "Standard Hospital Tariff", value: "Active Base", icon: Layers },
        { title: "Tariff Compliance Score", value: "99.8%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Last Updated Schedule", value: "AXA Mansard (Nov)", icon: Receipt },
      ]}
      capabilities={[
        "Automated rate selection during electronic clinical order entry based on active patient insurance policy",
        "Configurable fixed price vs discount percentage calculation models",
        "Version control for annual tariff adjustments with historical claim reproducibility",
      ]}
    />
  );
};

export default TariffManagement;
