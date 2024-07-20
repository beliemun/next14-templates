"use client";

import { RangePickerProps } from "antd/es/date-picker";
import { CSSProperties } from "react";
import { cn } from "@/styles";
import { ConfigProvider, DatePicker } from "antd";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import koKR from "antd/es/date-picker/locale/ko_KR";
import "dayjs/locale/ko";
import "../time-picker/styles.css";

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
      <DatePicker.RangePicker
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
