"use client";

import { cn } from "@/styles";
import {
  ConfigProvider,
  TimePicker as TiemPickerAntd,
  TimePickerProps as TimePickerAntdProps,
} from "antd";
import { CSSProperties } from "react";
import "./styles.css";
import { useDarkModeStore } from "@/stores";

interface TimePickerProps extends TimePickerAntdProps {
  style?: CSSProperties;
  className?: string;
}

export const TimePicker = ({ style, className, ...rest }: TimePickerProps) => {
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
      <TiemPickerAntd
        style={{ ...style }}
        className={cn(isDarkMode && "dark", className)}
        {...rest}
      />
    </ConfigProvider>
  );
};
