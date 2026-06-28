import React, { useMemo, useState } from "react";
import { Button, Table, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  AlertTriangle,
  Clock,
  Printer,
  CheckIcon,
  VerifiedIcon,
  CalendarDays,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast from "react-hot-toast";

import SectionHeader from "../../components/ui/SectionHeader";
import StatsCard from "../../components/ui/StatsCard";
import { appointmentStatusData, patientStats, patientTrendData } from "../../data/patients";

const { Option } = Select;

interface PatientTrend {
  id: number;
  date: string;
  patients: number;
  checkedIn: number;
  completedVisits: number;
  emergencyCases: number;
  department: string;
  status?: string;
}

const PatientDashboard: React.FC = () => {
  // const [selectedTrend, setSelectedTrend] = useState<PatientTrend | null>(null);
  // const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  // const handleView = (record: PatientTrend) => {
  //   setSelectedTrend(record);
  //   setOpen(true);
  // };

  const handlePrint = (record: PatientTrend) => {
    toast.success("Data sent to printer!", { id: record.id.toString() });
  };

  const filteredData = useMemo(() => {
    if (filter === "all") return patientTrendData;

    const now = new Date();

    return patientTrendData.filter((sale) => {
      const saleDate = new Date(sale.date);

      if (filter === "today") {
        return saleDate.toDateString() === now.toDateString();
      }

      if (filter === "week") {
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);
        return saleDate >= weekAgo;
      }

      if (filter === "month") {
        return (
          saleDate.getMonth() === now.getMonth() &&
          saleDate.getFullYear() === now.getFullYear()
        );
      }

      return true;
    });
  }, [filter]);

  const columns: ColumnsType<PatientTrend> = [
    { title: "ID", dataIndex: "id" },
    { title: "Date", dataIndex: "date" },
    { title: "Department", dataIndex: "department" },
    {
      title: "Patients",
      dataIndex: "patients",
      sorter: (a, b) => a.patients - b.patients,
    },
    {
      title: "Checked-in",
      dataIndex: "checkedIn",
      sorter: (a, b) => a.checkedIn - b.checkedIn,
    },
    {
      title: "Completed Visits",
      dataIndex: "completedVisits",
      sorter: (a, b) => a.completedVisits - b.completedVisits,
    },
    {
      title: "Emergency Cases",
      dataIndex: "emergencyCases",
      sorter: (a, b) => a.emergencyCases - b.emergencyCases,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        const color =
          status === "Paid"
            ? "bg-green-100 text-green-600 dark:bg-green-900"
            : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900";

        return (
          <span className={`px-2 py-1 text-xs rounded-lg ${color}`}>
            {status}
          </span>
        );
      },
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            size="small"
            icon={<Printer size={14} />}
            onClick={() => handlePrint(record)}
          />
        </div>
      ),
    },
  ];

   return (
    <div className="p-6 space-y-6">

      <SectionHeader
        title="Patient Dashboard"
        subtitle="Overview of patient care and services"
      />
       {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <StatsCard
          title="Total Appointments"
          value={patientStats.totalAppointments}
          icon={CalendarDays }
          iconBg="bg-primary-soft"
          iconColor="text-primary"
        />
        <StatsCard
          title="Checked-in Patients"
          value={patientStats.checkedInPatients}
          icon={CheckIcon}
          iconBg="bg-success-soft dark:bg-success-dark"
          iconColor="text-success"
        />
        <StatsCard
          title="Waiting Patients"
          value={patientStats.waitingPatients}
          icon={Clock}
          iconBg="bg-warning-soft dark:bg-warning-dark"
          iconColor="text-warning"
          valueColor="text-warning"
        />
        <StatsCard
          title="Doctors Available"
          value={patientStats.doctorsAvailable}
          icon={AlertTriangle}
          iconBg="bg-info-soft dark:bg-info-dark"
          iconColor="text-info"
          valueColor="text-info"
        />
        <StatsCard
          title="Completed Visits"
          value={patientStats.completedVisits}
          icon={VerifiedIcon}
          iconBg="bg-success-soft dark:bg-success-dark"
          iconColor="text-success"
          valueColor="text-success"
        />
        <StatsCard
          title="Emergency Cases"
          value={patientStats.emergencyCases}
          icon={AlertTriangle}
          iconBg="bg-danger-soft dark:bg-danger-dark"
          iconColor="text-danger"
          valueColor="text-danger"
        />
      </div>
        {/* Patient Trend Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
        <h3 className="font-semibold mb-4"> Daily Patient Activity Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={filteredData}>
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#2563eb"   
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="checkedIn"
              stroke="#0d9488"  
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="completedVisits"
              stroke="#16a34a"   
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="emergencyCases"
              stroke="#dc2626"   
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Patient Trend Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">
             Patient Visit Table 
          </h3>

          <div className="flex gap-3">
            <Select
              defaultValue="all"
              onChange={(value) => setFilter(value)}
              className="w-32"
            >
              <Option value="all">All</Option>
              <Option value="today">Today</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
            </Select>

            <Button type="primary" icon={<Printer size={14} />}>
              Export
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />

        {/* <div className="mt-4 flex justify-end border-t pt-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Revenue
            </p>
            <h3 className="text-lg font-semibold text-green-600">
              ₦{totalRevenue.toLocaleString()}
            </h3>
          </div>
        </div> */}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
        <h3 className="font-semibold mb-4"> Appointment Status Analysis</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={appointmentStatusData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#0d9488"  
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PatientDashboard;