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

      <div className="flex flex-col w-56">
        <label className="text-sm mb-1">Search</label>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Medication or Batch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Status</label>
        <Select value={status} onChange={setStatus}>
          <Option value="all">All</Option>
          <Option value="active">Active</Option>
          <Option value="expired">Expired</Option>
          <Option value="depleted">Depleted</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Supplier</label>
        <Select value={supplier} onChange={setSupplier}>
          <Option value="all">All</Option>
          <Option value="Emzor Pharmaceuticals">
            Emzor Pharmaceuticals
          </Option>
          <Option value="Fidson Healthcare">
            Fidson Healthcare
          </Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm mb-1">Expiry Range</label>
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

export default InventoryFilters;