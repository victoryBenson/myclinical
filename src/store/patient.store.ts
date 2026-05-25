import { create } from "zustand";
import { patientService } from "../services/patient.service";
import type { Patient } from "../types/patients";

interface PatientStore {
  patients: Patient[];

  loading: boolean;

  error: string | null;

  fetchPatients: () => Promise<void>;
};

export const usePatientStore = create<PatientStore>(
  (set) => ({
    patients: [],

    loading: false,

    error: null,

    fetchPatients: async () => {
      try {
        set({
          loading: true,
          error: null,
        });

        const patients = await patientService.getPatients();

        set({
          patients,
          loading: false,
        });
      } catch (error) {
        set({
          error: "Failed to fetch patients",
          loading: false,
        });

        console.log(error);
      }
    },
  })
);