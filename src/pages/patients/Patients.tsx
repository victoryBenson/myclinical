import React, { useMemo, useState, useEffect } from "react";
import { Table, Tag, Button, Drawer, Tooltip, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import { Download, Eye } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
import { tabDetails } from "../../data/patients";
import { usePatientStore } from "../../store/patient.store";
import PatientProfileModal from "../../components/modal/patients/PatientProfile";
import PatientFilters from "../../components/Patients/PatientsFilter";
import CreatePatient from "./CreatePatientDashboard";
import toast from "react-hot-toast";
import type { Patient } from "../../types/patients";
import OpdPatientProfile from "../../components/modal/patients/OpdPatientProfile";


const Patients: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [search, setSearch] = useState("");
  const [patientType, setPatientType] = useState("all");
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null] | null>(null);
  const [tab, setTab] = useState(() => {
    return localStorage.getItem("patient-tab") || "all";
  });
  const [status, setStatus] = useState("all");
  const [hmoFilter, setHmoFilter] = useState("all");
  const currentTab =  tabDetails[tab] || tabDetails["all"];
  const [open, setOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const { patients, loading, error,  fetchPatients} = usePatientStore();
  const [viewOpd, setViewOpd] = useState(false);
  


  const resetFilters = () => {
    setSearch("");
    setPatientType("all");
    setDateRange(null);
    setStatus("all");
    setHmoFilter("all");
  };

  const filteredData = useMemo(() => {
    return patients.filter((item) => {

      const fullName =
        `${item.surname} ${item.other_names}`.toLowerCase();

      const matchesSearch =
        fullName.includes(search.toLowerCase()) ||
        item.patient_number
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.phone_number
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesPatientType =
        patientType === "all" ||
        (patientType === "in" &&
          !item.is_out_patient) ||
        (patientType === "out" &&
          item.is_out_patient);

      const matchesStatus =
        status === "all" ||
        (status === "active" &&
          item.is_active) ||
        (status === "inactive" &&
          !item.is_active);

      const matchesHmo =
        hmoFilter === "all" ||
        item.hmo?.name
          ?.toLowerCase()
          .includes(hmoFilter.toLowerCase());

      const matchesDate =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(item.createdAt).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );


      return (
        matchesSearch &&
        matchesPatientType &&
        matchesStatus &&
        matchesHmo &&
        matchesDate
      );
    });
  }, [
    patients,
    search,
    patientType,
    status,
    hmoFilter,
    dateRange,
  ]);


  const columns: ColumnsType<Patient> = [
    {
      title: "S/N",
      width: 60,
      render: (_, __, index) => index + 1,
    },
    {
      title: "Date Registered",
      render: (_, record) =>
        dayjs(record.createdAt).format("DD MMM YYYY, h:mm A"),
    },
    {
    title: "Patient ID",
    dataIndex: "patient_number",
  },

  {
    title: "Patient Name",
    render: (_, record) =>
      `${record.surname.charAt(0).toUpperCase() + record.surname.slice(1)} ${record.other_names.at(0)?.toUpperCase() + record.other_names.slice(1)}`,
  },

  {
    title: "Gender",
    dataIndex: "gender",
    render: (e)=> {
      return `${e.charAt(0).toUpperCase() + e.slice(1)}`
    }
  },

  {
    title: "Phone",
    dataIndex: "phone_number",
  },
   {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "HMO",
    render: (_, record) =>
      record.hmo ? record.hmo.name : "N/A",
  },
  {
    title: "Balance",
    dataIndex: "balance",
     render: (balance: number) => `₦${Number(balance).toLocaleString()}`,
  },
  {
    title: "Patient Type",
    dataIndex: "is_out_patient",
    // render: (item:boolean) => item ? "Out-Patient" : "In-Patient",
    render:(_, record) => record.is_out_patient ? (
      <Tag color="blue">Out-Patient</Tag>
    ) : (
      <Tag color="purple">In-Patient</Tag>
    )
  },
  // {
  //   title: "Status",
  //   render: (_, record) => {
  //     return record.is_active ? (
  //       <Tag color="green">Active</Tag>
  //     ) : (
  //       <Tag color="red">Inactive</Tag>
  //     );
  //   },
  // },
  {
  title: "Actions",
  render: (_, record) => (
    <div className="flex gap-2">
      <Tooltip title="View Patient Profile">
        <Button
          size="small"
          icon={<Eye size={14} />}
          onClick={() => handleView(record)}
        />
      </Tooltip>
    </div>
  ),
}

];

 const handleView = (record: Patient) => {
    setSelectedPatient(record);
    if(record.is_out_patient){
      setViewOpd(true);
    } else {
    setOpen(true);
    }
};


  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    localStorage.setItem("patient-tab", tab);
  }, [tab]);

  useEffect(() => {
  localStorage.setItem(
    "patient-filters",
    JSON.stringify({
      search,
      patientType,
      status,
      hmoFilter,
    })
  );
}, [search, patientType, status, hmoFilter]);


 const renderContent = () => {
  switch (tab) {
    case 'all':
      return (
        <>
          <div className="flex justify-between items-center">
            <Button onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>

            <Button
              type="primary"
              icon={<Download size={14} />}
              // onClick={exportCSV}
            >
              Export CSV
            </Button>
          </div>
          {showFilters && (
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <PatientFilters
                search={search}
                setSearch={setSearch}
                patientType={patientType}
                setPatientType={setPatientType}
                dateRange={dateRange}
                setDateRange={setDateRange}
                hmoFilter={hmoFilter}
                setHmoFilter={setHmoFilter}
                onReset={resetFilters}
              />
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm p-4">
            <Table
              columns={columns}
              dataSource={filteredData}
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </div>
        </>
      );
    case 'new-patient':
      return <CreatePatient />;
    case 'admitted-patient':
      return <p>Admitted Patients</p>;
    case 'opd-patient':
      return <p>OPD Patients</p>;
    default:
      return (
        <>
          <div className="flex justify-between items-center">
            <Button onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>

            <Button
              type="primary"
              icon={<Download size={14} />}
              onClick={() => toast.success("Export feature coming soon!")}
            >
              Export CSV
            </Button>
          </div>
          {showFilters && (
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <PatientFilters
                search={search}
                setSearch={setSearch}
                patientType={patientType}
                setPatientType={setPatientType}
                hmoFilter={hmoFilter}
                setHmoFilter={setHmoFilter}
                dateRange={dateRange}
                setDateRange={setDateRange}
                onReset={resetFilters}
              />
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm p-4">
            <Table
              columns={columns}
              dataSource={filteredData}
              rowKey="id"
              pagination={{ pageSize: 10 }}
              scroll={{ x: 1200 }}
              loading={loading}
            />
          </div>
        </>
      );
  }
};


  return (
    <div className="p-6 space-y-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-white p-6 rounded-2xl border border-zinc-100 shadow-md shadow-zinc-100/40">
        <div className="space-y-1">
          <SectionHeader
            title={currentTab.title}
            subtitle={currentTab.subtitle}
          />
        </div>

        <div className="flex items-center gap-1 bg-[#F5FDF2] p-2 rounded-lg border border-[#E0F6D6] overflow-x-auto current-tab-track">
          <button
            onClick={() => setTab("all")}
            className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap
              ${
                tab === "all"
                  ? "bg-[#2EB62C] text-white shadow-sm shadow-[#2EB62C]/20 borde border-[#249422]"
                  : "text-[#145212] hover:text-[#1B6F19] hover:bg-[#ECFBE6]"
              }`}
          >
            All Patients
          </button>

          <button
            onClick={() => setTab("new-patient")}
            className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap
              ${
                tab === "new-patient"
                  ? "bg-[#2EB62C] text-white shadow-sm shadow-[#2EB62C]/20 borde border-[#249422]"
                  : "text-[#145212] hover:text-[#1B6F19] hover:bg-[#ECFBE6]"
              }`}
          >
            Register Patient
          </button>

          <button
            onClick={() => setTab("admitted-patient")}
            className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap
              ${
                tab === "admitted-patient"
                  ? "bg-[#2EB62C] text-white shadow-sm shadow-[#2EB62C]/20 borde border-[#249422]"
                  : "text-[#145212] hover:text-[#1B6F19] hover:bg-[#ECFBE6]"
              }`}
          >
            Admitted Patients
          </button>

          <button
            onClick={() => setTab("opd-patient")}
            className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap
              ${
                tab === "opd-patient"
                  ? "bg-[#2EB62C] text-white shadow-sm shadow-[#2EB62C]/20 borde border-[#249422]"
                  : "text-[#145212] hover:text-[#1B6F19] hover:bg-[#ECFBE6]"
              }`}
          >
            OPD Patients
          </button>
        </div>
      </div>
      {renderContent()}
      {open && selectedPatient && (
        <Drawer        
          title="Patient Profile"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          width='99%'
          
        > 
          <PatientProfileModal patient={selectedPatient} />
        </Drawer>
      )}
      {viewOpd && selectedPatient && (
        <Modal
          title="OPD Patient Profile"
          open={viewOpd}
          onCancel={() => setViewOpd(false)}
          footer={null}
          width='50%'
        >
          <OpdPatientProfile patient={selectedPatient} />
        </Modal>
      )}
    </div>
  );
};

export default Patients;