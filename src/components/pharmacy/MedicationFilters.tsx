import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface MedicationFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  stockLevel: string;
  setStockLevel: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (value: [Dayjs | null, Dayjs | null] | null) => void;
  onReset: () => void;
}

const MedicationFilters: React.FC<MedicationFiltersProps> = ({
  search,
  setSearch,
  category,
  setCategory,
  stockLevel,
  setStockLevel,
  dateRange,
  setDateRange,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-end">

      <div className="flex flex-col w-56">
        <label className="text-sm mb-1">Search</label>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Medication name or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Category</label>
        <Select value={category} onChange={setCategory}>
          <Option value="all">All</Option>
          <Option value="Antibiotics">Antibiotics</Option>
          <Option value="Analgesics">Analgesics</Option>
          <Option value="Antimalarial">Antimalarial</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Stock Level</label>
        <Select value={stockLevel} onChange={setStockLevel}>
          <Option value="all">All</Option>
          <Option value="low">Low Stock</Option>
          <Option value="out">Out of Stock</Option>
          <Option value="available">Available</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm mb-1">Expiry Date</label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>

      <Button icon={<ReloadOutlined />} onClick={onReset}>
        Reset
      </Button>

    </div>
  );
};

export default MedicationFilters;