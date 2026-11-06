import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Database, Layers, CheckCircle2, Clock } from "lucide-react";

export const DataManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Data Management & Archiving"
      subtitle="Database partitioning, long-term historical medical record archiving, indexing optimization and storage tiering"
      department="ICT & Digital Health"
      badge="Data Warehouse"
      icon={Database}
      tabs={[
        { key: "database-stats", label: "Database Volume & Tables" },
        { key: "archival-tiers", label: "Cold Storage Tiering (> 5 Years)" },
        { key: "retention-rules", label: "Statutory Data Retention Rules" },
        { key: "index-maintenance", label: "Query Index & Performance Stats" },
      ]}
      metrics={[
        { title: "Active Database Size", value: "248 GB Storage", icon: Database },
        { title: "Archived Patient Records", value: "1.2 Million Files", icon: Layers },
        { title: "Query Cache Hit Ratio", value: "99.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Retention Compliance", value: "10 Years Medical Rule", icon: Clock },
      ]}
      capabilities={[
        "Automatic tiering of patient encounters older than 5 years into cost-effective cold cloud storage",
        "Full-text search engine indexing allowing rapid retrieval across millions of historical patient notes",
        "Automated database index defragmentation and table vacuuming during off-peak night hours",
      ]}
    />
  );
};

export default DataManagement;
