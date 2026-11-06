import React, { useMemo, useState } from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import { Download, Filter, Boxes, CheckCircle2 } from "lucide-react";
import { mockInventory, type InventoryItem } from "../../data/pharmacy";
import InventoryFilters from "../../components/pharmacy/InventoryFilters";

const Inventory: React.FC = () => {
  const [data] = useState<InventoryItem[]>(mockInventory);
  const [showFilters, setShowFilters] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [supplier, setSupplier] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const resetFilters = () => {
    setSearch("");
    setStatus("all");
    setSupplier("all");
    setDateRange(null);
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.medicationName.toLowerCase().includes(search.toLowerCase()) ||
        item.batchNumber.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "all" || item.status === status;

      const matchesSupplier =
        supplier === "all" || item.supplier === supplier;

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
        matchesStatus &&
        matchesSupplier &&
        matchesDate
      );
    });
  }, [data, search, status, supplier, dateRange]);

  const exportCSV = () => {
    const csvRows = [
      [
        "ID",
        "Medication",
        "Batch",
        "Supplier",
        "Qty Received",
        "Qty Remaining",
        "Purchase Price",
        "Expiry",
        "Status",
      ],
      ...filteredData.map((item) => [
        item.id,
        item.medicationName,
        item.batchNumber,
        item.supplier,
        item.quantityReceived,
        item.quantityRemaining,
        item.purchasePrice,
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
    link.download = "pharmacy-inventory.csv";
    link.click();
  };

  const columns: ColumnsType<InventoryItem> = [
    {
      title: "Batch ID",
      dataIndex: "id",
      width: 90,
      render: (id) => <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">#{id}</span>,
    },
    {
      title: "Medication",
      dataIndex: "medicationName",
      render: (name) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{name}</span>,
    },
    {
      title: "Batch Number",
      dataIndex: "batchNumber",
      render: (batch) => <span className="font-mono text-xs text-slate-700 dark:text-slate-300">{batch}</span>,
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      render: (sup) => <span className="text-xs text-slate-600 dark:text-slate-400">{sup}</span>,
    },
    {
      title: "Received",
      dataIndex: "quantityReceived",
      sorter: (a, b) => a.quantityReceived - b.quantityReceived,
      render: (val: number) => <span className="text-xs text-slate-700 dark:text-slate-300">{val.toLocaleString()}</span>,
    },
    {
      title: "Remaining",
      dataIndex: "quantityRemaining",
      sorter: (a, b) => a.quantityRemaining - b.quantityRemaining,
      render: (val: number) => (
        <span className={`text-xs font-semibold ${val <= 20 ? "text-amber-600" : "text-emerald-600"}`}>
          {val.toLocaleString()} units
        </span>
      ),
    },
    {
      title: "Cost Price",
      dataIndex: "purchasePrice",
      sorter: (a, b) => a.purchasePrice - b.purchasePrice,
      render: (val: number) => (
        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
          ₦{val.toLocaleString()}
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
        if (status === "active")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              Active
            </span>
          );
        if (status === "expired")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
              Expired
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
            Depleted
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
              <CheckCircle2 size={12} /> Real-time Warehouse Balance
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Boxes className="h-6 w-6 text-primary" />
            Pharmacy Batch Inventory & Stock Control
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Monitor consignment lots, supplier provenance, received quantities, depleted stocks and expiration alerts
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
            Showing <strong>{filteredData.length}</strong> lot consignments
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
          <InventoryFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            supplier={supplier}
            setSupplier={setSupplier}
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
          scroll={{ x: 1050 }}
        />
      </div>
    </div>
  );
};

export default Inventory;
