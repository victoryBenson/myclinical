import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface LabQueueFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  priority: string;
  setPriority: (value: string) => void;
  test: string;
  setTest: (value: string) => void;
  technician: string;
  setTechnician: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (
    value: [Dayjs | null, Dayjs | null] | null
  ) => void;
  onReset: () => void;
}

const LabQueueFilters: React.FC<LabQueueFiltersProps> = ({
  search,
  setSearch,
  priority,
  setPriority,
  test,
  setTest,
  technician,
  setTechnician,
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
          placeholder="Patient or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm mb-1">Date Range</label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>

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

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Test</label>
        <Select value={test} onChange={setTest}>
          <Option value="all">All</Option>
          <Option value="Blood Test">Blood Test</Option>
          <Option value="Urine Test">Urine Test</Option>
          <Option value="X-Ray">X-Ray</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Technician</label>
        <Select value={technician} onChange={setTechnician}>
          <Option value="all">All</Option>
          <Option value="John Doe">John Doe</Option>
          <Option value="Jane Smith">Jane Smith</Option>
        </Select>
      </div>

      <Button
        icon={<ReloadOutlined />}
        onClick={onReset}
      >
        Reset
      </Button>

    </div>
  );
};

export default LabQueueFilters;