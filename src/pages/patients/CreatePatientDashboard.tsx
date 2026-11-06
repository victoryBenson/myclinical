import React, { useEffect, useState } from "react";
import CreateOPDPatient from "./CreateOPDPatient";
import CreateNewPatient from "./CreateNewPatient";
import QuickActionsCard from "../../utils/QuickActionCard";
import {
  UserAddOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import { UserPlus } from "lucide-react";
import { useTabActions } from "../../utils/useTabActions";

const CreatePatient: React.FC = () => {
  const [tab, setTab] = useState(() => {
    return localStorage.getItem("create-patient-tab") || "new";
  });
  const buildActions = useTabActions(tab, setTab);

  useEffect(() => {
    localStorage.setItem("create-patient-tab", tab);
  }, [tab]);

  const actions = buildActions([
    {
      key: "new",
      label: "Create In-Patient / General",
      icon: <UserAddOutlined />,
      primary: true,
    },
    {
      key: "opd",
      label: "Create OPD Fast-Track Patient",
      icon: <MedicineBoxOutlined />,
    },
  ]);

  const renderContent = () => {
    switch (tab) {
      case "new":
        return <CreateNewPatient />;
      case "opd":
        return <CreateOPDPatient />;
      default:
        return <CreateNewPatient />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Premium Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-5 lg:p-6 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary/10 px-2.5 py-0.5 rounded-full">
              Patient Management
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-xs font-semibold text-slate-500">
              Registration Form
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <UserPlus className="h-6 w-6 text-primary" />
            Patient Enrollment & Registration
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Create an official electronic medical record with demographic, insurance and emergency contact details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-6">
          {renderContent()}
        </div>
        <div className="xl:col-span-1 space-y-6">
          <QuickActionsCard
            title="Registration Modes"
            actions={actions}
            tipTitle="Medical Records Compliance"
            tipMessage="Ensure patient national identification (NIN), phone number and next-of-kin contacts are verified before finalizing registration."
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePatient;
