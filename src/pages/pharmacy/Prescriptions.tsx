import React, { useMemo, useState } from "react";
import { Table, Button, Space, Drawer, Modal, InputNumber, message, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import { Download, Filter, Eye, CheckCircle2, Pill, Printer } from "lucide-react";
import type { Prescription } from "../../types/pharmacy";
import { mockPrescriptions, mockMedications } from "../../data/pharmacy";
import PrescriptionFilters from "../../components/pharmacy/PrescriptionsFilter";

const Prescriptions: React.FC = () => {
  const [data, setData] = useState<Prescription[]>(mockPrescriptions);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dispenseModalOpen, setDispenseModalOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [paymentStatus, setPaymentStatus] = useState("all");
  const [doctor, setDoctor] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const resetFilters = () => {
    setSearch("");
    setStatus("all");
    setPaymentStatus("all");
    setDoctor("all");
    setDateRange(null);
  };

  const updateStatus = (id: number, newStatus: any) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (newStatus === "dispensed") {
            return {
              ...item,
              status: "dispensed",
              dispensedAt: dayjs().format("YYYY-MM-DD HH:mm"),
            };
          }
          return { ...item, status: newStatus };
        }
        return item;
      })
    );
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.patientName.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toString().includes(search);

      const matchesStatus =
        status === "all" || item.status === status;

      const matchesPayment =
        paymentStatus === "all" || item.paymentStatus === paymentStatus;

      const matchesDoctor =
        doctor === "all" || item.doctorName === doctor;

      const matchesDate =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(item.createdAt).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPayment &&
        matchesDoctor &&
        matchesDate
      );
    });
  }, [data, search, status, paymentStatus, doctor, dateRange]);

  const exportCSV = () => {
    const csvRows = [
      ["ID", "Patient", "Doctor", "Total", "Status", "Payment", "Date"],
      ...filteredData.map((item) => [
        item.id,
        item.patientName,
        item.doctorName,
        item.totalAmount,
        item.status,
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
    link.download = "prescriptions.csv";
    link.click();
  };

  const renderTimeline = (prescription: Prescription) => (
    <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-gray-800 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-gray-700">
      <div>
        <p className="font-semibold text-slate-800 dark:text-slate-200">Prescribed</p>
        <p className="text-[11px] text-slate-500 mt-0.5">{prescription.createdAt}</p>
      </div>

      <div>
        <p className="font-semibold text-slate-800 dark:text-slate-200">Payment</p>
        <p className="text-[11px] text-slate-500 mt-0.5">{prescription.paidAt || "Pending Cashier"}</p>
      </div>

      <div>
        <p className="font-semibold text-slate-800 dark:text-slate-200">Dispensed</p>
        <p className="text-[11px] text-slate-500 mt-0.5">{prescription.dispensedAt || "Awaiting Dispense"}</p>
      </div>
    </div>
  );

  const columns: ColumnsType<Prescription> = [
    {
      title: "Rx ID",
      dataIndex: "id",
      render: (id) => <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">#{id}</span>,
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      render: (p) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{p}</span>,
    },
    {
      title: "Prescribing Physician",
      dataIndex: "doctorName",
      render: (d) => <span className="text-xs text-slate-700 dark:text-slate-300">{d}</span>,
    },
    {
      title: "Items",
      render: (_, record) => (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
          <Pill size={11} /> {record.medications.length} items
        </span>
      ),
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      render: (amount: number) => (
        <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">
          ₦{amount.toLocaleString()}
        </span>
      ),
    },
    {
      title: "Dispense Status",
      dataIndex: "status",
      render: (status: string) => {
        if (status === "dispensed")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              Dispensed
            </span>
          );
        if (status === "pending")
          return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400">
              Pending
            </span>
          );
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
            Cancelled
          </span>
        );
      },
    },
    {
      title: "Billing",
      dataIndex: "paymentStatus",
      render: (payment: string) =>
        payment === "paid" ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
            Paid
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
            Unpaid
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
        <Space size="small">
          <Tooltip title="View prescription details">
            <button
              type="button"
              onClick={() => {
                setSelectedPrescription(record);
                setDrawerOpen(true);
              }}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <Eye size={14} />
            </button>
          </Tooltip>

          <Button
            size="small"
            type="primary"
            disabled={
              record.paymentStatus !== "paid" ||
              record.status === "dispensed"
            }
            onClick={() => {
              setSelectedPrescription(record);
              setDispenseModalOpen(true);
            }}
            className="rounded-lg text-xs font-medium"
          >
            Dispense
          </Button>
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
              <CheckCircle2 size={12} /> Active Rx Queue
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Pill className="h-6 w-6 text-primary" />
            Prescription Management & Dispensing
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Verify physician prescriptions, inspect patient medication orders, validate cashier payments and dispense
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
            Showing <strong>{filteredData.length}</strong> prescription orders
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
          <PrescriptionFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
            doctor={doctor}
            setDoctor={setDoctor}
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

      {/* Drawer */}
      <Drawer
        title="Prescription Details & Fulfillment"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={480}
      >
        {selectedPrescription && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Rx ID:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">#{selectedPrescription.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedPrescription.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="text-slate-800 dark:text-slate-200">{selectedPrescription.doctorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedPrescription.createdAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment:</span>
                <span className={`font-semibold ${selectedPrescription.paymentStatus === "paid" ? "text-emerald-600" : "text-rose-600"}`}>
                  {selectedPrescription.paymentStatus.toUpperCase()}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Prescribed Formulary
              </h4>
              <div className="divide-y divide-slate-100 dark:divide-gray-700 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden">
                {selectedPrescription.medications.map((med, index) => (
                  <div key={index} className="p-3 bg-white dark:bg-gray-800 flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{med.name}</span>
                    <span className="text-xs text-slate-500">Qty: 1 Unit</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex justify-between items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Total Billed</span>
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                ₦{selectedPrescription.totalAmount.toLocaleString()}
              </span>
            </div>

            {renderTimeline(selectedPrescription)}

            <Button
              type="primary"
              icon={<Printer size={14} />}
              onClick={() => window.print()}
              className="w-full rounded-xl h-10 font-medium"
            >
              Print Prescription Receipt
            </Button>
          </div>
        )}
      </Drawer>

      {/* Dispense Modal */}
      <Modal
        title="Confirm Medication Dispense"
        open={dispenseModalOpen}
        onCancel={() => setDispenseModalOpen(false)}
        onOk={() => {
          if (!selectedPrescription) return;

          if (selectedPrescription.paymentStatus !== "paid") {
            message.error("Payment must be completed before dispensing.");
            return;
          }

          if (selectedPrescription.status === "dispensed") {
            message.warning("Already dispensed.");
            return;
          }

          // Deduct stock
          selectedPrescription.medications.forEach((medName) => {
            const medication = mockMedications.find(
              (m) => m.name === medName.name
            );
            if (medication) {
              medication.stock -= 1;
            }
          });

          updateStatus(selectedPrescription.id, "dispensed");

          message.success("Prescription dispensed successfully and formulary stock decremented.");
          setDispenseModalOpen(false);
        }}
      >
        {selectedPrescription && (
          <div className="space-y-4 py-2">
            <p className="text-xs text-slate-500">
              Verify units to decrement from hospital inventory before confirming:
            </p>
            {selectedPrescription.medications.map((med, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-gray-800">
                <span className="font-medium text-sm text-slate-800 dark:text-slate-200">{med.name}</span>
                <InputNumber min={1} defaultValue={1} className="rounded-lg" />
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Prescriptions;
