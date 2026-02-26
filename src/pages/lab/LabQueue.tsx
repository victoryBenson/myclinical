import React, { useMemo, useState } from "react";
import { Table, Tag, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { LabRequest, LabStatus } from "../../types/lab.types";
import { mockRequests } from "../../data/lab.mock";
import dayjs from "../../utils/dayJs";
import type { Dayjs } from "dayjs";


import LabQueueFilters from "../../components/Lab/LabQueueFilters";
import SectionHeader from "../../components/ui/SectionHeader";
import { Download } from "lucide-react";
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
    setData(prev =>
      prev.map(item =>
        item.id === Number(id) ? { ...item, status } : item
      )
    );
  };

  const filteredData = useMemo(() => {
    return data.filter(item => {
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
      ...filteredData.map(item => [
        item.id,
        item.patientName,
        item.testName,
        item.priority,
        item.status,
        item.date,
      ]),
    ];

    const blob = new Blob(
      [csvRows.map(row => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lab-queue.csv";
    link.click();
  };

  const columns: ColumnsType<LabRequest> = [
    { title: "ID", dataIndex: "id" },
    { title: "Patient", dataIndex: "patientName" },
    { title: "Test", dataIndex: "testName" },
    {
        title: "Technician",
        dataIndex: "technicianId",
        render: (technicianId: string | null) => {
            if (!technicianId) return "Unassigned";

            const tech = technicians.find(t => t.id === technicianId);
            return tech ? tech.name : "Unknown";
        },
    },
    {
      title: "Priority",
      dataIndex: "priority",
      render: p => <Tag color="red">{p}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: s => <Tag>{s}</Tag>,
    },
    { title: "Date", dataIndex: "date" },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            onClick={() =>
              updateStatus(record.id.toString(), "processing")
            }
          >
            Start
          </Button>
          <Button
            size="small"
            onClick={() =>
              updateStatus(record.id.toString(), "completed")
            }
          >
            Complete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">

    <SectionHeader
        title="Lab Queue"
        subtitle="View and manage all laboratory Queue"
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

      <div className="bg-white rounded-2xl shadow-sm p-4">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default LabQueue;