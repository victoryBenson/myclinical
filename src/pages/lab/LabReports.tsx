import React, { useMemo, useState } from "react";
import { Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download, Eye } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
import { mockReports } from "../../data/lab.mock";
import type { LabReport } from "../../types/lab.types";
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
    { title: "Report ID", dataIndex: "reportId" },
    { title: "Patient", dataIndex: "patientName" },
    { title: "Test", dataIndex: "testName" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const color =
          status === "approved"
            ? "green"
            : status === "pending"
            ? "orange"
            : "red";

        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    { title: "Issued", dataIndex: "issuedAt" },
    {
      title: "Action",
      render: (_, record) => (
        <Button
          size="small"
          icon={<Eye size={14} />}
          onClick={() => {
            setSelectedReport(record);
            setModalOpen(true);
          }}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Lab Reports"
        subtitle="View and manage finalized laboratory reports"
      />

      <div className="flex justify-between items-center">
        <Button onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        <Button
          type="primary"
          icon={<Download size={14} />}
          onClick={exportCSV}
        >
          Export CSV
        </Button>
      </div>

        {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4">
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
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 transition-colors">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
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