import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import type { LabStatus } from "../../types/lab.types";
import type { Dayjs } from "dayjs";
import DateRangePicker from "../ui/DateRangePicker";

const { Option } = Select;

interface Props {
  search: string;
  setSearch: (value: string) => void;

  status: LabStatus | "all";
  setStatus: (value: LabStatus | "all") => void;

  priority: "all" | "low" | "medium" | "high" | "urgent";
  setPriority: (
    value: "all" | "low" | "medium" | "high" | "urgent"
  ) => void;

  test: string;
  setTest: (value: string) => void;

  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (
    value: [Dayjs | null, Dayjs | null] | null
  ) => void;

  onReset: () => void;
}

const LabRequestFilters: React.FC<Props> = ({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
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
          placeholder="Patient or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Date */}
      <div className="flex flex-col">
        <label className="text-sm mb-1">Date Range</label>
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
          <Option value="waiting">Waiting</Option>
          <Option value="processing">Processing</Option>
          <Option value="completed">Completed</Option>
        </Select>
      </div>

      {/* Priority */}
      <div className="flex flex-col w-40">
        <label className="text-sm mb-1">Priority</label>
        <Select value={priority} onChange={setPriority}>
          <Option value="all">All</Option>
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
          <Option value="urgent">Urgent</Option>
        </Select>
      </div>

      {/* Test */}
      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Test</label>
        <Select value={test} onChange={setTest}>
          <Option value="all">All</Option>
          <Option value="CBC">CBC</Option>
          <Option value="Malaria">Malaria</Option>
          <Option value="Liver Panel">Liver Panel</Option>
          <Option value="Urinalysis">Urinalysis</Option>
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

export default LabRequestFilters;