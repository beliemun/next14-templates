"use client";

import { cn } from "@/styles";
import { DatePicker } from "antd";
import { ConfigProvider } from "./config-provider";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { RangePickerProps as RangePickerAntdProps } from "antd/lib/date-picker";
import koKR from "antd/es/date-picker/locale/ko_KR";
import "dayjs/locale/ko";
import "../time-picker/styles.css";

interface RangePickerProps extends RangePickerAntdProps {}

const RangePicker = ({ style, className, size = "middle", ...rest }: RangePickerProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProvider>
      <DatePicker.RangePicker
        locale={koKR}
        className={cn(isDarkMode && "dark", className)}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};

export default RangePicker;
