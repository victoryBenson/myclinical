export const queryKeys = {
  patients: {
    all: ["patients"] as const,
    lists: () => [...queryKeys.patients.all, "list"] as const,
    list: (params?: Record<string, unknown>) =>
      params
        ? ([...queryKeys.patients.lists(), params] as const)
        : ([...queryKeys.patients.lists()] as const),
    details: () => [...queryKeys.patients.all, "detail"] as const,
    detail: (id: number | string) =>
      [...queryKeys.patients.details(), id] as const,
  },
  hmos: {
    all: ["hmos"] as const,
    lists: () => [...queryKeys.hmos.all, "list"] as const,
    list: (params?: Record<string, unknown>) =>
      params
        ? ([...queryKeys.hmos.lists(), params] as const)
        : ([...queryKeys.hmos.lists()] as const),
    details: () => [...queryKeys.hmos.all, "detail"] as const,
    detail: (id: number | string) =>
      [...queryKeys.hmos.details(), id] as const,
  },
} as const;

export type QueryKeys = typeof queryKeys;
