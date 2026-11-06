import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSpreadsheet, Building2, Calendar, CheckCircle2 } from "lucide-react";

export const DepartmentalReports: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Departmental Operational Reports"
      subtitle="Standardized monthly operational report generation for clinical units, pharmacy, lab, nursing and support services"
      department="Reports & Analytics"
      badge="Departmental Reports"
      icon={FileSpreadsheet}
      tabs={[
        { key: "generate-report", label: "Report Generation Console" },
        { key: "clinical-reports", label: "Clinical & Specialty Reports", count: 18 },
        { key: "diagnostic-reports", label: "Pharmacy, Lab & Radiology Reports", count: 8 },
        { key: "support-reports", label: "Operations, Admin & HR Reports", count: 12 },
      ]}
      metrics={[
        { title: "Standard Report Templates", value: "38 Reports", icon: FileSpreadsheet },
        { title: "Department Units Covered", value: "All 13 Directorates", icon: Building2 },
        { title: "Automated Monthly Runs", value: "Active (1st of Month)", icon: Calendar },
        { title: "Report Export Formats", value: "PDF, Excel, CSV", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Automated compilation of departmental monthly activity statements ready for HOD review and sign-off",
        "Granular parameter filtering by date range, consulting doctor, ward location, and ICD-10 category",
        "Scheduled automated delivery of department reports to HOD email inboxes",
      ]}
    />
  );
};

export default DepartmentalReports;
