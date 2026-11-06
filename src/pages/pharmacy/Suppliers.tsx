import React, { useMemo, useState } from "react";
import {
  Table,
  Button,
  Space,
  Drawer,
  Modal,
  Input,
  message,
  Tooltip,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download, Filter, Plus, Truck, CheckCircle2, Eye, Edit3, Power } from "lucide-react";
import dayjs from "../../utils/dayJs";
import { mockSuppliers } from "../../data/pharmacy";
import type { Supplier } from "../../types/pharmacy";
import SuppliersFilters from "../../components/pharmacy/SuppliersFilters";

const Suppliers: React.FC = () => {
  const [data, setData] = useState<Supplier[]>(mockSuppliers);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedSupplier, setSelectedSupplier] =
    useState<Supplier | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [city, setCity] = useState("");

  const [formState, setFormState] = useState<Partial<Supplier>>({});

  const resetForm = () => {
    setFormState({});
  };

  const filteredData = useMemo(() => {
    return data.filter((supplier) => {
      const matchesSearch =
        supplier.name.toLowerCase().includes(search.toLowerCase()) ||
        supplier.contactPerson.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "all" || supplier.status === status;

      const matchesCity =
        !city ||
        supplier.address?.toLowerCase().includes(city.toLowerCase());

      return matchesSearch && matchesStatus && matchesCity;
    });
  }, [data, search, status, city]);

  const exportCSV = () => {
    const csvRows = [
      [
        "ID",
        "Name",
        "Contact Person",
        "Phone",
        "Email",
        "Payment Terms",
        "Status",
        "Created At",
      ],
      ...filteredData.map((item) => [
        item.id,
        item.name,
        item.contactPerson,
        item.phone,
        item.email,
        item.paymentTerms,
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
    link.download = "suppliers.csv";
    link.click();
  };

  const saveSupplier = () => {
    if (!formState.name) {
      message.error("Supplier name is required");
      return;
    }

    if (selectedSupplier) {
      setData((prev) =>
        prev.map((item) =>
          item.id === selectedSupplier.id
            ? { ...item, ...formState }
            : item
        )
      );
      message.success("Supplier updated successfully");
    } else {
      const newSupplier: Supplier = {
        id: Date.now(),
        name: formState.name || "",
        contactPerson: formState.contactPerson || "",
        phone: formState.phone || "",
        email: formState.email || "",
        address: formState.address || "",
        paymentTerms: formState.paymentTerms || "Net 30 Days",
        status: "active",
        createdAt: dayjs().format("YYYY-MM-DD"),
      };
      setData((prev) => [...prev, newSupplier]);
      message.success("Supplier added successfully");
    }

    setModalOpen(false);
    setSelectedSupplier(null);
    resetForm();
  };

  const toggleStatus = (supplier: Supplier) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === supplier.id
          ? {
              ...item,
              status:
                item.status === "active" ? "inactive" : "active",
            }
          : item
      )
    );
    message.success(`Supplier status updated to ${supplier.status === "active" ? "inactive" : "active"}`);
  };

  const columns: ColumnsType<Supplier> = [
    {
      title: "Vendor ID",
      dataIndex: "id",
      render: (id) => <span className="font-mono text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary/5 px-2 py-0.5 rounded-md">#{id}</span>,
    },
    {
      title: "Company Name",
      dataIndex: "name",
      render: (name) => <span className="font-semibold text-xs text-slate-900 dark:text-white">{name}</span>,
    },
    {
      title: "Contact Person",
      dataIndex: "contactPerson",
      render: (c) => <span className="text-xs text-slate-700 dark:text-slate-300">{c}</span>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (p) => <span className="text-xs text-slate-600 dark:text-slate-400">{p}</span>,
    },
    {
      title: "Payment Terms",
      dataIndex: "paymentTerms",
      render: (terms) => (
        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-gray-700 px-2.5 py-0.5 rounded-full">
          {terms}
        </span>
      ),
    },
    {
      title: "Status",
      render: (_, record) =>
        record.status === "active" ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
            Active
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400">
            Inactive
          </span>
        ),
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      render: (d) => <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>,
    },
    {
      title: "Actions",
      align: "center",
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="View supplier profile">
            <button
              type="button"
              onClick={() => {
                setSelectedSupplier(record);
                setDrawerOpen(true);
              }}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <Eye size={14} />
            </button>
          </Tooltip>

          <Tooltip title="Edit supplier">
            <button
              type="button"
              onClick={() => {
                setSelectedSupplier(record);
                setFormState(record);
                setModalOpen(true);
              }}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <Edit3 size={14} />
            </button>
          </Tooltip>

          <Tooltip title={record.status === "active" ? "Deactivate vendor" : "Activate vendor"}>
            <button
              type="button"
              onClick={() => toggleStatus(record)}
              className={`p-1.5 rounded-lg border transition-colors ${
                record.status === "active"
                  ? "border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-900/60 dark:hover:bg-rose-950/40"
                  : "border-emerald-200 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-900/60 dark:hover:bg-emerald-950/40"
              }`}
            >
              <Power size={14} />
            </button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleReset = () => {
    setSearch("");
    setStatus("all");
    setCity("");
  };

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
              <CheckCircle2 size={12} /> Accredited Vendors
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary" />
            Pharmaceutical Suppliers & Distributors
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Maintain authorized pharmaceutical distribution partners, credit terms, regulatory certifications and accounts
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="primary"
            icon={<Plus size={15} />}
            onClick={() => {
              setSelectedSupplier(null);
              resetForm();
              setModalOpen(true);
            }}
            className="rounded-xl font-medium shadow-sm h-10 px-4"
          >
            Add New Supplier
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
            Showing <strong>{filteredData.length}</strong> accredited suppliers
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
          <SuppliersFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            city={city}
            setCity={setCity}
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
        title="Supplier Comprehensive Dossier"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={420}
      >
        {selectedSupplier && (
          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Vendor ID:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">#{selectedSupplier.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Company:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedSupplier.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedSupplier.contactPerson}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Phone:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedSupplier.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedSupplier.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Terms:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{selectedSupplier.paymentTerms}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Address:</span>
                <span className="text-slate-700 dark:text-slate-300">{selectedSupplier.address || "N/A"}</span>
              </div>
            </div>

            <Button
              type="primary"
              className="w-full rounded-xl h-10 font-medium"
              onClick={() => {
                setDrawerOpen(false);
                setFormState(selectedSupplier);
                setModalOpen(true);
              }}
            >
              Edit Supplier Details
            </Button>
          </div>
        )}
      </Drawer>

      {/* Modal */}
      <Modal
        title={selectedSupplier ? "Edit Supplier Record" : "Add New Pharmaceutical Supplier"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={saveSupplier}
      >
        <div className="space-y-3 py-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
              Company Name
            </label>
            <Input
              value={formState.name || ""}
              placeholder="e.g. Fidson Healthcare Plc"
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="rounded-xl h-10"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
              Contact Person
            </label>
            <Input
              value={formState.contactPerson || ""}
              placeholder="Representative name"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  contactPerson: e.target.value,
                })
              }
              className="rounded-xl h-10"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                Phone
              </label>
              <Input
                value={formState.phone || ""}
                placeholder="+234..."
                onChange={(e) =>
                  setFormState({ ...formState, phone: e.target.value })
                }
                className="rounded-xl h-10"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                Email
              </label>
              <Input
                value={formState.email || ""}
                placeholder="sales@vendor.com"
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="rounded-xl h-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
              Payment Terms
            </label>
            <Input
              value={formState.paymentTerms || ""}
              placeholder="e.g. Net 30 Days"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  paymentTerms: e.target.value,
                })
              }
              className="rounded-xl h-10"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
              Warehouse / Office Address
            </label>
            <Input.TextArea
              value={formState.address || ""}
              placeholder="Full address, City, State"
              rows={3}
              onChange={(e) =>
                setFormState({ ...formState, address: e.target.value })
              }
              className="rounded-xl"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Suppliers;
