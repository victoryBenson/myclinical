import React, { useMemo, useState, useEffect } from "react";
import { Table, Tag, Button, Drawer, Tooltip, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import {
  CalendarDays,
  CalendarCheck,
  CalendarPlus,
  Download,
  Eye,
} from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
import { tabDetails } from "../../data/appointments";
import { usePatientStore } from "../../store/patient.store";
import PatientProfileModal from "../../components/modal/patients/PatientProfile";
import PatientFilters from "../../components/Patients/PatientsFilter";
import CreatePatient from "./CreatePatientDashboard";
import toast from "react-hot-toast";
import type { Patient } from "../../types/patients";
import OpdPatientProfile from "../../components/modal/patients/OpdPatientProfile";


const Appointments: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [search, setSearch] = useState("");
  const [patientType, setPatientType] = useState("all");
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null] | null>(null);
  const [tab, setTab] = useState(() => {
    return localStorage.getItem("patient-tab") || "today-appointments";
  });
  const [status, setStatus] = useState("all");
  const [hmoFilter, setHmoFilter] = useState("all");
  const currentTab =  tabDetails[tab] || tabDetails["all"];
  const [open, setOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const { patients, loading, fetchPatients} = usePatientStore();
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
    render:(_, record) => record.is_out_patient ? (
      <Tag color="processing">Out-Patient</Tag>
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
              pagination={{ pageSize: 7 }}
            />
          </div>
        </>
      );
    case 'new-appointment':
      return <CreatePatient />;
    case 'today-appointments':
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
      )
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

        <div className="flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-slate-200/80 bg-slate-50/80 p-1.5">
          {[
            {
              id: "today-appointments",
              label: "Today Appointments",
              subtitle: "Today's schedule",
              icon: CalendarDays,
            },
            {
              id: "all",
              label: "All Appointments",
              subtitle: "Appointment directory",
              icon: CalendarCheck,
            },
            {
              id: "new-appointment",
              label: "New Appointment",
              subtitle: "Schedule a visit",
              icon: CalendarPlus,
            },
          ].map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                aria-current={active ? "page" : undefined}
                className={`
                  group relative flex shrink-0 items-center gap-2.5
                  rounded-xl px-3.5 lg:px-4 py-2.5 lg:py-3
                  text-left transition-all duration-200 ease-out
                  ${
                    active
                      ? "bg-white text-primary-darker shadow-sm ring-1 ring-slate-200/80"
                      : "text-slate-500 hover:bg-white/70 hover:text-slate-800"
                  }
                `}
              >
                <span
                  className={`
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-lg transition-colors duration-200
                    ${
                      active
                        ? "bg-primary-soft text-primary-dark"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200/70"
                    }
                  `}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <span className="flex flex-col gap-0.5">
                  <span className="whitespace-nowrap text-xs font-semibold">
                    {item.label}
                  </span>
                  <span
                    className={`whitespace-nowrap text-[10px] ${
                      active ? "text-primary-dark/80" : "text-slate-400"
                    }`}
                  >
                    {item.subtitle}
                  </span>
                </span>

                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-primary" />
                )}
              </button>
            );
          })}
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

export default Appointments;