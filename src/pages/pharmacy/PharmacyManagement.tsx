import React, { useState } from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Pill, Boxes, ClipboardList, ShoppingCart, Receipt, Truck } from "lucide-react";
import { NavLink } from "react-router-dom";

export const PharmacyManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("prescriptions");

  return (
    <HmisPlaceholderPage
      title="Pharmacy Management"
      subtitle="Central pharmaceutical operations: dispensing queue, formulary medications, store inventory and suppliers"
      department="Pharmacy & Diagnostics"
      badge="Formulary & Dispensing"
      icon={Pill}
      tabs={[
        { key: "prescriptions", label: "Prescriptions Queue", icon: ClipboardList, count: 24 },
        { key: "medications", label: "Formulary Drug List", icon: Pill, count: 480 },
        { key: "inventory", label: "Pharmacy Stock & Batches", icon: Boxes },
        { key: "orders", label: "Purchase Orders", icon: ShoppingCart },
        { key: "sales", label: "Outpatient Drug Sales", icon: Receipt },
        { key: "suppliers", label: "Pharma Suppliers", icon: Truck },
      ]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      metrics={[
        { title: "Prescriptions in Queue", value: "24 Pending", icon: ClipboardList, valueColor: "text-amber-500" },
        { title: "Formulary Items", value: "480 Active", icon: Pill },
        { title: "Dispensed Today", value: "186 Orders", icon: Receipt, valueColor: "text-emerald-600" },
        { title: "Low Stock Items", value: "8 Reorder Needed", icon: Boxes, valueColor: "text-rose-500" },
      ]}
      capabilities={[
        "Electronic prescription order verification with drug-drug interaction contraindication checks",
        "FEFO (First-Expiry-First-Out) batch number tracking with automatic barcode verification",
        "Direct point-of-sale receipting and patient insurance copay calculation",
      ]}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-slate-200/80 dark:border-gray-700 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-gray-700">
          <div>
            <h3 className="font-bold text-base text-slate-800 dark:text-white">
              Pharmacy Sub-Modules Quick Navigation
            </h3>
            <p className="text-xs text-slate-400">
              Access dedicated full-screen views for deep pharmaceutical management tasks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NavLink
            to="/pharmacy/prescriptions"
            className="p-4 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition bg-slate-50 dark:bg-slate-900/40 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300">
                <ClipboardList size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-800 dark:text-white group-hover:text-primary">
                  Prescriptions Queue
                </h4>
                <p className="text-[11px] text-slate-400">View & dispense patient scripts</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/pharmacy/medications"
            className="p-4 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition bg-slate-50 dark:bg-slate-900/40 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40">
                <Pill size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-800 dark:text-white group-hover:text-primary">
                  Formulary Medications
                </h4>
                <p className="text-[11px] text-slate-400">Drug master catalogue & prices</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/pharmacy/inventory"
            className="p-4 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition bg-slate-50 dark:bg-slate-900/40 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/40">
                <Boxes size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-800 dark:text-white group-hover:text-primary">
                  Pharmacy Stock Levels
                </h4>
                <p className="text-[11px] text-slate-400">Current store balance & batches</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/pharmacy/purchase-orders"
            className="p-4 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition bg-slate-50 dark:bg-slate-900/40 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950/40">
                <ShoppingCart size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-800 dark:text-white group-hover:text-primary">
                  Purchase Orders
                </h4>
                <p className="text-[11px] text-slate-400">Orders placed to drug vendors</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/pharmacy/sales"
            className="p-4 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition bg-slate-50 dark:bg-slate-900/40 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40">
                <Receipt size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-800 dark:text-white group-hover:text-primary">
                  Pharmacy Sales (POS)
                </h4>
                <p className="text-[11px] text-slate-400">Over-the-counter & billed sales</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/pharmacy/suppliers"
            className="p-4 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition bg-slate-50 dark:bg-slate-900/40 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950/40">
                <Truck size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-800 dark:text-white group-hover:text-primary">
                  Registered Suppliers
                </h4>
                <p className="text-[11px] text-slate-400">Pharmaceutical vendor directory</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </HmisPlaceholderPage>
  );
};

export default PharmacyManagement;
