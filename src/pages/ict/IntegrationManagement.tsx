import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Database, Radio, CheckCircle2, Clock } from "lucide-react";

export const IntegrationManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Integration Engine & Health Interoperability"
      subtitle="HL7 v2 / v3 interfaces, FHIR RESTful APIs, PACS DICOM endpoints, laboratory instrument connectivity and payment webhooks"
      department="ICT & Digital Health"
      badge="Interoperability Engine"
      icon={Database}
      tabs={[
        { key: "active-interfaces", label: "Active Integration Feeds", count: 8 },
        { key: "hl7-fhir", label: "HL7 / FHIR Message Queues", count: "Real-time" },
        { key: "lab-analyzers", label: "Laboratory Analyzer Connections", count: "6 Connected" },
        { key: "dicom-gateways", label: "DICOM PACS Modality Router" },
      ]}
      metrics={[
        { title: "Connected Health Gateways", value: "8 Active Engines", icon: Database },
        { title: "Messages Processed Today", value: "14,800 Messages", icon: Radio },
        { title: "Interface Uptime", value: "100%", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Avg Message Latency", value: "12 Milliseconds", icon: Clock },
      ]}
      capabilities={[
        "Bi-directional interface with automated haematology and biochemistry auto-analyzers (Sysmex, Mindray, Roche Cobas)",
        "FHIR (Fast Healthcare Interoperability Resources) endpoints allowing interoperable data exchange with external HMOs",
        "Dead-letter message queue with automated reprocessing for delayed integration payloads",
      ]}
    />
  );
};

export default IntegrationManagement;
