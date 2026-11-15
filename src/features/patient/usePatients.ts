import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  patientService,
  type GetPatientsParams,
} from "../../services/patient.service";
import { queryKeys } from "../../constants/queryKeys";
import { broadcastQueryInvalidation } from "../../app/queryClient";
import type { Patient } from "../../types/patients";
import type { CreatePatientDto } from "../../types/patients/createPatientDto";


export const usePatients = (params?: GetPatientsParams) => {
  return useQuery({
    queryKey: queryKeys.patients.list(params as Record<string, unknown>),
    queryFn: () => patientService.getPatients(params),
  });
};


export const usePatient = (id?: number | string | null) => {
  return useQuery({
    queryKey: queryKeys.patients.detail(id!),
    queryFn: () => patientService.getPatient(id!),
    enabled: Boolean(id),
  });
};


export const useCreatePatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePatientDto) => patientService.createPatient(data),
    onSuccess: (newPatient: Patient) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.patients.all });
      broadcastQueryInvalidation(queryKeys.patients.all);
      return newPatient;
    },
  });
};


export const useUpdatePatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number | string;
      data: Partial<CreatePatientDto>;
    }) => patientService.updatePatient(id, data),
    onSuccess: (updatedPatient: Patient, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.patients.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.patients.detail(variables.id),
      });
      broadcastQueryInvalidation(queryKeys.patients.all);
      return updatedPatient;
    },
  });
};


export const useDeletePatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) => patientService.deletePatient(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.patients.all });
      queryClient.removeQueries({
        queryKey: queryKeys.patients.detail(id),
      });
      broadcastQueryInvalidation(queryKeys.patients.all);
    },
  });
};
