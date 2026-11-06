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
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Search Reports
        </label>
        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Patient name or report ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="rounded-xl h-10 border-slate-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="flex flex-col w-40">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Report Status
        </label>
        <Select value={status} onChange={setStatus} className="h-10 rounded-xl">
          <Option value="all">All Statuses</Option>
          <Option value="pending">Pending</Option>
          <Option value="approved">Approved & Published</Option>
          <Option value="rejected">Rejected</Option>
        </Select>
      </div>

      <div className="flex flex-col w-52">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Diagnostic Investigation
        </label>
        <Select value={test} onChange={setTest} className="h-10 rounded-xl">
          <Option value="all">All Investigations</Option>
          <Option value="Complete Blood Count">Complete Blood Count</Option>
          <Option value="Liver Function Test">Liver Function Test</Option>
          <Option value="Renal Profile">Renal Profile</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Issued Date
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

export default LabReportFilters;
