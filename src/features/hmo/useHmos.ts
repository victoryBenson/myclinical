import { useQuery } from "@tanstack/react-query";
import { hmoService } from "../../services/hmo.service";

export const useHmos = () =>
  useQuery({
    queryKey: ["hmos"],
    queryFn: hmoService.getHmos,
  });