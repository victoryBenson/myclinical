import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface PurchaseOrderFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  supplier: string;
  setSupplier: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (value: [Dayjs | null, Dayjs | null] | null) => void;
  onReset: () => void;
}

const PurchaseOrderFilters: React.FC<PurchaseOrderFiltersProps> = ({
  search,
  setSearch,
  supplier,
  setSupplier,
  status,
  setStatus,
  dateRange,
  setDateRange,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-end">

      {/* Search */}
      <div className="flex flex-col w-56">
        <label className="text-sm mb-1">Search Order</label>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Order number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Supplier */}
      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Supplier</label>
        <Select value={supplier} onChange={setSupplier}>
          <Option value="all">All</Option>
          <Option value="MedPlus Ltd">MedPlus Ltd</Option>
          <Option value="PharmaHub">PharmaHub</Option>
          <Option value="HealthLine">HealthLine</Option>
        </Select>
      </div>

      {/* Status */}
      <div className="flex flex-col w-40">
        <label className="text-sm mb-1">Status</label>
        <Select value={status} onChange={setStatus}>
          <Option value="all">All</Option>
          <Option value="pending">Pending</Option>
          <Option value="ordered">Ordered</Option>
          <Option value="received">Received</Option>
        </Select>
      </div>

      {/* Date */}
      <div className="flex flex-col">
        <label className="text-sm mb-1">Date Range</label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>

      {/* Reset */}
      <Button icon={<ReloadOutlined />} onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};

export default PurchaseOrderFilters;