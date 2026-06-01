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

      <div className="flex flex-col w-56">
        <label className="text-sm mb-1">Search</label>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Patient name or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Patient Type</label>
        <Select value={patientType} onChange={setPatientType}>
          <Option value="all">All</Option>
          <Option value="in">In Patient</Option>
          <Option value="out">Out Patient</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm mb-1">Date Registered</label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>
      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">HMO</label>
        <Select value={hmoFilter} onChange={setHmoFilter}>
          <Option value="all">All</Option>
          <Option value="hmo1">HMO 1</Option>
          <Option value="hmo2">HMO 2</Option>
          <Option value="hmo3">HMO 3</Option>
        </Select>
      </div>
      
      <Button icon={<SearchOutlined/>} type="primary" >
        Filter
      </Button>
      <Button icon={<ReloadOutlined />} onClick={onReset}>
        Reset
      </Button>

    </div>
  );
};

export default PatientFilters;