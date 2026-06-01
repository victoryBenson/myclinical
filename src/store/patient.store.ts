import { create } from "zustand";
import { patientService } from "../services/patient.service";
import type { CreatePatientDto } from "../types/patients/createPatientDto";
import type { Patient } from "../types/patients/fetchPatientDto";

interface PatientStore {
  patients: Patient[];

  loading: boolean;

  error: string | null;

  fetchPatients: () => Promise<void>;
  createPatient: (data: CreatePatientDto) => Promise<void>;
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
    createPatient: async (data: CreatePatientDto) => {
      try {
        set({
          loading: true,
          error: null,
        });

        const newPatient = await patientService.createPatient(data);

        set((state) => ({
          patients: [...state.patients, newPatient],
          loading: false,
        }));
      } catch (error) {
        set({
          error: "Failed to create patient",
          loading: false,
        });
        throw error;
        console.log(error); 
      }
    },
  })
);