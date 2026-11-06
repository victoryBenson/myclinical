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
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Search Formulary
        </label>
        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Medication name, generic or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="rounded-xl h-10 border-slate-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="flex flex-col w-48">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Category
        </label>
        <Select
          value={category}
          onChange={setCategory}
          className="h-10 rounded-xl"
        >
          <Option value="all">All Categories</Option>
          <Option value="Antibiotics">Antibiotics</Option>
          <Option value="Analgesics">Analgesics</Option>
          <Option value="Antimalarial">Antimalarial</Option>
          <Option value="Antihypertensive">Antihypertensive</Option>
        </Select>
      </div>

      <div className="flex flex-col w-44">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Stock Level
        </label>
        <Select
          value={stockLevel}
          onChange={setStockLevel}
          className="h-10 rounded-xl"
        >
          <Option value="all">All Stock</Option>
          <Option value="in_stock">In Stock</Option>
          <Option value="low_stock">Low Stock</Option>
          <Option value="out_of_stock">Out of Stock</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Expiry Window
        </label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="primary"
          icon={<SearchOutlined />}
          className="h-10 px-4 rounded-xl font-medium shadow-sm"
        >
          Filter
        </Button>
        <Button
          icon={<ReloadOutlined />}
          onClick={onReset}
          className="h-10 px-4 rounded-xl border-slate-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:text-slate-900"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default MedicationFilters;
