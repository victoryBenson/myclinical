import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import DateRangePicker from "../ui/DateRangePicker";

const { Option } = Select;

interface Props {
  search: string;
  setSearch: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (
    v: [Dayjs | null, Dayjs | null] | null
  ) => void;
  onReset: () => void;
}

const LabResultFilters: React.FC<Props> = ({
  search,
  setSearch,
  status,
  setStatus,
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
          placeholder="Patient or Request ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Status</label>
        <Select value={status} onChange={setStatus}>
          <Option value="all">All</Option>
          <Option value="pending">Pending</Option>
          <Option value="verified">Verified</Option>
          <Option value="rejected">Rejected</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm mb-1">Date Range</label>
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

export default LabResultFilters;