import { useQuery } from "@tanstack/react-query";
import { hmoService } from "../../services/hmo.service";
import { queryKeys } from "../../constants/queryKeys";

export const useHmos = () =>
  useQuery({
    queryKey: queryKeys.hmos.all,
    queryFn: hmoService.getHmos,
    staleTime: 1000 * 60 * 5,
  });

export const useHmo = (id?: number | string | null) =>
  useQuery({
    queryKey: queryKeys.hmos.detail(id!),
    queryFn: () => hmoService.getHmo(id!),
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 5,
  });
