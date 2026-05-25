import React, { useMemo, useState } from "react";
import {
  Table,
  Tag,
  Button,
  Space,
  Drawer,
  Modal,
  Input,
  Select,
  InputNumber,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download } from "lucide-react";
import dayjs from "../../utils/dayJs";

import SectionHeader from "../../components/ui/SectionHeader";


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
  const [dateRange, setDateRange] = useState<[any,any] | null>(null);
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

    message.success("Purchase order created");

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

    message.success("Stock received and inventory updated");
  };

  const columns: ColumnsType<PurchaseOrder> = [
    { title: "ID", dataIndex: "id" },
    { title: "Supplier", dataIndex: "supplierName" },
    {
      title: "Items",
      render: (_, record) => record.items.length,
    },
    {
      title: "Total (₦)",
      dataIndex: "totalAmount",
    },
    {
      title: "Status",
      render: (_, record) => {
        if (record.status === "pending")
          return <Tag color="orange">Pending</Tag>;
        if (record.status === "received")
          return <Tag color="green">Received</Tag>;
        return <Tag>Ordered</Tag>;
      },
    },
    { title: "Created", dataIndex: "createdAt" },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            onClick={() => {
              setSelectedOrder(record);
              setDrawerOpen(true);
            }}
          >
            View
          </Button>

          {record.status !== "received" && (
            <Button
              size="small"
              type="primary"
              onClick={() => receiveOrder(record)}
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
      <SectionHeader
        title="Purchase Orders"
        subtitle="Manage pharmacy purchase orders"
      />

      <div className="flex justify-between">
        <Button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        <Space>
          <Button
            type="primary"
            onClick={() => setModalOpen(true)}
          >
            Create Purchase
          </Button>

          <Button icon={<Download size={14} />} onClick={exportCSV}>
            Export CSV
          </Button>
        </Space>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
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

      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>

      <Drawer
        title="Purchase Details"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={480}
      >
        {selectedOrder && (
          <div className="space-y-3">
            <p><strong>Supplier:</strong> {selectedOrder.supplierName}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>

            <div>
              <strong>Items</strong>
              <ul className="ml-4 list-disc">
                {selectedOrder.items.map((item, index) => (
                  <li key={index}>
                    {item.medicationName} — {item.quantity} units
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-semibold text-lg">
              Total: ₦{selectedOrder.totalAmount}
            </p>
          </div>
        )}
      </Drawer>

      <Modal
        title="Create Purchase Order"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={createOrder}
      >
        <div className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">Supplier</label>
            <Select
              placeholder="Select Supplier"
              value={supplier}
              onChange={setSupplier}
              style={{ width: "100%" }}
            >
              {mockSuppliers.map((s) => (
                <Option key={s.id} value={s.name}>
                  {s.name}
                </Option>
              ))}
            </Select>
          </div>

          {items.map((item, index) => (
            <div key={index} className="space-y-1">
              <label className="text-sm font-medium">
                Medication Item {index + 1}
              </label>

              <Space style={{ display: "flex" }}>
                <div>
                  <label className="block text-xs mb-1">Medication</label>
                  <Select
                    placeholder="Medication"
                    style={{ width: 180 }}
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
                </div>

                <div>
                  <label className="block text-xs mb-1">Quantity</label>
                  <InputNumber
                    placeholder="Qty"
                    min={1}
                    onChange={(v) => updateItem(index, "quantity", v)}
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1">Unit Cost</label>
                  <InputNumber
                    placeholder="Cost"
                    min={0}
                    onChange={(v) => updateItem(index, "unitCost", v)}
                  />
                </div>
              </Space>
            </div>
          ))}

          <Button onClick={addItem}>Add Medication</Button>
        </div>
      </Modal>
    </div>
  );
};

export default PurchaseOrders;