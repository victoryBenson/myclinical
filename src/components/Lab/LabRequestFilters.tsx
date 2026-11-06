import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import type { LabStatus } from "../../types/lab";
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
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Search Request
        </label>
        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Patient name or test ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="rounded-xl h-10 border-slate-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="flex flex-col w-40">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Lab Status
        </label>
        <Select value={status} onChange={setStatus} className="h-10 rounded-xl">
          <Option value="all">All Statuses</Option>
          <Option value="waiting">Waiting</Option>
          <Option value="processing">Processing</Option>
          <Option value="completed">Completed</Option>
        </Select>
      </div>

      <div className="flex flex-col w-40">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Priority
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
          Diagnostic Test
        </label>
        <Select value={test} onChange={setTest} className="h-10 rounded-xl">
          <Option value="all">All Test Types</Option>
          <Option value="CBC">Complete Blood Count (CBC)</Option>
          <Option value="Malaria">Malaria Parasite</Option>
          <Option value="Liver Panel">Liver Function Panel</Option>
          <Option value="Urinalysis">Urinalysis</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Ordered Date
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

export default LabRequestFilters;
