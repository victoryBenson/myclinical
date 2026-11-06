import React, { useMemo, useState } from "react";
import { Button, Table, Drawer, Select, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  Pill,
  Boxes,
  AlertTriangle,
  Clock,
  DollarSign,
  Eye,
  Printer,
  CheckCircle2,
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

import { pharmacyStats, recentSales } from "../../data/pharmacy";
import StatsCard from "../../components/ui/StatsCard";
import { COLORS } from "../../theme/themeConfig";

const { Option } = Select;

interface Sale {
  id: number;
  invoiceNo: string;
  patient: string;
  amount: number;
  date: string;
  status: string;
}

const PharmacyDashboard: React.FC = () => {
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleView = (record: Sale) => {
    setSelectedSale(record);
    setOpen(true);
  };

  const handlePrint = (record: Sale) => {
    toast.success(`Receipt for ${record.invoiceNo} sent to printer!`);
  };

  const filteredSales = useMemo(() => {
    if (filter === "all") return recentSales;

    const now = new Date();

    return recentSales.filter((sale) => {
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

  const columns: ColumnsType<Sale> = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id) => <span className="font-mono text-xs font-semibold text-slate-500">#{id}</span>,
    },
    {
      title: "Invoice",
      dataIndex: "invoiceNo",
      render: (inv) => (
        <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">
          {inv}
        </span>
      ),
    },
    {
      title: "Patient",
      dataIndex: "patient",
      render: (p) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{p}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
      render: (amount: number) => (
        <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">
          ₦{amount.toLocaleString()}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        const isPaid = status === "Paid";
        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              isPaid
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400"
                : "bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-1.5">
          <button
            type="button"
            onClick={() => handleView(record)}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            title="View sale details"
          >
            <Eye size={14} />
          </button>
          <button
            type="button"
            onClick={() => handlePrint(record)}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            title="Print receipt"
          >
            <Printer size={14} />
          </button>
        </div>
      ),
    },
  ];

  const totalRevenue = filteredSales.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

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
              <CheckCircle2 size={12} /> Dispensary Active
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Pill className="h-6 w-6 text-primary" />
            Hospital Pharmacy Operations & Formulary
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Real-time tracking of medications, stock thresholds, prescription fulfillment, and point-of-sale telemetry
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Tag color="cyan" className="font-semibold text-xs py-1 px-3 rounded-lg">
            INVENTORY SYNCED
          </Tag>
        </div>
      </div>

      {/* 5-Card Operational Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <StatsCard
          title="Medication Items"
          value={pharmacyStats.totalMedications}
          icon={Pill}
          iconBg="bg-primary/10"
          iconColor="text-primary"
        />
        <StatsCard
          title="Total Stock Units"
          value={pharmacyStats.totalStockUnits.toLocaleString()}
          icon={Boxes}
          iconBg="bg-info-soft dark:bg-info-dark/30"
          iconColor="text-info"
        />
        <StatsCard
          title="Low Stock Alerts"
          value={pharmacyStats.lowStock}
          icon={AlertTriangle}
          iconBg="bg-danger-soft dark:bg-danger-dark/30"
          iconColor="text-danger"
          valueColor="text-danger"
        />
        <StatsCard
          title="Expiring Soon"
          value={pharmacyStats.expiringSoon}
          icon={Clock}
          iconBg="bg-warning-soft dark:bg-warning-dark/30"
          iconColor="text-warning"
          valueColor="text-warning"
        />
        <StatsCard
          title="Today's Sales"
          value={`₦${pharmacyStats.todaySales.toLocaleString()}`}
          icon={DollarSign}
          iconBg="bg-success-soft dark:bg-success-dark/30"
          iconColor="text-success"
          valueColor="text-success"
        />
      </div>

      {/* Sales Trend Line Chart Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-gray-700">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" />
              Prescription & Sales Revenue Trajectory
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Invoice volume and revenue progression across dispensary shifts
            </p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={filteredSales}>
            <XAxis dataKey="invoiceNo" stroke="#94a3b8" tick={{ fontSize: 11 }} />
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
              dataKey="amount"
              stroke={COLORS.primary.DEFAULT}
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Sales Table Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-gray-700">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Recent Pharmacy Transactions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Dispensed medication invoices and cashier receipts
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Select
              defaultValue="all"
              onChange={(value) => setFilter(value)}
              className="w-32 rounded-xl"
            >
              <Option value="all">All Shifts</Option>
              <Option value="today">Today</Option>
              <Option value="week">Past 7 Days</Option>
              <Option value="month">This Month</Option>
            </Select>

            <Button
              type="primary"
              className="rounded-xl font-medium shadow-sm"
              onClick={() => toast.success("Filtered to all active sales transactions")}
            >
              View All Sales
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredSales}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          className="overflow-x-auto"
        />

        <div className="mt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-700 pt-4">
          <span className="text-xs text-slate-500">
            Showing <strong>{filteredSales.length}</strong> transactions in selected window
          </span>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Shift Gross Revenue
            </p>
            <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              ₦{totalRevenue.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>

      <Drawer
        title="Dispensary Sale Receipt"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={420}
      >
        {selectedSale && (
          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Invoice:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{selectedSale.invoiceNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedSale.patient}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedSale.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-semibold text-emerald-600">{selectedSale.status}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex justify-between items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Total Billed</span>
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                ₦{selectedSale.amount.toLocaleString()}
              </span>
            </div>

            <Button
              type="primary"
              icon={<Printer size={14} />}
              className="w-full rounded-xl h-10 font-medium"
              onClick={() => handlePrint(selectedSale)}
            >
              Print Receipt Copy
            </Button>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default PharmacyDashboard;
