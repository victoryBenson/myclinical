import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface PatientFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  hmoFilter: string;
  setHmoFilter: (value: string) => void;
  patientType: string;
  setPatientType: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (
    value: [Dayjs | null, Dayjs | null] | null
  ) => void;
  onReset: () => void;
}

const PatientFilters: React.FC<PatientFiltersProps> = ({
  search,
  setSearch,
  hmoFilter,
  setHmoFilter,
  patientType,
  setPatientType,
  dateRange,
  setDateRange,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Search Patients
        </label>
        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Patient name, ID, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="rounded-xl h-10 border-slate-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="flex flex-col w-48">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Patient Type
        </label>
        <Select
          value={patientType}
          onChange={setPatientType}
          className="h-10 rounded-xl"
        >
          <Option value="all">All Types</Option>
          <Option value="in">In-Patient</Option>
          <Option value="out">Out-Patient</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          Date Registered
        </label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>

      <div className="flex flex-col w-48">
        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
          HMO Provider
        </label>
        <Select
          value={hmoFilter}
          onChange={setHmoFilter}
          className="h-10 rounded-xl"
        >
          <Option value="all">All Providers</Option>
          <Option value="hmo1">Hygeia HMO</Option>
          <Option value="hmo2">AXA Mansard</Option>
          <Option value="hmo3">Reliance HMO</Option>
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

export default PatientFilters;
