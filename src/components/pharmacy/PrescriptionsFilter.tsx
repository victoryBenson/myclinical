import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DateRangePicker from "../ui/DateRangePicker";
import type { Dayjs } from "dayjs";

const { Option } = Select;

interface PrescriptionFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  paymentStatus: string;
  setPaymentStatus: (value: string) => void;
  doctor: string;
  setDoctor: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  setDateRange: (value: [Dayjs | null, Dayjs | null] | null) => void;
  onReset: () => void;
}

const PrescriptionFilters: React.FC<PrescriptionFiltersProps> = ({
  search,
  setSearch,
  status,
  setStatus,
  paymentStatus,
  setPaymentStatus,
  doctor,
  setDoctor,
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

      <div className="flex flex-col w-40">
        <label className="text-sm mb-1">Status</label>
        <Select value={status} onChange={setStatus}>
          <Option value="all">All</Option>
          <Option value="pending">Pending</Option>
          <Option value="dispensed">Dispensed</Option>
          <Option value="cancelled">Cancelled</Option>
        </Select>
      </div>

      <div className="flex flex-col w-40">
        <label className="text-sm mb-1">Payment</label>
        <Select value={paymentStatus} onChange={setPaymentStatus}>
          <Option value="all">All</Option>
          <Option value="paid">Paid</Option>
          <Option value="unpaid">Unpaid</Option>
        </Select>
      </div>

      <div className="flex flex-col w-48">
        <label className="text-sm mb-1">Doctor</label>
        <Select value={doctor} onChange={setDoctor}>
          <Option value="all">All</Option>
          <Option value="Dr. Adams">Dr. Adams</Option>
          <Option value="Dr. James">Dr. James</Option>
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

export default PrescriptionFilters;