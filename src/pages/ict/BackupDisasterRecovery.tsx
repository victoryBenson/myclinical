import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Server, Database, CheckCircle2, Clock } from "lucide-react";

export const BackupDisasterRecovery: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Backup & Disaster Recovery (BCP/DR)"
      subtitle="Automated database snapshots, immutable off-site backups, point-in-time recovery and disaster recovery test drills"
      department="ICT & Digital Health"
      badge="DR & Resiliency"
      icon={Server}
      tabs={[
        { key: "backup-schedule", label: "Automated Backup Schedule" },
        { key: "snapshots-archive", label: "Immutable Snapshots Archive", count: 48 },
        { key: "recovery-drills", label: "DR Simulation & Drill History" },
        { key: "rpo-rto-metrics", label: "RPO & RTO SLA Performance" },
      ]}
      metrics={[
        { title: "Last Database Backup", value: "18 Mins Ago", icon: Clock, valueColor: "text-emerald-600" },
        { title: "Backup Integrity Verification", value: "Checksum Validated", icon: CheckCircle2 },
        { title: "Recovery Point Objective (RPO)", value: "< 15 Minutes", icon: Database },
        { title: "Recovery Time Objective (RTO)", value: "< 30 Minutes", icon: Server },
      ]}
      capabilities={[
        "3-2-1 backup strategy: 3 copies, 2 different storage media types, 1 immutable offsite cloud copy",
        "Automated daily test restore spin-up in an isolated sandbox verifying zero data corruption",
        "One-click database failover orchestration to disaster recovery replica in secondary geographic region",
      ]}
    />
  );
};

export default BackupDisasterRecovery;
