import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";

const { Option } = Select;

interface SuppliersFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  onReset: () => void;
}

const SuppliersFilters: React.FC<SuppliersFiltersProps> = ({
  search,
  setSearch,
  status,
  setStatus,
  city,
  setCity,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Search Supplier
        </label>
        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Vendor name, contact, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="rounded-xl h-10 border-slate-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="flex flex-col w-40">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Supplier Status
        </label>
        <Select value={status} onChange={setStatus} className="h-10 rounded-xl">
          <Option value="all">All Statuses</Option>
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Location / City
        </label>
        <Select value={city} onChange={setCity} className="h-10 rounded-xl">
          <Option value="all">All Locations</Option>
          <Option value="Lagos">Lagos</Option>
          <Option value="Abuja">Abuja</Option>
          <Option value="Port Harcourt">Port Harcourt</Option>
        </Select>
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

export default SuppliersFilters;
