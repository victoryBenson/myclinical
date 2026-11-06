import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Activity, Server, Clock, AlertTriangle } from "lucide-react";

export const SystemMonitoring: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="System Monitoring & Health Telemetry"
      subtitle="Server CPU/RAM utilization, database connections, application latency, API response times and uptime alerts"
      department="ICT & Digital Health"
      badge="Live Telemetry"
      icon={Activity}
      tabs={[
        { key: "server-nodes", label: "Application & Database Cluster" },
        { key: "api-metrics", label: "API Response Times & Latency" },
        { key: "error-rate", label: "5xx / 4xx Error Rate Telemetry", count: "0.01%" },
        { key: "uptime-history", label: "365-Day Uptime Performance" },
      ]}
      metrics={[
        { title: "Average System Latency", value: "38 ms (Instant)", icon: Clock, valueColor: "text-emerald-600" },
        { title: "CPU Cluster Load", value: "24% (Healthy)", icon: Activity },
        { title: "RAM Memory Allocated", value: "32 GB / 64 GB (50%)", icon: Server },
        { title: "Active Database Connections", value: "42 / 200 Pool", icon: AlertTriangle },
      ]}
      capabilities={[
        "Real-time Grafana/Prometheus style telemetry graphs showing CPU, memory, disk I/O, and network ingress/egress",
        "Threshold-based PagerDuty and SMS alerts triggered if server memory exceeds 85% or latency exceeds 250ms",
        "Distributed tracing for complex multi-service queries pinpointing slow database joins",
      ]}
    />
  );
};

export default SystemMonitoring;
