import React, { useMemo, useState } from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import { Download, Filter, Pill, CheckCircle2 } from "lucide-react";
import type { Medication } from "../../types/pharmacy";
import { mockMedications } from "../../data/pharmacy";
import MedicationFilters from "../../components/pharmacy/MedicationFilters";

const Medications: React.FC = () => {
  const [data] = useState<Medication[]>(mockMedications);
  const [showFilters, setShowFilters] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [stockLevel, setStockLevel] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setStockLevel("all");
    setDateRange(null);
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toString().includes(search);

      const matchesCategory =
        category === "all" || item.category === category;

      const matchesStock =
        stockLevel === "all" || item.status === stockLevel;

      const matchesDate =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(item.expiryDate).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStock &&
        matchesDate
      );
    });
  }, [data, search, category, stockLevel, dateRange]);

  const exportCSV = () => {
    const csvRows = [
      ["ID", "Name", "Category", "Stock", "Unit Price", "Expiry Date", "Status"],
      ...filteredData.map((item) => [
        item.id,
        item.name,
        item.category,
        item.stock,
        item.unitPrice,
        item.expiryDate,
        item.status,
      ]),
    ];

    const blob = new Blob(
      [csvRows.map((row) => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "medications.csv";
    link.click();
  };

  const columns: ColumnsType<Medication> = [
    {
      title: "Med ID",
      dataIndex: "id",
      width: 90,
      render: (id) => <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">#{id}</span>,
    },
    {
      title: "Medication Name",
      dataIndex: "name",
      render: (name) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{name}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (cat) => (
        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
          {cat}
        </span>
      ),
    },
    {
      title: "Stock Quantity",
      dataIndex: "stock",
      sorter: (a, b) => a.stock - b.stock,
      render: (stock: number) => (
        <span className={`text-xs font-semibold ${stock <= 10 ? "text-rose-600 font-bold" : "text-slate-800 dark:text-slate-200"}`}>
          {stock.toLocaleString()} units
        </span>
      ),
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      sorter: (a, b) => a.unitPrice - b.unitPrice,
      render: (price: number) => (
        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
          ₦{price.toLocaleString()}
        </span>
      ),
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      render: (date) => <span className="text-xs text-slate-600 dark:text-slate-400">{date}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        if (status === "in_stock")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              In Stock
            </span>
          );
        if (status === "low_stock")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
              Low Stock
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
            Out of Stock
          </span>
        );
      },
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
              <CheckCircle2 size={12} /> Formulary Active
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Pill className="h-6 w-6 text-primary" />
            Hospital Formulary & Medications Directory
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Maintain authorized hospital pharmaceuticals, therapeutic categories, retail pricing and inventory balance
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
            Showing <strong>{filteredData.length}</strong> formulary items
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
          <MedicationFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            stockLevel={stockLevel}
            setStockLevel={setStockLevel}
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
    </div>
  );
};

export default Medications;
