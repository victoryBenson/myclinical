import React from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

interface CustomDatePickerProps {
  value?: Dayjs | null;
  onChange?: (date: Dayjs | null, dateString: string | null) => void;
  className?: string;

  disableFutureDates?: boolean; // optional

  disabledDate?: (current: Dayjs) => boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  disabledDate,
  disableFutureDates,
  className = "",
}) => {

  const handleDisabledDate = (current: Dayjs) => {
    if (disabledDate) {
      return disabledDate(current);
    }

    if (disableFutureDates) {
      return current && current > dayjs().endOf("day");
    }

    return false;
  };

  return (
    <DatePicker
      value={value}
      onChange={onChange}
      disabledDate={handleDisabledDate}
      format="YYYY-MM-DD"
      className={`w-full rounded-lg ${className}`}
    />
  );
};

export default CustomDatePicker;