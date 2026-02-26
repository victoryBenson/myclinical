import type { LabRequest, LabResult } from "../types/lab.types";

export const mockRequests: LabRequest[] = [
  {
    id: 1,
    patientName: "Jane Doe",
    testName: "Full Blood Count",
    status: "processing",
    priority: "urgent",
    date: "24 Feb 2026",
    technician: "Dr. Smith",
    technicianId: 101,
  },
  {
    id: 2,
    patientName: "John Smith",
    testName: "Malaria Test",
    status: "waiting",
    priority: "normal",
    date: "23 Feb 2026",
    technician: "Dr. Johnson",
    technicianId: 102,
  },
];


export const mockResults: LabResult[] = [
  {
    id: 1,
    requestId: 101,
    patientName: "John Doe",
    testName: "CBC",
    technician: "Jane Smith",
    status: "pending",
    resultSummary: "WBC slightly elevated",
    completedAt: "2026-02-20",
  },
  {
    id: 2,
    requestId: 102,
    patientName: "Alice Brown",
    testName: "Malaria",
    technician: "John Doe",
    status: "verified",
    resultSummary: "Negative",
    completedAt: "2026-02-21",
  },
];