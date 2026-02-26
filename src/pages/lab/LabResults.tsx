import React, { useMemo, useState } from "react";
import { Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import SectionHeader from "../../components/ui/SectionHeader";
import dayjs from "../../utils/dayJs";
import type { Dayjs } from "dayjs";
import type { LabResult } from "../../types/lab.types";
import { mockResults } from "../../data/lab.mock";
import LabResultFilters from "../../components/Lab/LabResultFilter";
import { Download } from "lucide-react";
import LabResultModal from "../../components/modal/LabResultModal";

const LabResults: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const [selectedResult, setSelectedResult] = useState<LabResult | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [isDark, setIsDark] = useState(false)

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
    { title: "Request ID", dataIndex: "requestId" },
    { title: "Patient", dataIndex: "patientName" },
    { title: "Test", dataIndex: "testName" },
    { title: "Technician", dataIndex: "technician" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const color =
          status === "pending"
            ? "orange"
            : status === "verified"
            ? "green"
            : "red";
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    { title: "Completed", dataIndex: "completedAt" },
    {
      title: "Action",
      render: (_, record) => (
        <Button size="small"onClick={() => {
            setSelectedResult(record);
            setModalOpen(true);
          }}>View</Button>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Test Results"
        subtitle="Manage and verify laboratory test results"
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
        <div className="bg-white rounded-2xl shadow-sm p-4">
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

      <div className="bg-white rounded-2xl shadow-sm p-4">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
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