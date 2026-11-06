import React, { useMemo, useState } from "react";
import { Table, Button, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "../../utils/dayJs";
import type { Dayjs } from "dayjs";
import type { LabResult } from "../../types/lab";
import { mockResults } from "../../data/lab.mock";
import LabResultFilters from "../../components/Lab/LabResultFilter";
import { Download, Filter, FileCheck2, CheckCircle2, Eye } from "lucide-react";
import LabResultModal from "../../components/modal/LabResultModal";

const LabResults: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const [selectedResult, setSelectedResult] = useState<LabResult | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  const filteredData = useMemo(() => {
    const filterResult = (r: LabResult): boolean => {
      const matchesSearch: boolean =
        r.patientName.toLowerCase().includes(search.toLowerCase()) ||
        r.requestId.toString().includes(search);

      const matchesStatus: boolean =
        status === "all" || r.status === status;

      const matchesDate: boolean =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(r.completedAt).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );

      return matchesSearch && matchesStatus && matchesDate;
    };

    return mockResults.filter(filterResult);
  }, [search, status, dateRange]);

  const exportCSV = () => {
    const headers = [
      "Request ID",
      "Patient",
      "Test",
      "Technician",
      "Status",
      "Completed At",
    ];

    const rows = filteredData.map((item) => [
      item.requestId,
      item.patientName,
      item.testName,
      item.technician,
      item.status,
      item.completedAt,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((field) => `"${field ?? ""}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lab-results.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns: ColumnsType<LabResult> = [
    {
      title: "Request ID",
      dataIndex: "requestId",
      width: 105,
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
      title: "Reporting Scientist",
      dataIndex: "technician",
      render: (tech) => <span className="text-xs text-slate-600 dark:text-slate-400">{tech}</span>,
    },
    {
      title: "Verification Status",
      dataIndex: "status",
      render: (s: string) => {
        if (s === "verified")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              Verified & Signed
            </span>
          );
        if (s === "pending")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
              Pending Authorization
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
            Rejected
          </span>
        );
      },
    },
    {
      title: "Completed At",
      dataIndex: "completedAt",
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-1.5">
          <Tooltip title="View Diagnostic Result & Ranges">
            <button
              type="button"
              onClick={() => {
                setSelectedResult(record);
                setModalOpen(true);
              }}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <Eye size={14} />
            </button>
          </Tooltip>
        </div>
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
              <CheckCircle2 size={12} /> Results Verification Desk
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck2 className="h-6 w-6 text-primary" />
            Laboratory Diagnostic Results & Authorization
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Validate specimen test values against clinical biological reference intervals, flag abnormal findings, and sign off reports
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
            Showing <strong>{filteredData.length}</strong> validated test results
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
          <LabResultFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onReset={() => {
              setSearch("");
              setStatus("all");
              setDateRange(null);
            }}
          />
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm overflow-hidden p-2">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10, showSizeChanger: true }}
          scroll={{ x: 1000 }}
        />
      </div>

      <LabResultModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        result={selectedResult}
        isDark={isDark}
      />
    </div>
  );
};

export default LabResults;
