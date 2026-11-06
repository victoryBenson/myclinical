import React, { useMemo, useState } from "react";
import {
  Table,
  Button,
  Space,
  Drawer,
  Modal,
  Select,
  InputNumber,
  message,
  Tooltip,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download, Filter, Plus, ShoppingCart, CheckCircle2, Eye, PackageCheck } from "lucide-react";
import dayjs from "../../utils/dayJs";

import {
  mockPurchaseOrders,
  mockSuppliers,
  mockMedications,
} from "../../data/pharmacy";
import type { PurchaseItem, PurchaseOrder } from "../../types/pharmacy";
import PurchaseOrderFilters from "../../components/pharmacy/PurchaseOrderFilters";

const { Option } = Select;

const PurchaseOrders: React.FC = () => {
  const [data, setData] = useState<PurchaseOrder[]>(mockPurchaseOrders);
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState<[any, any] | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const [selectedOrder, setSelectedOrder] =
    useState<PurchaseOrder | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [supplier, setSupplier] = useState("");
  const [status, setStatus] = useState("all");

  const [items, setItems] = useState<PurchaseItem[]>([]);

  const filteredData = useMemo(() => {
    return data.filter((order) => {
      const matchesSearch =
        order.supplierName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        order.id.toString().includes(search);

      const matchesSupplier =
        !supplier || order.supplierName === supplier;

      const matchesStatus =
        status === "all" || order.status === status;

      const matchesDate =
        !dateRange ||
        (dayjs(order.createdAt).isAfter(dateRange[0]) &&
          dayjs(order.createdAt).isBefore(dateRange[1]));

      return (
        matchesSearch &&
        matchesSupplier &&
        matchesStatus &&
        matchesDate
      );
    });
  }, [data, search, supplier, status, dateRange]);

  const handleReset = () => {
    setSearch("");
    setSupplier("");
    setStatus("all");
    setDateRange([null, null]);
  };

  const exportCSV = () => {
    const csvRows = [
      ["ID", "Supplier", "Items", "Total", "Status", "Created"],
      ...filteredData.map((item) => [
        item.id,
        item.supplierName,
        item.items.length,
        item.totalAmount,
        item.status,
        item.createdAt,
      ]),
    ];

    const blob = new Blob(
      [csvRows.map((row) => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "purchase_orders.csv";
    link.click();
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        medicationId: 0,
        medicationName: "",
        quantity: 1,
        unitCost: 0,
      },
    ]);
  };

  const updateItem = (index: number, field: keyof PurchaseItem, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const createOrder = () => {
    if (!supplier) {
      message.error("Please select a supplier");
      return;
    }
    if (items.length === 0) {
      message.error("Please add at least one medication item");
      return;
    }

    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.unitCost,
      0
    );

    const newOrder: PurchaseOrder = {
      id: Date.now(),
      supplierName: supplier,
      items,
      totalAmount: total,
      status: "pending",
      createdAt: dayjs().format("YYYY-MM-DD"),
    };

    setData([...data, newOrder]);
    message.success("Purchase order created successfully");

    setItems([]);
    setSupplier("");
    setModalOpen(false);
  };

  const receiveOrder = (order: PurchaseOrder) => {
    setData((prev) =>
      prev.map((o) =>
        o.id === order.id
          ? {
              ...o,
              status: "received",
              receivedAt: dayjs().format("YYYY-MM-DD"),
            }
          : o
      )
    );

    message.success(`Stock for PO #${order.id} received and hospital formulary updated`);
  };

  const columns: ColumnsType<PurchaseOrder> = [
    {
      title: "PO #",
      dataIndex: "id",
      render: (id) => <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">#{id}</span>,
    },
    {
      title: "Supplier",
      dataIndex: "supplierName",
      render: (s) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{s}</span>,
    },
    {
      title: "Order Items",
      render: (_, record) => (
        <span className="text-xs text-slate-700 dark:text-slate-300">
          {record.items.length} product(s)
        </span>
      ),
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      render: (total: number) => (
        <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">
          ₦{total.toLocaleString()}
        </span>
      ),
    },
    {
      title: "Status",
      render: (_, record) => {
        if (record.status === "received")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              Received
            </span>
          );
        if (record.status === "pending")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
              Pending
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 dark:bg-blue-950/40 dark:text-blue-400">
            Ordered
          </span>
        );
      },
    },
    {
      title: "Date Created",
      dataIndex: "createdAt",
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="View order items">
            <button
              type="button"
              onClick={() => {
                setSelectedOrder(record);
                setDrawerOpen(true);
              }}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <Eye size={14} />
            </button>
          </Tooltip>

          {record.status !== "received" && (
            <Button
              size="small"
              type="primary"
              icon={<PackageCheck size={13} />}
              onClick={() => receiveOrder(record)}
              className="rounded-lg text-xs font-medium"
            >
              Receive
            </Button>
          )}
        </Space>
      ),
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
              <CheckCircle2 size={12} /> Procurement Channel
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            Pharmacy Purchase Orders & Requisitions
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Issue pharmaceutical supplier purchase orders, track delivery manifests, and register inbound consignments
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="primary"
            icon={<Plus size={15} />}
            onClick={() => setModalOpen(true)}
            className="rounded-xl font-medium shadow-sm h-10 px-4"
          >
            Create Purchase Order
          </Button>
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
            Showing <strong>{filteredData.length}</strong> purchase requisitions
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
          <PurchaseOrderFilters
            search={search}
            setSearch={setSearch}
            supplier={supplier}
            setSupplier={setSupplier}
            status={status}
            setStatus={setStatus}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onReset={handleReset}
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

      {/* Drawer */}
      <Drawer
        title="Purchase Order Manifest Details"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={480}
      >
        {selectedOrder && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">PO Number:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">#{selectedOrder.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Supplier:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedOrder.supplierName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Order Status:</span>
                <span className="font-semibold text-emerald-600">{selectedOrder.status.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Created:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedOrder.createdAt}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Requisitioned Items
              </h4>
              <div className="divide-y divide-slate-100 dark:divide-gray-700 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden">
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="p-3 bg-white dark:bg-gray-800 flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item.medicationName}</span>
                    <span className="text-xs text-slate-500">{item.quantity} units @ ₦{item.unitCost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex justify-between items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Total Purchase Value</span>
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                ₦{selectedOrder.totalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </Drawer>

      {/* Create Order Modal */}
      <Modal
        title="Create Pharmaceutical Purchase Order"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={createOrder}
        width={560}
      >
        <div className="space-y-4 py-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Select Supplier
            </label>
            <Select
              placeholder="Select Authorized Supplier"
              value={supplier || undefined}
              onChange={setSupplier}
              className="w-full h-10 rounded-xl"
            >
              {mockSuppliers.map((s) => (
                <Option key={s.id} value={s.name}>
                  {s.name}
                </Option>
              ))}
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Line Items
              </label>
              <Button size="small" onClick={addItem} className="rounded-lg">
                + Add Item
              </Button>
            </div>

            {items.map((_, index) => (
              <div key={index} className="p-3 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Item #{index + 1}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Select
                    placeholder="Medication"
                    className="w-full"
                    onChange={(value) => {
                      const med = mockMedications.find((m) => m.name === value);
                      updateItem(index, "medicationName", value);
                      updateItem(index, "medicationId", med?.id);
                    }}
                  >
                    {mockMedications.map((m) => (
                      <Option key={m.id} value={m.name}>
                        {m.name}
                      </Option>
                    ))}
                  </Select>

                  <InputNumber
                    placeholder="Quantity"
                    min={1}
                    className="w-full rounded-lg"
                    onChange={(v) => updateItem(index, "quantity", v)}
                  />

                  <InputNumber
                    placeholder="Unit Cost (₦)"
                    min={0}
                    className="w-full rounded-lg"
                    onChange={(v) => updateItem(index, "unitCost", v)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PurchaseOrders;
