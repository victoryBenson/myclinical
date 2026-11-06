import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { TrendingUp, Award, CheckCircle2, Clock } from "lucide-react";

export const HospitalPerformance: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Hospital Performance & Institutional Throughput"
      subtitle="Strategic performance benchmarks, patient throughput efficiency, departmental productivity and institutional targets"
      department="Reports & Analytics"
      badge="Hospital Performance"
      icon={TrendingUp}
      tabs={[
        { key: "throughput-metrics", label: "Patient Throughput & Velocity" },
        { key: "department-targets", label: "Department Target Achievement" },
        { key: "efficiency-index", label: "Operating Efficiency Index" },
        { key: "benchmarks", label: "National & Regional Benchmarks" },
      ]}
      metrics={[
        { title: "Institutional Productivity", value: "94.8%", icon: TrendingUp, valueColor: "text-emerald-600" },
        { title: "Targets Met (Q4)", value: "18 / 20 Targets", icon: CheckCircle2 },
        { title: "Avg Patient Journey", value: "68 Mins (Door-to-Drug)", icon: Clock },
        { title: "National Hospital Ranking", value: "Top 5% Tier", icon: Award },
      ]}
      capabilities={[
        "Departmental throughput analysis measuring time intervals from arrival -> consultation -> investigation -> discharge",
        "Quarterly target tracking across clinical volumes, surgical procedures, and revenue metrics",
        "Benchmarking against peer private and teaching hospital performance indices",
      ]}
    />
  );
};

export default HospitalPerformance;
