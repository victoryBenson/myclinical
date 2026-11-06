import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Building2, Clock, CheckCircle2, BedDouble } from "lucide-react";

export const OperationalAnalytics: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Operational Analytics & Capacity Utilization"
      subtitle="Bed turnover interval, average outpatient wait times, operating room utilization and ambulance response times"
      department="Reports & Analytics"
      badge="Capacity & Operations"
      icon={Building2}
      tabs={[
        { key: "bed-turnover", label: "Bed Turnover Interval (BTI)" },
        { key: "or-utilization", label: "Operating Theatre Block Utilization" },
        { key: "wait-times", label: "Clinic Wait-Time Bottlenecks" },
        { key: "equipment-uptime", label: "Biomedical Equipment Availability" },
      ]}
      metrics={[
        { title: "Average Bed Turnover Interval", value: "4.2 Hours", icon: BedDouble, valueColor: "text-emerald-600" },
        { title: "Theatre Utilization Rate", value: "86.4% of Block", icon: Building2 },
        { title: "OPD Average Wait Time", value: "22 Minutes", icon: Clock },
        { title: "Critical Equipment Uptime", value: "99.2%", icon: CheckCircle2 },
      ]}
      capabilities={[
        "Barber-Johnson hospital capacity diagram plotting bed occupancy rate against average length of stay",
        "Operating theatre downtime and changeover interval tracking between consecutive surgeries",
        "Bottleneck identification across registration, vitals, consultation, pharmacy, and cashier queues",
      ]}
    />
  );
};

export default OperationalAnalytics;
