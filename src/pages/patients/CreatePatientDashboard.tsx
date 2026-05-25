import React, { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import toast from "react-hot-toast";
import CreateOPDPatient from "./CreateOPDPatient";
import CreateNewPatient from "./CreateNewPatient";

type Priority = "normal" | "urgent";

interface LabFormData {
  patient: string;
  test: string;
  priority: Priority;
  notes: string;
}

const CreatePatient: React.FC = () => {
  const [tabs, setTabs] = useState('new')



  const renderContent = ()=>{
    switch (tabs) {
        case "new":
            return <CreateNewPatient />
            break;
        case "opd":
            return <CreateOPDPatient />
            break;
        default:
            break;
    }
  };

  return (
    <div className="p-6 space-y-6">

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-6">
                {/* <h3 className="font-semibold text-lg pb-3">
                     {tabs === "new" ? "Create New Patient" : "Create OPD Patient"}
                </h3> */}
                {renderContent()}
            </div>

            {/*  QUICK ACTIONS  */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">

            <h3 className="font-semibold text-lg">
                Quick Actions
            </h3>

            <button className={`w-full py-2 rounded-lg transition ${tabs === "new" ? "bg-[#2EB62C] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`} onClick={()=>setTabs("new")}>
                Create New Patient
            </button>

            <button className={`w-full py-2 rounded-lg transition ${tabs === "opd" ? "bg-[#2EB62C] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`} onClick={()=>setTabs("opd")}>
                Create OPD Patient
            </button>

            <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">
                💡 Tip:
                </p>
                <p className="text-sm text-gray-400">
                Urgent requests are prioritized automatically in the lab queue.
                </p>
            </div>

            </div>

        </div>

    </div>
  );
};

export default CreatePatient;