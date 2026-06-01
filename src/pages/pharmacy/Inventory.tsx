import React, { useMemo, useState } from "react";
import { Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import { Download } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
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
    return data.filter(item => {
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
      ...filteredData.map(item => [
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
      [csvRows.map(row => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "pharmacy-inventory.csv";
    link.click();
  };

  const columns: ColumnsType<InventoryItem> = [
    { title: "ID", dataIndex: "id" },
    { title: "Medication", dataIndex: "medicationName" },
    { title: "Batch", dataIndex: "batchNumber" },
    { title: "Supplier", dataIndex: "supplier" },
    { title: "Qty Received", dataIndex: "quantityReceived" },
    { title: "Qty Remaining", dataIndex: "quantityRemaining" },
    { title: "Purchase Price (₦)", dataIndex: "purchasePrice" },
    { title: "Expiry Date", dataIndex: "expiryDate" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        if (status === "active")
          return <Tag color="green">Active</Tag>;
        if (status === "expired")
          return <Tag color="red">Expired</Tag>;
        return <Tag color="orange">Depleted</Tag>;
      },
    },
  ];

  return (
    <div className="p-6 space-y-6">

      <SectionHeader
        title="Pharmacy Inventory"
        subtitle="Manage medication batches and stock flow"
      />

      <div className="flex justify-between items-center">
        <Button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        <Button
          type="primary"
          icon={<Download size={14} />}
          onClick={exportCSV}
        >
          Export CSV
        </Button>
      </div>

      {showFilters && (
        <div className="bg-white rounded-2xl shadow-sm p-4">
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

      <div className="bg-white rounded-2xl shadow-sm p-4">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>

    </div>
  );
};

export default Inventory;