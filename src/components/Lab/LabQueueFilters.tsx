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
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Search Queue
        </label>
        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Patient name or queue ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="rounded-xl h-10 border-slate-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="flex flex-col w-40">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Priority Level
        </label>
        <Select value={priority} onChange={setPriority} className="h-10 rounded-xl">
          <Option value="all">All Priorities</Option>
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
          <Option value="urgent">Urgent / STAT</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Test Type
        </label>
        <Select value={test} onChange={setTest} className="h-10 rounded-xl">
          <Option value="all">All Tests</Option>
          <Option value="Blood Test">Blood Test</Option>
          <Option value="Urine Test">Urine Test</Option>
          <Option value="X-Ray">X-Ray / Imaging</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Assigned Scientist
        </label>
        <Select value={technician} onChange={setTechnician} className="h-10 rounded-xl">
          <Option value="all">All Scientists</Option>
          <Option value="John Doe">John Doe</Option>
          <Option value="Jane Smith">Jane Smith</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Accession Date
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

export default LabQueueFilters;
