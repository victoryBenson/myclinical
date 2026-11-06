import React, { useMemo, useState } from "react";
import { Table, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { LabRequest, LabStatus } from "../../types/lab";
import { mockRequests } from "../../data/lab.mock";
import dayjs from "../../utils/dayJs";
import type { Dayjs } from "dayjs";
import toast from "react-hot-toast";

import LabQueueFilters from "../../components/Lab/LabQueueFilters";
import { Download, Filter, Clock, CheckCircle2, Play, Check } from "lucide-react";

interface Technician {
  id: string;
  name: string;
}

const technicians: Technician[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
];

const LabQueue: React.FC = () => {
  const [data, setData] = useState<LabRequest[]>(mockRequests);
  const [showFilters, setShowFilters] = useState(true);

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("all");
  const [test, setTest] = useState("all");
  const [technician, setTechnician] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const resetFilters = () => {
    setSearch("");
    setPriority("all");
    setTest("all");
    setTechnician("all");
    setDateRange(null);
  };

  const updateStatus = (id: string, status: LabStatus) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === Number(id) ? { ...item, status } : item
      )
    );
    toast.success(`Accession #${id} updated to ${status}`);
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.patientName.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toString().toLowerCase().includes(search.toLowerCase());

      const matchesPriority =
        priority === "all" || item.priority === priority;

      const matchesTest =
        test === "all" || item.testName === test;

      const matchesTechnician =
        technician === "all" || item.technician === technician;

      const matchesDate =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(item.date).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );

      return (
        matchesSearch &&
        matchesPriority &&
        matchesTest &&
        matchesTechnician &&
        matchesDate
      );
    });
  }, [data, search, priority, test, technician, dateRange]);

  const exportCSV = () => {
    const csvRows = [
      ["ID", "Patient", "Test", "Priority", "Status", "Date"],
      ...filteredData.map((item) => [
        item.id,
        item.patientName,
        item.testName,
        item.priority,
        item.status,
        item.date,
      ]),
    ];

    const blob = new Blob(
      [csvRows.map((row) => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lab-queue.csv";
    link.click();
  };

  const columns: ColumnsType<LabRequest> = [
    {
      title: "Queue #",
      dataIndex: "id",
      width: 95,
      render: (id) => <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">#{id}</span>,
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      render: (p) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{p}</span>,
    },
    {
      title: "Diagnostic Investigation",
      dataIndex: "testName",
      render: (t) => <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{t}</span>,
    },
    {
      title: "Assigned Scientist",
      dataIndex: "technicianId",
      render: (technicianId: string | null) => {
        if (!technicianId) return <span className="text-xs text-slate-400 italic">Unassigned</span>;

        const tech = technicians.find((t) => t.id === technicianId);
        return <span className="text-xs text-slate-700 dark:text-slate-300">{tech ? tech.name : "Laboratory Staff"}</span>;
      },
    },
    {
      title: "Priority Level",
      dataIndex: "priority",
      render: (p: string) => {
        if (p === "urgent")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
              URGENT / STAT
            </span>
          );
        if (p === "high")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
              HIGH
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60 dark:bg-gray-700 dark:text-slate-300">
            {p.toUpperCase()}
          </span>
        );
      },
    },
    {
      title: "Stage",
      dataIndex: "status",
      render: (s: string) => {
        if (s === "completed")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              Completed
            </span>
          );
        if (s === "processing")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/60 dark:bg-sky-950/40 dark:text-sky-400">
              In Processing
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
            Waiting Specimen
          </span>
        );
      },
    },
    {
      title: "Order Date",
      dataIndex: "date",
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <Space size="small">
          {record.status !== "processing" && record.status !== "completed" && (
            <Button
              size="small"
              icon={<Play size={12} />}
              onClick={() => updateStatus(record.id.toString(), "processing")}
              className="rounded-lg text-xs font-medium border-sky-200 text-sky-700 hover:bg-sky-50"
            >
              Start
            </Button>
          )}
          {record.status !== "completed" && (
            <Button
              size="small"
              type="primary"
              icon={<Check size={12} />}
              onClick={() => updateStatus(record.id.toString(), "completed")}
              className="rounded-lg text-xs font-medium"
            >
              Complete
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-5 lg:p-6 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary/10 px-2.5 py-0.5 rounded-full">
              Pharmacy & Diagnostics
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
              <CheckCircle2 size={12} /> Live Worklist
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Medical Laboratory Bench Worklist & Queue
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Real-time tracking of accessioned specimens, automated analyzer queues and bench execution progression
          </p>
        </div>
      </div>

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
            Showing <strong>{filteredData.length}</strong> worklist items
          </span>
        </div>

        <Button
          type="primary"
          icon={<Download size={14} />}
          onClick={exportCSV}
          className="rounded-xl font-medium shadow-sm"
        >
          Export CSV
        </Button>
      </div>

      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-5">
          <LabQueueFilters
            search={search}
            setSearch={setSearch}
            priority={priority}
            setPriority={setPriority}
            test={test}
            setTest={setTest}
            technician={technician}
            setTechnician={setTechnician}
            dateRange={dateRange}
            setDateRange={setDateRange}
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
          scroll={{ x: 1050 }}
        />
      </div>
    </div>
  );
};

export default LabQueue;
