import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface InventoryFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  supplier: string;
  setSupplier: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (value: [Dayjs | null, Dayjs | null] | null) => void;
  onReset: () => void;
}

const InventoryFilters: React.FC<InventoryFiltersProps> = ({
  search,
  setSearch,
  status,
  setStatus,
  supplier,
  setSupplier,
  dateRange,
  setDateRange,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Search Inventory
        </label>
        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Medication name or batch..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="rounded-xl h-10 border-slate-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="flex flex-col w-44">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Batch Status
        </label>
        <Select value={status} onChange={setStatus} className="h-10 rounded-xl">
          <Option value="all">All Batches</Option>
          <Option value="active">Active</Option>
          <Option value="expired">Expired</Option>
          <Option value="depleted">Depleted</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Vendor / Supplier
        </label>
        <Select value={supplier} onChange={setSupplier} className="h-10 rounded-xl">
          <Option value="all">All Vendors</Option>
          <Option value="Emzor Pharmaceuticals">Emzor Pharmaceuticals</Option>
          <Option value="Fidson Healthcare">Fidson Healthcare</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Expiry Range
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

export default InventoryFilters;
