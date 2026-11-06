import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Radio, CalendarDays, CheckCircle2, Clock } from "lucide-react";

export const RadiologyImaging: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Radiology & Medical Imaging"
      subtitle="X-Ray, Ultrasound, CT Scan, MRI scan requests, PACS DICOM integration and radiologist reporting"
      department="Pharmacy & Diagnostics"
      badge="Imaging & PACS"
      icon={Radio}
      tabs={[
        { key: "worklist", label: "Imaging Worklist (Queue)", count: 18 },
        { key: "reporting-queue", label: "Awaiting Radiologist Report", count: 7 },
        { key: "completed-scans", label: "Signed Off Studies Today", count: 28 },
        { key: "modality-rooms", label: "Modalities (CT, MRI, X-Ray, US)" },
      ]}
      metrics={[
        { title: "Imaging Studies Today", value: "36 Scans", icon: Radio },
        { title: "Critical Findings Alerted", value: "2 Red Flags", icon: Clock, valueColor: "text-rose-500" },
        { title: "PACS Cloud DICOM Status", value: "Online (100%)", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Avg Report Turnaround", value: "45 Minutes", icon: CalendarDays },
      ]}
      capabilities={[
        "Integration with DICOM viewers allowing clinicians to view high-resolution radiology scans directly in patient chart",
        "Structured radiology reporting templates for Chest X-Ray, Brain CT, Abdominal Ultrasound and Musculoskeletal MRI",
        "Critical emergency finding urgent callback trigger notifying the ordering clinician immediately",
      ]}
    />
  );
};

export default RadiologyImaging;
