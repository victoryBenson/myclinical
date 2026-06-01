import React, { useMemo, useState } from "react";
import { Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import { Download } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
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
    return data.filter(item => {

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
      ...filteredData.map(item => [
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
      [csvRows.map(row => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "medications.csv";
    link.click();
  };

  const columns: ColumnsType<Medication> = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Category", dataIndex: "category" },
    { title: "Stock Qty", dataIndex: "stock" },
    {
      title: "Unit Price (₦)",
      dataIndex: "unitPrice",
    },
    { title: "Expiry Date", dataIndex: "expiryDate" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        if (status === "in_stock")
          return <Tag color="green">In Stock</Tag>;
        if (status === "low_stock")
          return <Tag color="orange">Low Stock</Tag>;
        return <Tag color="red">Out of Stock</Tag>;
      },
    },
  ];

  return (
    <div className="p-6 space-y-6">

      <SectionHeader
        title="Medications"
        subtitle="View and update pharmacy medications"
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

export default Medications;