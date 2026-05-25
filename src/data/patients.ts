import type { Medication, Prescription, PurchaseOrder, Supplier } from "../types/pharmacy";

export const patientStats = {
  totalAppointments: 85,
  checkedInPatients: 54,
  waitingPatients: 18,
  doctorsAvailable: 8,
  completedVisits: 41,
  emergencyCases: 3,
};

export const patientTrendData = [
  {
    id: 1,
    date: "2026-05-01",
    patients: 45,
    checkedIn: 38,
    completedVisits: 31,
    emergencyCases: 2,
    department: "General OPD",
  },
  {
    id: 2,
    date: "2026-05-02",
    patients: 52,
    checkedIn: 44,
    completedVisits: 39,
    emergencyCases: 1,
    department: "Cardiology",
  },
  {
    id: 3,
    date: "2026-05-03",
    patients: 61,
    checkedIn: 56,
    completedVisits: 48,
    emergencyCases: 3,
    department: "Pediatrics",
  },
  {
    id: 4,
    date: "2026-05-04",
    patients: 58,
    checkedIn: 50,
    completedVisits: 46,
    emergencyCases: 2,
    department: "ENT",
  },
  {
    id: 5,
    date: "2026-05-05",
    patients: 74,
    checkedIn: 69,
    completedVisits: 61,
    emergencyCases: 5,
    department: "Emergency",
  },
  {
    id: 6,
    date: "2026-05-06",
    patients: 66,
    checkedIn: 60,
    completedVisits: 54,
    emergencyCases: 2,
    department: "Orthopedics",
  },
  {
    id: 7,
    date: "2026-05-07",
    patients: 81,
    checkedIn: 75,
    completedVisits: 68,
    emergencyCases: 4,
    department: "General OPD",
  },
  {
    id: 8,
    date: "2026-05-08",
    patients: 76,
    checkedIn: 71,
    completedVisits: 64,
    emergencyCases: 3,
    department: "Neurology",
  },
  {
    id: 9,
    date: "2026-05-09",
    patients: 88,
    checkedIn: 82,
    completedVisits: 74,
    emergencyCases: 6,
    department: "Cardiology",
  },
];

export const appointmentStatusData = [
  { name: "Completed", count: 420 },
  { name: "Checked In", count: 110 },
  { name: "Waiting", count: 65 },
  { name: "Cancelled", count: 22 },
  { name: "No Show", count: 18 },
  { name: "Emergency", count: 9 },
];

export const tabDetails: Record<string, { title: string; subtitle: string }> = {
  'all': {
    title: "Patients",
    subtitle: "View and update patients details",
  },

  "new-patient": {
    title: "New Patient",
    subtitle: "Register and manage new patients",
  },

  'admitted-patient': {
    title: "Admitted Patients",
    subtitle: "View admitted patients records",
  },

  'opd-patient': {
    title: "OPD Patients",
    subtitle: "View OPD patients records",
  },
};