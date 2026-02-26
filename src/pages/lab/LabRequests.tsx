import React, { useMemo, useState } from "react";
import { Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import SectionHeader from "../../components/ui/SectionHeader";
import type { LabRequest, LabStatus } from "../../types/lab.types";
import dayjs from "../../utils/dayJs";
import type { Dayjs } from "dayjs";
import DateRangePicker from "../../components/ui/DateRangePicker";
import { mockRequests } from "../../data/lab.mock";
import LabRequestFilters from "../../components/Lab/LabRequestFilters";
import { Download } from "lucide-react";

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

  // FILTERED DATA
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

  // CSV EXPORT
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
    { title: "ID", dataIndex: "id" },
    { title: "Patient", dataIndex: "patientName" },
    { title: "Test", dataIndex: "testName" },
    {
      title: "Priority",
      dataIndex: "priority",
      render: (priority) => {
        const color =
          priority === "urgent"
            ? "red"
            : priority === "high"
            ? "orange"
            : priority === "medium"
            ? "gold"
            : "green";

        return <Tag color={color}>{priority.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const color =
          status === "waiting"
            ? "blue"
            : status === "processing"
            ? "orange"
            : "green";

        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    { title: "Date", dataIndex: "date" },
  ];

  return (
    <div className="p-6 space-y-6">

      <SectionHeader
        title="Lab Requests"
        subtitle="View and manage all laboratory requests"
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

      <div className="bg-white rounded-2xl shadow-sm p-4">
        <Table
          columns={columns}
          dataSource={filteredRequests}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>

    </div>
  );
};

export default LabRequests;