import React, { useMemo, useState, useEffect } from "react";
import { Table, Button, Drawer, Tooltip, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import {
  Download,
  Eye,
  Users,
  UserPlus,
  BedDouble,
  Stethoscope,
  Filter,
  CheckCircle2,
} from "lucide-react";
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
  const [dateRange, setDateRange] = useState<
    [Dayjs | null, Dayjs | null] | null
  >(null);

  const [tab, setTab] = useState(() => {
    return localStorage.getItem("patient-tab") || "all";
  });

  const [status, setStatus] = useState("all");
  const [hmoFilter, setHmoFilter] = useState("all");

  const currentTab = tabDetails[tab] || tabDetails["all"];

  const [open, setOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] =
    useState<Patient | null>(null);

  const { patients, loading, fetchPatients } = usePatientStore();

  const [viewOpd, setViewOpd] = useState(false);

  const resetFilters = () => {
    setSearch("");
    setPatientType("all");
    setDateRange(null);
    setStatus("all");
    setHmoFilter("all");
  };

  const filteredData = useMemo(() => {
    return (patients || []).filter((item) => {
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
        (patientType === "in" && !item.is_out_patient) ||
        (patientType === "out" && item.is_out_patient);

      const matchesStatus =
        status === "all" ||
        (status === "active" && item.is_active) ||
        (status === "inactive" && !item.is_active);

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

  const admittedPatients = useMemo(
    () => filteredData.filter((p) => !p.is_out_patient),
    [filteredData]
  );

  const opdPatients = useMemo(
    () => filteredData.filter((p) => p.is_out_patient),
    [filteredData]
  );

  const columns: ColumnsType<Patient> = [
    {
      title: "S/N",
      width: 60,
      render: (_, __, index) => (
        <span className="text-xs font-semibold text-slate-500">{index + 1}</span>
      ),
    },
    {
      title: "Date Registered",
      render: (_, record) => (
        <span className="text-xs text-slate-600 dark:text-slate-300">
          {dayjs(record.createdAt).format("DD MMM YYYY, h:mm A")}
        </span>
      ),
    },
    {
      title: "Patient ID",
      dataIndex: "patient_number",
      render: (val: string) => (
        <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">
          {val || "N/A"}
        </span>
      ),
    },
    {
      title: "Patient Name",
      render: (_, record) => (
        <div className="flex flex-col">
          <span className="font-semibold text-slate-900 dark:text-white text-sm">
            {record.surname.charAt(0).toUpperCase() + record.surname.slice(1)}{" "}
            {record.other_names.charAt(0).toUpperCase() + record.other_names.slice(1)}
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            {record.email || record.phone_number || "No contact info"}
          </span>
        </div>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (e) => (
        <span className="text-xs font-medium capitalize text-slate-700 dark:text-slate-300">
          {e ? `${e.charAt(0).toUpperCase()}${e.slice(1)}` : "N/A"}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone_number",
      render: (phone: string) => (
        <span className="text-xs text-slate-600 dark:text-slate-400">
          {phone || "N/A"}
        </span>
      ),
    },
    {
      title: "HMO Provider",
      render: (_, record) => (
        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
          {record.hmo ? record.hmo.name : "Private / Cash"}
        </span>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      render: (balance: number) => (
        <span className={`text-xs font-semibold ${Number(balance) > 0 ? "text-amber-600" : "text-emerald-600"}`}>
          ₦{Number(balance || 0).toLocaleString()}
        </span>
      ),
    },
    {
      title: "Patient Type",
      dataIndex: "is_out_patient",
      render: (_, record) =>
        record.is_out_patient ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 dark:bg-blue-900/30 dark:text-blue-300">
            Out-Patient
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60 dark:bg-purple-900/30 dark:text-purple-300">
            In-Patient
          </span>
        ),
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-1.5">
          <Tooltip title="View Patient Profile">
            <button
              type="button"
              onClick={() => handleView(record)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <Eye size={15} />
            </button>
          </Tooltip>
        </div>
      ),
    },
  ];

  const handleView = (record: Patient) => {
    setSelectedPatient(record);

    if (record.is_out_patient) {
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

  const patientTabs = [
    {
      id: "all",
      label: "All Patients",
      subtitle: "Patient directory",
      icon: Users,
      badge: patients?.length || 0,
    },
    {
      id: "new-patient",
      label: "New Patient",
      subtitle: "Register patient",
      icon: UserPlus,
    },
    {
      id: "admitted-patient",
      label: "Admitted Patients",
      subtitle: "In-patient records",
      icon: BedDouble,
      badge: (patients || []).filter((p) => !p.is_out_patient).length,
    },
    {
      id: "opd-patient",
      label: "OPD Patients",
      subtitle: "Out-patient records",
      icon: Stethoscope,
      badge: (patients || []).filter((p) => p.is_out_patient).length,
    },
  ];

  const renderContent = () => {
    switch (tab) {
      case "all":
        return (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <Button
                  icon={<Filter size={14} />}
                  onClick={() => setShowFilters(!showFilters)}
                  className="rounded-xl border-slate-200 dark:border-gray-700 font-medium"
                >
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                <span className="text-xs text-slate-500">
                  Showing <strong>{filteredData.length}</strong> registered patients
                </span>
              </div>

              <Button
                type="primary"
                icon={<Download size={14} />}
                onClick={() =>
                  toast.success("Export feature coming soon!")
                }
                className="rounded-xl font-medium shadow-sm"
              >
                Export CSV
              </Button>
            </div>

            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-5">
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

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm overflow-hidden p-2">
              <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="id"
                pagination={{ pageSize: 10, showSizeChanger: true }}
                scroll={{ x: 1100 }}
                loading={loading}
              />
            </div>
          </>
        );

      case "new-patient":
        return <CreatePatient />;

      case "admitted-patient":
        return (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-2.5 py-1 rounded-lg">
                  In-Patient Registry
                </span>
                <span className="text-xs text-slate-500">
                  Total Admitted: <strong>{admittedPatients.length}</strong>
                </span>
              </div>

              <Button
                type="primary"
                icon={<Download size={14} />}
                onClick={() => toast.success("Exporting Admitted Patients CSV...")}
                className="rounded-xl font-medium shadow-sm"
              >
                Export In-Patients
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm overflow-hidden p-2">
              <Table
                columns={columns}
                dataSource={admittedPatients}
                rowKey="id"
                pagination={{ pageSize: 10 }}
                scroll={{ x: 1100 }}
                loading={loading}
              />
            </div>
          </>
        );

      case "opd-patient":
        return (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-lg">
                  Out-Patient Department Registry
                </span>
                <span className="text-xs text-slate-500">
                  Total OPD: <strong>{opdPatients.length}</strong>
                </span>
              </div>

              <Button
                type="primary"
                icon={<Download size={14} />}
                onClick={() => toast.success("Exporting OPD Patients CSV...")}
                className="rounded-xl font-medium shadow-sm"
              >
                Export OPD Patients
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm overflow-hidden p-2">
              <Table
                columns={columns}
                dataSource={opdPatients}
                rowKey="id"
                pagination={{ pageSize: 10 }}
                scroll={{ x: 1100 }}
                loading={loading}
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Container */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 bg-white dark:bg-gray-800 p-5 lg:p-6 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm">
        <div className="space-y-1 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary/10 px-2.5 py-0.5 rounded-full">
              Patient Management
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
              <CheckCircle2 size={12} /> Live Registry
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {currentTab?.title || "Patient Directory"}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {currentTab?.subtitle || "Comprehensive hospital patient records and registrations"}
          </p>
        </div>

        {/* Tab Navigation Pill Group */}
        <div className="flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-gray-700 bg-slate-50/80 dark:bg-gray-900/50 p-1.5">
          {patientTabs.map((item) => {
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
                  rounded-xl px-3.5 lg:px-4 py-2.5
                  text-left transition-all duration-200 ease-out
                  ${
                    active
                      ? "bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 shadow-sm ring-1 ring-slate-200/80 dark:ring-gray-700"
                      : "text-slate-600 dark:text-slate-400 hover:bg-white/70 dark:hover:bg-gray-800/60 hover:text-slate-900 dark:hover:text-white"
                  }
                `}
              >
                <span
                  className={`
                    flex h-8 w-8 shrink-0 items-center justify-center
                    rounded-lg transition-colors duration-200
                    ${
                      active
                        ? "bg-primary/10 text-primary-600 dark:text-primary-400"
                        : "bg-slate-100 dark:bg-gray-700 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200/70"
                    }
                  `}
                >
                  <Icon size={16} strokeWidth={2} />
                </span>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="whitespace-nowrap text-xs font-semibold">
                      {item.label}
                    </span>
                    {typeof item.badge === "number" && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-slate-200/70 dark:bg-gray-700 text-slate-700 dark:text-slate-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span
                    className={`whitespace-nowrap text-[10px] ${
                      active
                        ? "text-primary-600/80 dark:text-primary-400/80"
                        : "text-slate-400"
                    }`}
                  >
                    {item.subtitle}
                  </span>
                </div>

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
          title="Patient Comprehensive Profile"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          width="90%"
          styles={{ body: { padding: 0 } }}
        >
          <PatientProfileModal patient={selectedPatient} onClose={() => setOpen(false)} />
        </Drawer>
      )}

      {viewOpd && selectedPatient && (
        <Modal
          title="Out-Patient Department Profile"
          open={viewOpd}
          onCancel={() => setViewOpd(false)}
          footer={null}
          width="50%"
        >
          <OpdPatientProfile
            patient={selectedPatient}
            onOpenComprehensive={() => {
              setViewOpd(false);
              setOpen(true);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default Patients;
