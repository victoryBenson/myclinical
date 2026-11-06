import React, { useMemo, useState } from "react";
import {
  Table,
  Button,
  Drawer,
  Modal,
  Select,
  InputNumber,
  message,
  Tooltip,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download, Filter, Plus, DollarSign, CheckCircle2, Eye, Printer, Trash2 } from "lucide-react";
import dayjs from "../../utils/dayJs";

import SalesFilters from "../../components/pharmacy/SalesFilter";
import {
  mockMedications,
  mockSales,
  mockPatients,
} from "../../data/pharmacy";
import type { Sale, SaleItem } from "../../types/pharmacy";

const { Option } = Select;

const PharmacySales: React.FC = () => {
  const [data, setData] = useState<Sale[]>(mockSales);
  const [search, setSearch] = useState("");
  const [patient, setPatient] = useState("all");
  const [paymentStatus, setPaymentStatus] = useState("all");
  const [dateRange, setDateRange] = useState<[any, any] | null>(null);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [patientName, setPatientName] = useState("");
  const [payment, setPayment] = useState<"paid" | "pending">("paid");
  const [items, setItems] = useState<SaleItem[]>([]);

  const filteredData = useMemo(() => {
    return data.filter((sale) => {
      const matchesSearch =
        sale.patientName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        sale.id.toString().includes(search);

      const matchesPatient =
        patient === "all" || sale.patientName === patient;

      const matchesPayment =
        paymentStatus === "all" ||
        sale.paymentStatus === paymentStatus;

      const matchesDate =
        !dateRange ||
        (dateRange[0] &&
          dateRange[1] &&
          dayjs(sale.createdAt).isAfter(dateRange[0]) &&
          dayjs(sale.createdAt).isBefore(dateRange[1]));

      return (
        matchesSearch &&
        matchesPatient &&
        matchesPayment &&
        matchesDate
      );
    });
  }, [data, search, patient, paymentStatus, dateRange]);

  const handleReset = () => {
    setSearch("");
    setPatient("all");
    setPaymentStatus("all");
    setDateRange(null);
  };

  const exportCSV = () => {
    const csvRows = [
      ["ID", "Patient", "Items", "Total", "Payment", "Created"],
      ...filteredData.map((item) => [
        item.id,
        item.patientName,
        item.items.length,
        item.totalAmount,
        item.paymentStatus,
        item.createdAt,
      ]),
    ];

    const blob = new Blob(
      [csvRows.map((row) => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "pharmacy_sales.csv";
    link.click();
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        medicationId: 0,
        medicationName: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const removeItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const updateItem = (
    index: number,
    field: keyof SaleItem,
    value: any
  ) => {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setItems(updated);
  };

  const totalAmount = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  }, [items]);

  const createSale = () => {
    if (items.length === 0) {
      message.error("Add at least one medication");
      return;
    }

    const newSale: Sale = {
      id: Date.now(),
      patientName: patientName || "Walk-in Patient",
      items,
      totalAmount,
      paymentStatus: payment,
      createdAt: dayjs().format("YYYY-MM-DD"),
    };

    setData([...data, newSale]);
    message.success("Sale transaction recorded successfully");

    setItems([]);
    setPatientName("");
    setModalOpen(false);
  };

  const columns: ColumnsType<Sale> = [
    {
      title: "Invoice #",
      dataIndex: "id",
      render: (id) => <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">#{id}</span>,
    },
    {
      title: "Customer / Patient",
      dataIndex: "patientName",
      render: (p) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{p}</span>,
    },
    {
      title: "Medications",
      render: (_, record) => (
        <span className="text-xs text-slate-700 dark:text-slate-300">
          {record.items.length} line item(s)
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
      title: "Payment",
      render: (_, record) =>
        record.paymentStatus === "paid" ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
            Paid
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
            Pending
          </span>
        ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-1.5">
          <Tooltip title="View transaction receipt">
            <button
              type="button"
              onClick={() => {
                setSelectedSale(record);
                setDrawerOpen(true);
              }}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <Eye size={14} />
            </button>
          </Tooltip>
        </div>
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
              <CheckCircle2 size={12} /> Point-of-Sale Live
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            Pharmacy Sales & Retail Dispensary
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Process counter drug purchases, outpatient billing, receipt reconciliation and settlement records
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="primary"
            icon={<Plus size={15} />}
            onClick={() => setModalOpen(true)}
            className="rounded-xl font-medium shadow-sm h-10 px-4"
          >
            New Sale Transaction
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
            Showing <strong>{filteredData.length}</strong> sales transactions
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
          <SalesFilters
            search={search}
            setSearch={setSearch}
            patient={patient}
            setPatient={setPatient}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
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
          scroll={{ x: 1000 }}
        />
      </div>

      {/* Drawer */}
      <Drawer
        title="Dispensary Receipt Details"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={420}
      >
        {selectedSale && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Receipt #:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">#{selectedSale.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Customer:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedSale.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Status:</span>
                <span className={`font-semibold ${selectedSale.paymentStatus === "paid" ? "text-emerald-600" : "text-amber-600"}`}>
                  {selectedSale.paymentStatus.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Transaction Date:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedSale.createdAt}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Purchased Formulary
              </h4>
              <div className="divide-y divide-slate-100 dark:divide-gray-700 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden">
                {selectedSale.items.map((item, index) => (
                  <div key={index} className="p-3 bg-white dark:bg-gray-800 flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item.medicationName}</span>
                    <span className="text-xs text-slate-500">{item.quantity} units @ ₦{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex justify-between items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Total Billed</span>
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                ₦{selectedSale.totalAmount.toLocaleString()}
              </span>
            </div>

            <Button
              type="primary"
              icon={<Printer size={14} />}
              onClick={() => window.print()}
              className="w-full rounded-xl h-10 font-medium"
            >
              Print Receipt Copy
            </Button>
          </div>
        )}
      </Drawer>

      {/* New Sale Modal */}
      <Modal
        title="Record New Pharmacy POS Sale"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={createSale}
        width={650}
      >
        <div className="space-y-4 py-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Select Patient / Walk-in Customer
            </label>
            <Select
              placeholder="Select patient or walk-in"
              value={patientName || undefined}
              onChange={setPatientName}
              className="w-full h-10 rounded-xl"
            >
              <Option value="Walk-in Patient">Walk-in Patient</Option>
              {mockPatients.map((p) => (
                <Option key={p.id} value={p.name}>
                  {p.name}
                </Option>
              ))}
            </Select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Settlement Status
            </label>
            <Select
              value={payment}
              onChange={(value: "paid" | "pending") => setPayment(value)}
              className="w-full h-10 rounded-xl"
            >
              <Option value="paid">Paid (Cash / POS / Card)</Option>
              <Option value="pending">Pending Cashier</Option>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Medication Items
              </label>
              <Button size="small" onClick={addItem} className="rounded-lg">
                + Add Item
              </Button>
            </div>

            {items.map((item, index) => (
              <div key={index} className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
                <Select
                  placeholder="Select Medication"
                  className="flex-1 min-w-[180px]"
                  value={item.medicationName || undefined}
                  onChange={(value) => {
                    const med = mockMedications.find((m) => m.name === value);
                    updateItem(index, "medicationName", value);
                    updateItem(index, "medicationId", med?.id);
                    updateItem(index, "price", med?.unitPrice || 0);
                  }}
                >
                  {mockMedications.map((m) => (
                    <Option key={m.id} value={m.name}>
                      {m.name}
                    </Option>
                  ))}
                </Select>

                <InputNumber
                  min={1}
                  value={item.quantity}
                  placeholder="Qty"
                  className="w-20 rounded-lg"
                  onChange={(v) => updateItem(index, "quantity", v)}
                />

                <span className="font-semibold text-xs text-slate-700 dark:text-slate-300 w-24 text-right">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>

                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                  title="Remove item"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center p-3 rounded-xl bg-primary/5 border border-primary/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Total Billed</span>
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              ₦{totalAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PharmacySales;
