import { lazy } from "react";
import { Route } from "react-router-dom";

const OperationsOverview = lazy(() => import("../../pages/operations/OperationsOverview"));
const FacilityManagement = lazy(() => import("../../pages/operations/FacilityManagement"));
const BiomedicalEngineering = lazy(() => import("../../pages/operations/BiomedicalEngineering"));
const EquipmentMaintenance = lazy(() => import("../../pages/operations/EquipmentMaintenance"));
const InfrastructureManagement = lazy(() => import("../../pages/operations/InfrastructureManagement"));
const PowerEnergyManagement = lazy(() => import("../../pages/operations/PowerEnergyManagement"));
const WaterEnvironment = lazy(() => import("../../pages/operations/WaterEnvironment"));
const HousekeepingManagement = lazy(() => import("../../pages/operations/HousekeepingManagement"));
const LaundryManagement = lazy(() => import("../../pages/operations/LaundryManagement"));
const SecurityManagement = lazy(() => import("../../pages/operations/SecurityManagement"));
const TransportAmbulance = lazy(() => import("../../pages/operations/TransportAmbulance"));
const CateringCafeteria = lazy(() => import("../../pages/operations/CateringCafeteria"));
const WasteManagement = lazy(() => import("../../pages/operations/WasteManagement"));
const ParkingManagement = lazy(() => import("../../pages/operations/ParkingManagement"));

export const operationsRoutes = (
  <>
    <Route path="/operations" element={<OperationsOverview />} />
    <Route path="/operations/overview" element={<OperationsOverview />} />
    <Route path="/operations/facilities" element={<FacilityManagement />} />
    <Route path="/operations/biomedical" element={<BiomedicalEngineering />} />
    <Route path="/operations/equipment" element={<EquipmentMaintenance />} />
    <Route path="/operations/infrastructure" element={<InfrastructureManagement />} />
    <Route path="/operations/power-energy" element={<PowerEnergyManagement />} />
    <Route path="/operations/water-environment" element={<WaterEnvironment />} />
    <Route path="/operations/housekeeping" element={<HousekeepingManagement />} />
    <Route path="/operations/laundry" element={<LaundryManagement />} />
    <Route path="/operations/security" element={<SecurityManagement />} />
    <Route path="/operations/ambulance" element={<TransportAmbulance />} />
    <Route path="/operations/catering" element={<CateringCafeteria />} />
    <Route path="/operations/waste" element={<WasteManagement />} />
    <Route path="/operations/parking" element={<ParkingManagement />} />
  </>
);
