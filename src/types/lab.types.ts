export type LabStatus = "waiting" | "processing" | "completed";

export type LabPriority = "normal" | "urgent" | "high" | "medium" | "low";


export interface LabRequest {
  id: number;
  patientName: string;
  testName: string;
  status: LabStatus;
  priority: LabPriority;
  date: string;
  technician: string;
  technicianId: number | null;
}

export type ResultStatus = "pending" | "verified" | "rejected";

export interface LabResult {
  id: number;
  requestId: number;
  patientName: string;
  testName: string;
  technician: string;
  status: ResultStatus;
  resultSummary: string;
  completedAt: string;
  notes: string;
}

export interface LabReport {
  id: string;
  reportId: number;
  patientName: string;
  testName: string;
  status: "pending" | "approved" | "rejected";
  issuedAt: string;
  createdAt: string;
  remarks?: string;
  pdfUrl?: string;
}