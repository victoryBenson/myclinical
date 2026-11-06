import React, { useMemo, useState } from "react";
import { Table, Button, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download, Eye, Filter, FileText, CheckCircle2 } from "lucide-react";
import { mockReports } from "../../data/lab.mock";
import type { LabReport } from "../../types/lab";
import LabReportModal from "../../components/modal/LabReportModal";
import LabReportFilters from "../../components/Lab/LabReportFilters";
import dayjs from "../../utils/dayJs";
import type { Dayjs } from "dayjs";

const LabReports: React.FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selectedReport, setSelectedReport] = useState<LabReport | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [test, setTest] = useState("all");
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null] | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const resetFilters = () => {
    setSearch("");
    setStatus("all");
    setTest("all");
    setDateRange(null);
  };

  const filteredData = useMemo(() => {
    return mockReports.filter((report) => {
      const matchesSearch =
        report.patientName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        report.reportId
          .toString()
          .includes(search);

      const matchesStatus =
        status === "all" || report.status === status;

      const matchesTest =
        test === "all" || report.testName === test;

      const matchesDate =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(report.issuedAt).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );

      return (
        matchesSearch &&
        matchesStatus &&
        matchesTest &&
        matchesDate
      );
    });
  }, [search, status, test, dateRange]);

  const exportCSV = () => {
    const headers = ["Report ID", "Patient", "Test", "Status", "Issued Date"];

    const rows = filteredData.map((r) => [
      r.reportId,
      r.patientName,
      r.testName,
      r.status,
      r.issuedAt,
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
    link.download = "lab-reports.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns: ColumnsType<LabReport> = [
    {
      title: "Report #",
      dataIndex: "reportId",
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
      title: "Publication Status",
      dataIndex: "status",
      render: (s: string) => {
        if (s === "approved")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              Approved & Published
            </span>
          );
        if (s === "pending")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
              Pending Review
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
      title: "Date Issued",
      dataIndex: "issuedAt",
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-1.5">
          <Tooltip title="View official lab report">
            <button
              type="button"
              onClick={() => {
                setSelectedReport(record);
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
              <CheckCircle2 size={12} /> Certified Reports Registry
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Medical Laboratory Diagnostic Reports
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Access authorized, physician-signed diagnostic reports with clinical interpretations and laboratory certifications
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
            Showing <strong>{filteredData.length}</strong> finalized reports
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
          <LabReportFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            test={test}
            setTest={setTest}
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
          scroll={{ x: 1000 }}
        />
      </div>

      <LabReportModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        report={selectedReport}
      />
    </div>
  );
};

export default LabReports;
