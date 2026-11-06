import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Users, FileSpreadsheet, MapPin, TrendingUp } from "lucide-react";

export const PatientStatistics: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Statistics & Demographics"
      subtitle="Epidemiological demographics, age-sex pyramids, geographic catchment distribution and repeat visit patterns"
      department="Reports & Analytics"
      badge="Demographic BI"
      icon={Users}
      tabs={[
        { key: "age-sex-pyramid", label: "Age & Sex Demographic Distribution" },
        { key: "geographic-catchment", label: "Geographic Catchment & Zones" },
        { key: "payer-demographics", label: "Payer Classification Breakdown" },
        { key: "new-vs-returning", label: "New Registrations vs Returning Visits" },
      ]}
      metrics={[
        { title: "Active Patient Base", value: "14,850 Patients", icon: Users },
        { title: "Repeat Visit Rate", value: "72.4%", icon: TrendingUp, valueColor: "text-emerald-600" },
        { title: "Primary Catchment Radius", value: "15 km Radius", icon: MapPin },
        { title: "NHMIS Statutory Reports", value: "Compliant Export", icon: FileSpreadsheet },
      ]}
      capabilities={[
        "Interactive demographic mapping identifying healthcare catchment areas and underserved communities",
        "Age-stratified patient volume trends (Pediatrics, Adolescents, Adults, Geriatrics)",
        "Direct one-click export formatted for Ministry of Health DHIS2 data upload",
      ]}
    />
  );
};

export default PatientStatistics;
