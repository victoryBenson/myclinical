import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface SalesFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  patient: string;
  setPatient: (value: string) => void;

  paymentStatus: string;
  setPaymentStatus: (value: string) => void;

  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (value: [Dayjs | null, Dayjs | null] | null) => void;

  onReset: () => void;
}

const SalesFilters: React.FC<SalesFiltersProps> = ({
  search,
  setSearch,
  patient,
  setPatient,
  paymentStatus,
  setPaymentStatus,
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

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Patient</label>
        <Select value={patient} onChange={setPatient}>
          <Option value="all">All</Option>
          <Option value="Walk-in">Walk-in</Option>
          <Option value="John Doe">John Doe</Option>
          <Option value="Mary James">Mary James</Option>
        </Select>
      </div>

      <div className="flex flex-col w-40">
        <label className="text-sm mb-1">Payment</label>
        <Select value={paymentStatus} onChange={setPaymentStatus}>
          <Option value="all">All</Option>
          <Option value="paid">Paid</Option>
          <Option value="pending">Pending</Option>
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

export default SalesFilters;