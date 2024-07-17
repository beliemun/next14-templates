"use client";

import { cn } from "@/styles";
import {
  ConfigProvider,
  TimePicker as TimePickerAntd,
  TimePickerProps as TimePickerAntdProps,
} from "antd";
import { CSSProperties } from "react";
import { useDarkModeStore } from "@/stores";
import RangePicker from "./range-picker";
import "./styles.css";

interface TimePickerProps extends TimePickerAntdProps {
  style?: CSSProperties;
  className?: string;
}

const TimePicker = ({
  style,
  className,
  size = "middle",
  showNow = false,
  ...rest
}: TimePickerProps) => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            // small
            inputFontSizeSM: 14,
            borderRadiusSM: 8,
            paddingInlineSM: 12,

            // medium
            inputFontSize: 14,
            borderRadius: 8,
            paddingInline: 14,

            // large
            inputFontSizeLG: 16,
            borderRadiusLG: 8,
            paddingInlineLG: 14,
          },
        },
      }}
    >
      <TimePickerAntd
        style={{ ...style }}
        className={cn(isDarkMode && "dark", className)}
        showNow={showNow}
        size={size}
        placeholder="시간 선택"
        {...rest}
      />
    </ConfigProvider>
  );
};

TimePicker.RangePicker = RangePicker;

export default TimePicker;