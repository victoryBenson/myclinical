import type { Patient } from "../types/patients";
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
      const response = await api.get(
        "/patients",
        {
          params,
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};