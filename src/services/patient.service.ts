import type { Patient } from "../types/patients";
import type { CreatePatientDto } from "../types/patients/createPatientDto";
import api from "./api";

export interface GetPatientsParams {
  search?: string;
  hmoId?: number;
  is_out_patient?: boolean;
  startDate?: string;
  endDate?: string;
}

function unwrapPatientPayload(payload: unknown): Patient {
  if (payload && typeof payload === "object") {
    const envelope = payload as { data?: unknown; patient?: unknown };
    const patient = envelope.patient ?? envelope.data ?? payload;
    return patient as Patient;
  }
  return payload as Patient;
}

export const patientService = {
  async getPatients(
    params?: GetPatientsParams
  ): Promise<Patient[]> {
    try {
      const response = await api.get("/patients", { params });

      const payload: unknown = response.data;

      if (Array.isArray(payload)) {
        return payload as Patient[];
      }

      if (payload && typeof payload === "object") {
        const envelope = payload as { data?: unknown; patients?: unknown };
        const patients = envelope.patients ?? envelope.data;

        if (Array.isArray(patients)) {
          return patients as Patient[];
        }
      }

      throw new Error("Unexpected patients response: expected an array");
    } catch (error) {
      console.error("Error fetching patients:", error);
      throw error;
    }
  },

  async getPatient(id: number | string): Promise<Patient> {
    try {
      const response = await api.get(`/patients/${id}`);
      return unwrapPatientPayload(response.data);
    } catch (error) {
      console.error(`Error fetching patient ${id}:`, error);
      throw error;
    }
  },

  createPatient: async (data: CreatePatientDto): Promise<Patient> => {
    try {
      const response = await api.post("/patients", data);
      return unwrapPatientPayload(response.data);
    } catch (error) {
      console.error("Error creating patient:", error);
      throw error;
    }
  },

  updatePatient: async (
    id: number | string,
    data: Partial<CreatePatientDto>
  ): Promise<Patient> => {
    try {
      const response = await api.patch(`/patients/${id}`, data);
      return unwrapPatientPayload(response.data);
    } catch (error) {
      console.error(`Error updating patient ${id}:`, error);
      throw error;
    }
  },

  deletePatient: async (id: number | string): Promise<void> => {
    try {
      await api.delete(`/patients/${id}`);
    } catch (error) {
      console.error(`Error deleting patient ${id}:`, error);
      throw error;
    }
  },
};
