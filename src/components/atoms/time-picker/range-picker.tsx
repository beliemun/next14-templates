"use client";

import { RangePickerProps } from "antd/es/date-picker";
import { CSSProperties } from "react";
import { cn } from "@/styles";
import { TimePicker } from "antd";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { ConfigProvider } from "./config-provider";
import koKR from "antd/es/date-picker/locale/ko_KR";
import "dayjs/locale/ko";
import "./styles.css";

interface RangePickProps extends RangePickerProps {
  style?: CSSProperties;
  className?: string;
}

const RangePicker = ({ style, className, size = "middle", ...rest }: RangePickProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProvider>
      <TimePicker.RangePicker
        locale={koKR}
        style={{ ...style }}
        className={cn(isDarkMode && "dark", className)}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};

export default RangePicker;
