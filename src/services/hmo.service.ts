import type { Hmo } from "../types/hmo";
import api from "./api";

export type HmoOption = Pick<Hmo, "id" | "name">;

export const hmoService = {
  async getHmos(): Promise<HmoOption[]> {
    const response = await api.get("/hmos");
    const payload: unknown = response.data;

    if (Array.isArray(payload)) {
      return payload as HmoOption[];
    }

    if (payload && typeof payload === "object") {
      const envelope = payload as { data?: unknown; hmos?: unknown };
      const hmos = envelope.hmos ?? envelope.data;

      if (Array.isArray(hmos)) {
        return hmos as HmoOption[];
      }
    }

    throw new Error("Unexpected HMOs response: expected an array");
  },
};