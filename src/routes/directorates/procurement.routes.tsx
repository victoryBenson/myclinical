import { lazy } from "react";
import { Route } from "react-router-dom";

const ProcurementOverview = lazy(() => import("../../pages/procurement/ProcurementOverview"));
const PurchaseRequisitions = lazy(() => import("../../pages/procurement/PurchaseRequisitions"));
const PurchaseOrders = lazy(() => import("../../pages/procurement/PurchaseOrders"));
const SupplierVendorManagement = lazy(() => import("../../pages/procurement/SupplierVendorManagement"));
const TenderContractManagement = lazy(() => import("../../pages/procurement/TenderContractManagement"));
const GoodsReceivedNotes = lazy(() => import("../../pages/procurement/GoodsReceivedNotes"));
const ProcurementInventory = lazy(() => import("../../pages/procurement/ProcurementInventory"));
const StoreManagement = lazy(() => import("../../pages/procurement/StoreManagement"));
const StockTransfers = lazy(() => import("../../pages/procurement/StockTransfers"));
const StockReconciliation = lazy(() => import("../../pages/procurement/StockReconciliation"));
const ExpiryBatchTracking = lazy(() => import("../../pages/procurement/ExpiryBatchTracking"));
const MedicalConsumables = lazy(() => import("../../pages/procurement/MedicalConsumables"));
const PharmaceuticalStock = lazy(() => import("../../pages/procurement/PharmaceuticalStock"));
const AssetManagement = lazy(() => import("../../pages/procurement/AssetManagement"));
const ProcurementReports = lazy(() => import("../../pages/procurement/ProcurementReports"));

export const procurementRoutes = (
  <>
    <Route path="/procurement" element={<ProcurementOverview />} />
    <Route path="/procurement/overview" element={<ProcurementOverview />} />
    <Route path="/procurement/requisitions" element={<PurchaseRequisitions />} />
    <Route path="/procurement/purchase-orders" element={<PurchaseOrders />} />
    <Route path="/procurement/suppliers" element={<SupplierVendorManagement />} />
    <Route path="/procurement/contracts" element={<TenderContractManagement />} />
    <Route path="/procurement/grn" element={<GoodsReceivedNotes />} />
    <Route path="/procurement/inventory" element={<ProcurementInventory />} />
    <Route path="/products" element={<ProcurementInventory />} />
    <Route path="/procurement/stores" element={<StoreManagement />} />
    <Route path="/procurement/stock-transfers" element={<StockTransfers />} />
    <Route path="/procurement/stock-reconciliation" element={<StockReconciliation />} />
    <Route path="/stock-logs" element={<StockReconciliation />} />
    <Route path="/procurement/expiry-tracking" element={<ExpiryBatchTracking />} />
    <Route path="/procurement/consumables" element={<MedicalConsumables />} />
    <Route path="/procurement/pharmaceutical-stock" element={<PharmaceuticalStock />} />
    <Route path="/procurement/assets" element={<AssetManagement />} />
    <Route path="/procurement/reports" element={<ProcurementReports />} />
  </>
);
