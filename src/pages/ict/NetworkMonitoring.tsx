import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Radio, Activity, CheckCircle2, Shield } from "lucide-react";

export const NetworkMonitoring: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Network Infrastructure & Wi-Fi Telemetry"
      subtitle="Hospital backbone LAN, redundant fiber links, Wi-Fi 6 access points, VLAN segmentation and bandwidth utilization"
      department="ICT & Digital Health"
      badge="Network Operations"
      icon={Radio}
      tabs={[
        { key: "network-map", label: "Hospital Core Network Topology" },
        { key: "wifi-access-points", label: "Ward Access Points (34 APs)", count: "100% Online" },
        { key: "bandwidth-usage", label: "Bandwidth & QoS Traffic Graphs" },
        { key: "vlan-security", label: "VLAN Segmentation Isolation" },
      ]}
      metrics={[
        { title: "Network Backbone Uptime", value: "99.99%", icon: Radio, valueColor: "text-emerald-600" },
        { title: "Internet Bandwidth Active", value: "500 Mbps Dedicated", icon: Activity },
        { title: "Primary ISP Fiber Status", value: "Online (Low Latency)", icon: CheckCircle2 },
        { title: "VLAN Network Security", value: "Strict Isolation", icon: Shield },
      ]}
      capabilities={[
        "Quality of Service (QoS) prioritization for telemetry cardiac monitor feeds and PACS DICOM streaming",
        "VLAN security segmentation: Medical Devices VLAN, Clinical EMR VLAN, Administration VLAN, Public Guest Wi-Fi",
        "Automatic dual-WAN failover between primary fiber and backup microwave link",
      ]}
    />
  );
};

export default NetworkMonitoring;
