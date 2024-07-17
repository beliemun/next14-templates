"use client";

import { RangePickerProps } from "antd/es/date-picker";
import { CSSProperties } from "react";
import { cn } from "@/styles";
import { ConfigProvider, TimePicker } from "antd";
import { useDarkModeStore } from "@/stores";
import "./styles.css";

interface RangePickProps extends RangePickerProps {
  style?: CSSProperties;
  className?: string;
}

const RangePicker = ({ style, className, size = "middle", ...rest }: RangePickProps) => {
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
      <TimePicker.RangePicker
        style={{ ...style }}
        className={cn(isDarkMode && "dark", className)}
        size={size}
        placeholder={["시작 시간", "종료 시간"]}
        {...rest}
      />
    </ConfigProvider>
  );
};

export default RangePicker;
