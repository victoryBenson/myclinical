import { create } from "zustand";
import type { Patient } from "../types/patients";


export interface PatientUiState {
  selectedPatient: Patient | null;
  activeTab: string;
  filtersVisible: boolean;
  isProfileOpen: boolean;
  isOpdProfileOpen: boolean;

  setSelectedPatient: (patient: Patient | null) => void;
  setActiveTab: (tab: string) => void;
  setFiltersVisible: (visible: boolean) => void;
  toggleFilters: () => void;
  setIsProfileOpen: (open: boolean) => void;
  setIsOpdProfileOpen: (open: boolean) => void;
  resetUiState: () => void;
}

export const usePatientUiStore = create<PatientUiState>((set) => ({
  selectedPatient: null,
  activeTab: "all",
  filtersVisible: true,
  isProfileOpen: false,
  isOpdProfileOpen: false,

  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  setActiveTab: (activeTab) => set({ activeTab }),
  setFiltersVisible: (filtersVisible) => set({ filtersVisible }),
  toggleFilters: () => set((state) => ({ filtersVisible: !state.filtersVisible })),
  setIsProfileOpen: (isProfileOpen) => set({ isProfileOpen }),
  setIsOpdProfileOpen: (isOpdProfileOpen) => set({ isOpdProfileOpen }),
  resetUiState: () =>
    set({
      selectedPatient: null,
      activeTab: "all",
      filtersVisible: true,
      isProfileOpen: false,
      isOpdProfileOpen: false,
    }),
}));

/**
 * Backward compatibility alias for the patient UI store.
 * @deprecated Prefer `usePatientUiStore` for client UI state or `usePatients` / `useCreatePatient` for server state.
 */
export const usePatientStore = usePatientUiStore;
