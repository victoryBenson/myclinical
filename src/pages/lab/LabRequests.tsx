import React, { useMemo, useState } from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { LabRequest, LabStatus } from "../../types/lab";
import dayjs from "../../utils/dayJs";
import type { Dayjs } from "dayjs";
import { mockRequests } from "../../data/lab.mock";
import LabRequestFilters from "../../components/Lab/LabRequestFilters";
import { Download, Filter, FlaskConical, CheckCircle2 } from "lucide-react";

const LabRequests: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LabStatus | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<
    "all" | "low" | "medium" | "high" | "urgent"
  >("all");
  const [testFilter, setTestFilter] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const filteredRequests = useMemo(() => {
    return mockRequests.filter((request) => {
      const matchesSearch =
        request.patientName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        request.id.toString().includes(search);

      const matchesStatus =
        statusFilter === "all" || request.status === statusFilter;

      const matchesPriority =
        priorityFilter === "all" ||
        request.priority === priorityFilter;

      const matchesTest =
        testFilter === "all" ||
        request.testName === testFilter;

      const matchesDate =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(request.date).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesTest &&
        matchesDate
      );
    });
  }, [search, statusFilter, priorityFilter, testFilter, dateRange]);

  const exportCSV = () => {
    const headers = [
      "ID",
      "Patient",
      "Test",
      "Priority",
      "Status",
      "Date",
    ];

    const rows = filteredRequests.map((item) => [
      item.id,
      item.patientName,
      item.testName,
      item.priority,
      item.status,
      item.date,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lab-requests.csv";
    link.click();
  };

  const columns: ColumnsType<LabRequest> = [
    {
      title: "Order ID",
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
      title: "Priority Level",
      dataIndex: "priority",
      render: (priority: string) => {
        if (priority === "urgent")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
              URGENT / STAT
            </span>
          );
        if (priority === "high")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
              HIGH
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60 dark:bg-gray-700 dark:text-slate-300">
            {priority.toUpperCase()}
          </span>
        );
      },
    },
    {
      title: "Accession Status",
      dataIndex: "status",
      render: (status: string) => {
        if (status === "completed")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              COMPLETED
            </span>
          );
        if (status === "processing")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/60 dark:bg-sky-950/40 dark:text-sky-400">
              PROCESSING
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
            WAITING
          </span>
        );
      },
    },
    {
      title: "Order Date",
      dataIndex: "date",
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
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
              <CheckCircle2 size={12} /> Accession Registry
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <FlaskConical className="h-6 w-6 text-primary" />
            Medical Laboratory Test Requests
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Complete register of diagnostic orders across all inpatient wards, specialty clinics, and outpatient encounters
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
            Showing <strong>{filteredRequests.length}</strong> laboratory orders
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
          <LabRequestFilters
            search={search}
            setSearch={setSearch}
            status={statusFilter}
            setStatus={setStatusFilter}
            priority={priorityFilter}
            setPriority={setPriorityFilter}
            test={testFilter}
            setTest={setTestFilter}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onReset={() => {
              setSearch("");
              setStatusFilter("all");
              setPriorityFilter("all");
              setTestFilter("all");
              setDateRange(null);
            }}
          />
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm overflow-hidden p-2">
        <Table
          columns={columns}
          dataSource={filteredRequests}
          rowKey="id"
          pagination={{ pageSize: 10, showSizeChanger: true }}
          scroll={{ x: 1000 }}
        />
      </div>
    </div>
  );
};

export default LabRequests;
