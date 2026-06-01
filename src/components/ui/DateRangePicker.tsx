import React from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

interface DateRangePickerProps {
  value: [Dayjs | null, Dayjs | null] | null;
  onChange: (dates: [Dayjs | null, Dayjs | null] | null) => void;
  className?: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
  className = "",
}) => {
  return (
    <RangePicker
      value={value as any}
      onChange={(dates) => onChange(dates as any)}
      format="YYYY-MM-DD"
      className={`w-full rounded-lg ${className}`}
    />
  );
};

export default DateRangePicker;