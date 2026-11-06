import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, Layers, CheckCircle2, BedDouble } from "lucide-react";

export const DepartmentConfig: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Department & Clinical Ward Configuration"
      subtitle="Configure clinical directorates, specialty clinics, consultation suites, wards, theatre suites and cost centers"
      department="System Administration"
      badge="Structure & Wards"
      icon={Building2}
      tabs={[
        { key: "directorates", label: "Hospital Directorates", count: 13 },
        { key: "clinical-units", label: "Specialty Clinics & Units", count: 24 },
        { key: "inpatient-wards", label: "Wards & Bed Allocations", count: 12 },
        { key: "cost-centers", label: "Department Cost Centers" },
      ]}
      metrics={[
        { title: "Configured Directorates", value: "13 Directorates", icon: Building2 },
        { title: "Clinical Clinics / Units", value: "24 Units", icon: Layers },
        { title: "Wards & Bed Capacity", value: "12 Wards (200 Beds)", icon: BedDouble },
        { title: "Configuration Status", value: "Active & Synchronized", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Add, rename, or reorganize hospital wards, rooms, and consultation suites with zero downtime",
        "Configure specialty clinic days, max booking quotas, and attending physician assignment pools",
        "Link clinical departments to finance chart-of-accounts cost centers for automated expense and revenue tracking",
      ]}
    />
  );
};

export default DepartmentConfig;
