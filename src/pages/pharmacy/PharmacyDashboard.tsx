import React, { useMemo, useState } from "react";
import { Button, Table, Drawer, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  Pill,
  Boxes,
  AlertTriangle,
  Clock,
  DollarSign,
  Eye,
  Printer,
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
import { pharmacyStats, recentSales } from "../../data/pharmacy";
import StatsCard from "../../components/ui/StatsCard";

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
    toast.success("Receipt sent to printer!", { id: record.invoiceNo });
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
    { title: "ID", dataIndex: "id" },
    { title: "Invoice", dataIndex: "invoiceNo" },
    { title: "Patient", dataIndex: "patient" },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
      render: (amount: number) => (
        <span className="font-semibold">
          ₦{amount.toLocaleString()}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
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
            icon={<Eye size={14} />}
            onClick={() => handleView(record)}
          />
          <Button
            size="small"
            icon={<Printer size={14} />}
            onClick={() => handlePrint(record)}
          />
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

      <SectionHeader
        title="Pharmacy Dashboard"
        subtitle="Overview of pharmacy operations and performance"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <StatsCard
          title="Medications"
          value={pharmacyStats.totalMedications}
          icon={Pill}
          iconBg="bg-primary/10"
          iconColor="text-primary"
        />
        <StatsCard
          title="Total Stock Units"
          value={pharmacyStats.totalStockUnits.toLocaleString()}
          icon={Boxes}
          iconBg="bg-blue-100 dark:bg-blue-900"
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Low Stock"
          value={pharmacyStats.lowStock}
          icon={AlertTriangle}
          iconBg="bg-red-100 dark:bg-red-900"
          iconColor="text-red-600"
          valueColor="text-red-600"
        />
        <StatsCard
          title="Expiring Soon"
          value={pharmacyStats.expiringSoon}
          icon={Clock}
          iconBg="bg-yellow-100 dark:bg-yellow-900"
          iconColor="text-yellow-600"
          valueColor="text-yellow-600"
        />
        <StatsCard
          title="Today Sales"
          value={`₦${pharmacyStats.todaySales.toLocaleString()}`}
          icon={DollarSign}
          iconBg="bg-green-100 dark:bg-green-900"
          iconColor="text-green-600"
          valueColor="text-green-600"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
        <h3 className="font-semibold mb-4">Sales Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={filteredSales}>
            <XAxis dataKey="invoiceNo" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#16a34a"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sales Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">
            Recent Sales
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

            <Button type="primary">
              View All Sales
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredSales}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />

        <div className="mt-4 flex justify-end border-t pt-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Revenue
            </p>
            <h3 className="text-lg font-semibold text-green-600">
              ₦{totalRevenue.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>

      <Drawer
        title="Sale Details"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={400}
      >
        {selectedSale && (
          <div className="space-y-3 text-sm">
            <p><strong>Invoice:</strong> {selectedSale.invoiceNo}</p>
            <p><strong>Patient:</strong> {selectedSale.patient}</p>
            <p><strong>Status:</strong> {selectedSale.status}</p>
            <p><strong>Date:</strong> {selectedSale.date}</p>
            <p className="text-lg font-semibold text-green-600">
              ₦{selectedSale.amount.toLocaleString()}
            </p>
          </div>
        )}
      </Drawer>

    </div>
  );
};

export default PharmacyDashboard;