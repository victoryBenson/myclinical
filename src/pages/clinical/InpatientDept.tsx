import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { BedDouble, Stethoscope, Activity, FileText } from "lucide-react";

export const InpatientDept: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Inpatient Department (IPD)"
      subtitle="Ward patient rounds, daily clinical reviews, medication charts, fluid balance and nursing handovers"
      department="Clinical Services"
      badge="IPD Ward Care"
      icon={BedDouble}
      tabs={[
        { key: "admitted-patients", label: "Admitted Ward Patients", count: 168 },
        { key: "doctor-rounds", label: "Ward Rounds Status", count: "10/12 Wards" },
        { key: "clinical-notes", label: "Daily Clinical Reviews" },
        { key: "fluid-charts", label: "Fluid Intake & Output Charts" },
      ]}
      metrics={[
        { title: "Current Inpatients", value: "168 Beds", icon: BedDouble },
        { title: "Clinical Ward Rounds", value: "85% Done", icon: Stethoscope, valueColor: "text-emerald-600" },
        { title: "Stat / Urgent Orders", value: "6 Pending", icon: Activity, valueColor: "text-amber-500" },
        { title: "Expected Discharges", value: "14 Today", icon: FileText },
      ]}
      capabilities={[
        "Ward-based patient census with quick access to vital charts, fluid balances, and progress notes",
        "Multi-specialty round documentation and inter-disciplinary bedside reviews",
        "Real-time nurse call bell and critical lab value notifications delivered directly to ward tablets",
      ]}
    />
  );
};

export default InpatientDept;
