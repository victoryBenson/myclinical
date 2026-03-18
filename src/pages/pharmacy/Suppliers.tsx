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
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download } from "lucide-react";
import dayjs from "../../utils/dayJs";
import SectionHeader from "../../components/ui/SectionHeader";
import { mockSuppliers } from "../../data/pharmacy";
import type { Supplier } from "../../types/pharmacy.types";
import SuppliersFilters from "../../components/pharmacy/SuppliersFilters";

const { Option } = Select;  

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
  const [statusFilter, setStatusFilter] = useState("all");

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
        paymentTerms: formState.paymentTerms || "",
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
  };

  const columns: ColumnsType<Supplier> = [
    {title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Contact", dataIndex: "contactPerson" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Payment Terms", dataIndex: "paymentTerms" },
    {
      title: "Status",
      render: (_, record) => (
        <Tag color={record.status === "active" ? "green" : "red"}>
          {record.status}
        </Tag>
      ),
    },
    { title: "Created", dataIndex: "createdAt" },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            onClick={() => {
              setSelectedSupplier(record);
              setDrawerOpen(true);
            }}
          >
            View
          </Button>

          <Button
            size="small"
            onClick={() => {
              setSelectedSupplier(record);
              setFormState(record);
              setModalOpen(true);
            }}
          >
            Edit
          </Button>

          <Button
            size="small"
            danger
            onClick={() => toggleStatus(record)}
          >
            {record.status === "active"
              ? "Deactivate"
              : "Activate"}
          </Button>
        </Space>
      ),
    },
  ];

  const handleReset = () => {
    setSearch("");
    setStatus("all");
    setCity("");
    setStatusFilter("all");
  };

  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Suppliers"
        subtitle="Manage pharmacy suppliers"
      />

      <div className="flex justify-between">
        <Button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        <Space>
          <Button
            type="primary"
            onClick={() => {
              setSelectedSupplier(null);
              resetForm();
              setModalOpen(true);
            }}
          >
            Add Supplier
          </Button>

          <Button
            icon={<Download size={14} />}
            onClick={exportCSV}
          >
            Export CSV
          </Button>
        </Space>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
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

      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>

      <Drawer
        title="Supplier Details"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={450}
      >
        {selectedSupplier && (
          <div className="space-y-3">
            <p><strong>Name:</strong> {selectedSupplier.name}</p>
            <p><strong>Contact:</strong> {selectedSupplier.contactPerson}</p>
            <p><strong>Phone:</strong> {selectedSupplier.phone}</p>
            <p><strong>Email:</strong> {selectedSupplier.email}</p>
            <p><strong>Address:</strong> {selectedSupplier.address}</p>
            <p><strong>Payment Terms:</strong> {selectedSupplier.paymentTerms}</p>
            <p><strong>Status:</strong> {selectedSupplier.status}</p>
          </div>
        )}
      </Drawer>

      <Modal
        title={selectedSupplier ? "Edit Supplier" : "Add Supplier"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={saveSupplier}
      >
        <div className="space-y-4">
          <Input
            placeholder="Supplier Name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />

          <Input
            placeholder="Contact Person"
            value={formState.contactPerson}
            onChange={(e) =>
              setFormState({ ...formState, contactPerson: e.target.value })
            }
          />

          <Input
            placeholder="Phone"
            value={formState.phone}
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
          />

          <Input
            placeholder="Email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />

          <Input
            placeholder="Address"
            value={formState.address}
            onChange={(e) =>
              setFormState({ ...formState, address: e.target.value })
            }
          />

          <Select
            placeholder="Payment Terms"
            value={formState.paymentTerms}
            onChange={(value) =>
              setFormState({ ...formState, paymentTerms: value })
            }
            style={{ width: "100%" }}
          >
            <Option value="30-days-credit">30 Days Credit</Option>
            <Option value="cash-on-delivery">Cash on Delivery</Option>
            <Option value="net-90">Net 90</Option>
          </Select>
        </div>
      </Modal>
    </div>
  );
};

export default Suppliers;