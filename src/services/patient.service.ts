import type { Patient } from "../types/patients";
import type { CreatePatientDto } from "../types/patients/createPatientDto";
import api from "./api";

interface GetPatientsParams {
  search?: string;
  hmoId?: number;
  is_out_patient?: boolean;
  startDate?: string;
  endDate?: string;
}

export const patientService = {
  async getPatients(
    params?: GetPatientsParams
  ): Promise<Patient[]> {
    try {
      const response = await api.get("/patients", { params} );

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
      console.log(error);
      throw error;
    }
  },

  createPatient: async (data: CreatePatientDto) => {
  const response = await api.post("/patients", data);
  return response.data;
}
};