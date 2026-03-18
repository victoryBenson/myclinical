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

      <div className="flex flex-col w-56">
        <label className="text-sm mb-1">Search Supplier</label>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Name, email or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-40">
        <label className="text-sm mb-1">Status</label>
        <Select value={status} onChange={setStatus}>
          <Option value="all">All</Option>
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">City</label>
        <Select value={city} onChange={setCity}>
          <Option value="all">All</Option>
          <Option value="Lagos">Lagos</Option>
          <Option value="Abuja">Abuja</Option>
          <Option value="Port Harcourt">Port Harcourt</Option>
        </Select>
      </div>

      <Button icon={<ReloadOutlined />} onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};

export default SuppliersFilters;