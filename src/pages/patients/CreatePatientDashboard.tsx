import React, { useEffect, useState } from "react";
import CreateOPDPatient from "./CreateOPDPatient";
import CreateNewPatient from "./CreateNewPatient";
import ActionButton from "../../utils/GlobalButtonStyles";
import QuickActionsCard from "../../utils/QuickActionCard";
import {
  UserAddOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';
import { useTabActions } from "../../utils/useTabActions";


const CreatePatient: React.FC = () => {
  const [tab, setTab] = useState(()=> {
    return localStorage.getItem("create-patient-tab") || "new";
  });
const buildActions = useTabActions(tab, setTab);

  useEffect(() => {
    localStorage.setItem("create-patient-tab", tab);
  }, [tab]);

    const actions = buildActions([
        {
            key: 'new',
            label: 'Create New Patient',
            icon: <UserAddOutlined />,
            primary: true,
        },
        {
            key: 'opd',
            label: 'Create OPD Patient',
            icon: <MedicineBoxOutlined />,
        },
    ]);

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
           <div className="xl:col-span-1">
                <QuickActionsCard
                    title="Quick Actions"
                    actions={actions}
                    tipTitle="Patient Registration Tip"
                    tipMessage="Ensure patient information is accurate before submission to avoid duplicate records and registration delays."
                />
            </div>

        </div>

    </div>
  );
};

export default CreatePatient;