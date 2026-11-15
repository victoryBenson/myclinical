import type { Hmo } from "../types/hmo";
import api from "./api";

export type HmoOption = Pick<Hmo, "id" | "name">;

function unwrapHmoPayload(payload: unknown): Hmo {
  if (payload && typeof payload === "object") {
    const envelope = payload as { data?: unknown; hmo?: unknown };
    const hmo = envelope.hmo ?? envelope.data ?? payload;
    return hmo as Hmo;
  }
  return payload as Hmo;
}

export const hmoService = {
  async getHmos(): Promise<HmoOption[]> {
    try {
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
    } catch (error) {
      console.error("Error fetching HMOs:", error);
      throw error;
    }
  },

  async getHmo(id: number | string): Promise<Hmo> {
    try {
      const response = await api.get(`/hmos/${id}`);
      return unwrapHmoPayload(response.data);
    } catch (error) {
      console.error(`Error fetching HMO ${id}:`, error);
      throw error;
    }
  },
};
