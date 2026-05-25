import React from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";

interface CustomDatePickerProps {
  value?: Dayjs | null;
  onChange?: (date: Dayjs | null, dateString: string | null) => void;
  className?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  className = "",
}) => {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      format="YYYY-MM-DD"
      className={`w-full rounded-lg ${className}`}
    //   size="large"
    />
  );
};

export default CustomDatePicker;