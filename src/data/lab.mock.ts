import type { LabReport, LabRequest, LabResult } from "../types/lab.types";

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
    notes: "",
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
    notes: "",
  },
];


export const mockReports: LabReport[] = [
  {
    id: "1",
    reportId: 1001,
    patientName: "John Doe",
    testName: "Complete Blood Count",
    status: "approved",
    issuedAt: "2026-02-20",
    createdAt: "2026-02-18",
    remarks: "All values within normal range",
  },
  {
    id: "2",
    reportId: 1002,
    patientName: "Mary Smith",
    testName: "Liver Function Test",
    status: "pending",
    issuedAt: "2026-02-22",
    createdAt: "2026-02-21",
    remarks: "Awaiting supervisor approval",
  },
  {
    id: "3",
    reportId: 1003,
    patientName: "David Johnson",
    testName: "Renal Profile",
    status: "rejected",
    issuedAt: "2026-02-23",
    createdAt: "2026-02-22",
    remarks: "Sample integrity compromised",
  },
];