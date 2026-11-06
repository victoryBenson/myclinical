import React, { useMemo, useState } from "react";
import { Button, Table, Select, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  AlertTriangle,
  Clock,
  Printer,
  CheckIcon,
  VerifiedIcon,
  CalendarDays,
  Activity,
  Users,
  TrendingUp,
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

import StatsCard from "../../components/ui/StatsCard";
import { appointmentStatusData, patientStats, patientTrendData } from "../../data/patients";
import { COLORS } from "../../theme/themeConfig";

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

export const PatientDashboard: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const handlePrint = (record: PatientTrend) => {
    toast.success(`Visit log #${record.id} sent to printer!`);
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
    {
      title: "ID",
      dataIndex: "id",
      render: (id) => <span className="font-mono text-xs font-semibold text-slate-500">#{id}</span>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => <span className="text-xs text-slate-700 dark:text-slate-300">{date}</span>,
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (dept) => (
        <span className="font-medium text-xs text-slate-800 dark:text-slate-200">
          {dept}
        </span>
      ),
    },
    {
      title: "Patients",
      dataIndex: "patients",
      sorter: (a, b) => a.patients - b.patients,
      render: (val) => <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">{val}</span>,
    },
    {
      title: "Checked-in",
      dataIndex: "checkedIn",
      sorter: (a, b) => a.checkedIn - b.checkedIn,
      render: (val) => <span className="text-xs text-emerald-600 font-medium">{val}</span>,
    },
    {
      title: "Completed Visits",
      dataIndex: "completedVisits",
      sorter: (a, b) => a.completedVisits - b.completedVisits,
      render: (val) => <span className="text-xs text-primary font-medium">{val}</span>,
    },
    {
      title: "Emergency Cases",
      dataIndex: "emergencyCases",
      sorter: (a, b) => a.emergencyCases - b.emergencyCases,
      render: (val) => (
        <span className={`text-xs font-semibold ${val > 0 ? "text-rose-500" : "text-slate-400"}`}>
          {val}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        const isPaid = status === "Paid";
        return (
          <span
            className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg ${
              isPaid
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
            }`}
          >
            {status || "Active"}
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
            className="rounded-lg hover:border-primary hover:text-primary flex items-center justify-center"
            icon={<Printer size={13} />}
            onClick={() => handlePrint(record)}
            title="Print record"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Premium Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Patient Management
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Tag color="green" className="rounded-full text-[10px] font-semibold">
              Clinical Registry
            </Tag>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="text-primary h-6 w-6" />
            Patient Care & Services Overview
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Real-time census of clinic attendance, doctor availability, triage velocity and appointment outcomes
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <Tag color="green" className="font-semibold text-xs py-0.5 px-2.5 rounded-lg">
            LIVE CENSUS ACTIVE
          </Tag>
        </div>
      </div>

      {/* Balanced 6-Card Operational KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatsCard
          title="Total Appointments"
          value={patientStats.totalAppointments}
          icon={CalendarDays}
          iconBg="bg-primary-soft dark:bg-primary/20"
          iconColor="text-primary-dark dark:text-primary-300"
        />
        <StatsCard
          title="Checked-In Patients"
          value={patientStats.checkedInPatients}
          icon={CheckIcon}
          iconBg="bg-emerald-50 dark:bg-emerald-950/40"
          iconColor="text-emerald-600 dark:text-emerald-400"
          valueColor="text-emerald-600 dark:text-emerald-400"
        />
        <StatsCard
          title="Waiting Queue"
          value={patientStats.waitingPatients}
          icon={Clock}
          iconBg="bg-amber-50 dark:bg-amber-950/40"
          iconColor="text-amber-600 dark:text-amber-400"
          valueColor="text-amber-600 dark:text-amber-400"
        />
        <StatsCard
          title="Doctors on Shift"
          value={patientStats.doctorsAvailable}
          icon={Activity}
          iconBg="bg-sky-50 dark:bg-sky-950/40"
          iconColor="text-sky-600 dark:text-sky-400"
          valueColor="text-sky-600 dark:text-sky-400"
        />
        <StatsCard
          title="Completed Visits"
          value={patientStats.completedVisits}
          icon={VerifiedIcon}
          iconBg="bg-teal-50 dark:bg-teal-950/40"
          iconColor="text-teal-600 dark:text-teal-400"
          valueColor="text-teal-600 dark:text-teal-400"
        />
        <StatsCard
          title="Emergency Cases"
          value={patientStats.emergencyCases}
          icon={AlertTriangle}
          iconBg="bg-rose-50 dark:bg-rose-950/40"
          iconColor="text-rose-600 dark:text-rose-400"
          valueColor="text-rose-600 dark:text-rose-400"
        />
      </div>

      {/* Patient Activity Line Chart Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-gray-700">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Daily Patient Influx & Department Attendance
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Comparative volume breakdown across hospital outpatient clinics
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS.info.DEFAULT }} />
              Total Patients
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS.primary.dark }} />
              Checked-In
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS.success.DEFAULT }} />
              Completed
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS.danger.DEFAULT }} />
              Emergency
            </span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={filteredData}>
            <XAxis dataKey="department" stroke="#94a3b8" tick={{ fontSize: 11 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                borderRadius: "12px",
                color: "#f8fafc",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="patients"
              stroke={COLORS.info.DEFAULT}
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="checkedIn"
              stroke={COLORS.primary.dark}
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="completedVisits"
              stroke={COLORS.success.DEFAULT}
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="emergencyCases"
              stroke={COLORS.danger.DEFAULT}
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Patient Visit Data Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-gray-700">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Patient Encounter Journal
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Filtered clinic encounters and attendance telemetry
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Select
              defaultValue="all"
              onChange={(value) => setFilter(value)}
              className="w-32 rounded-xl"
            >
              <Option value="all">All Records</Option>
              <Option value="today">Today</Option>
              <Option value="week">Past 7 Days</Option>
              <Option value="month">This Month</Option>
            </Select>

            <Button
              type="primary"
              icon={<Printer size={14} />}
              onClick={() => toast.success("Exporting encounter logs...")}
              className="rounded-xl flex items-center font-medium bg-primary hover:bg-primary-dark"
            >
              Export
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          className="overflow-x-auto"
        />
      </div>

      {/* Appointment Status Analysis Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-gray-700">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" />
              Appointment Outcome Distribution
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Cumulative breakdown of consultation bookings, completions and cancellations
            </p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={appointmentStatusData}>
            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 11 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                borderRadius: "12px",
                color: "#f8fafc",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke={COLORS.primary.DEFAULT}
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PatientDashboard;
