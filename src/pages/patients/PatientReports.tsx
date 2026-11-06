import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, Users, Activity, TrendingUp } from "lucide-react";

export const PatientReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Reports & Statistics"
      subtitle="Demographic distributions, clinic attendance census, retention rates and epidemiological records"
      department="Patient Management"
      badge="Census & Demographics"
      icon={FileSpreadsheet}
      tabs={[
        { key: "census", label: "Daily Clinic Census" },
        { key: "demographics", label: "Age, Gender & Geo Distribution" },
        { key: "payer-breakdown", label: "Private vs HMO vs Corporate" },
        { key: "retention", label: "Patient Follow-up & Retention" },
      ]}
      metrics={[
        { title: "Monthly Outpatient Visits", value: "3,840 Visits", icon: Users },
        { title: "Inpatient Admissions", value: "248 Admissions", icon: Activity },
        { title: "Average Daily Footfall", value: "142 Patients/Day", icon: TrendingUp },
        { title: "New Registrations (MTD)", value: "512 Patients", icon: FileSpreadsheet },
      ]}
      capabilities={[
        "Automated National Health Management Information System (NHMIS) statutory export tables",
        "Disaggregated age, sex, and geographic disease surveillance reporting",
        "Payer mix analytics comparing out-of-pocket, private insurance, and retainer accounts",
      ]}
    />
  );
};

export default PatientReports;
