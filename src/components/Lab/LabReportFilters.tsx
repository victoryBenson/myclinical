import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface LabReportFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  test: string;
  setTest: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (
    value: [Dayjs | null, Dayjs | null] | null
  ) => void;
  onReset: () => void;
}

const LabReportFilters: React.FC<LabReportFiltersProps> = ({
  search,
  setSearch,
  status,
  setStatus,
  test,
  setTest,
  dateRange,
  setDateRange,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-end">

      {/* Search */}
      <div className="flex flex-col w-56">
        <label className="text-sm mb-1">Search</label>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Patient or Report ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Date Range */}
      <div className="flex flex-col">
        <label className="text-sm mb-1">Issued Date</label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>

      {/* Status */}
      <div className="flex flex-col w-40">
        <label className="text-sm mb-1">Status</label>
        <Select value={status} onChange={setStatus}>
          <Option value="all">All</Option>
          <Option value="pending">Pending</Option>
          <Option value="approved">Approved</Option>
          <Option value="rejected">Rejected</Option>
        </Select>
      </div>

      {/* Test */}
      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Test</label>
        <Select value={test} onChange={setTest}>
          <Option value="all">All</Option>
          <Option value="Complete Blood Count">
            Complete Blood Count
          </Option>
          <Option value="Liver Function Test">
            Liver Function Test
          </Option>
          <Option value="Renal Profile">
            Renal Profile
          </Option>
        </Select>
      </div>

      {/* Reset */}
      <Button
        icon={<ReloadOutlined />}
        onClick={onReset}
      >
        Reset
      </Button>

    </div>
  );
};

export default LabReportFilters;