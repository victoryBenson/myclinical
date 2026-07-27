import React, { useEffect, useState } from "react";
import CreateOPDPatient from "./CreateOPDPatient";
import CreateNewPatient from "./CreateNewPatient";
import ActionButton from "../../utils/GlobalButtonStyles";


const CreatePatient: React.FC = () => {
  const [tab, setTab] = useState(()=> {
    return localStorage.getItem("create-patient-tab") || "new";
  });

  useEffect(() => {
    localStorage.setItem("create-patient-tab", tab);
  }, [tab]);

  const renderContent = ()=>{
    switch (tab) {
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
                {renderContent()}
            </div>
            

            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                <h3 className="font-semibold text-lg">
                    Quick Actions
                </h3>
                
                <ActionButton
                    active={tab === "new"}
                    onClick={() => setTab("new")}
                    >
                    Create New Patient
                </ActionButton>

                <ActionButton
                    active={tab === "opd"}
                    onClick={() => setTab("opd")}
                    >
                    Create OPD Patient
                </ActionButton>
                <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500">
                    💡 Tip:
                    </p>
                    <p className="text-sm text-gray-400">
                        Ensure patient information is accurate before submission to avoid duplicate records and registration delays.
                    </p>
                </div>
            </div>

        </div>

    </div>
  );
};

export default CreatePatient;