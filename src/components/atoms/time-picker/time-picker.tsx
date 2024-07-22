"use client";

import { cn } from "@/styles";
import {
  ConfigProvider,
  TimePicker as TimePickerAntd,
  TimePickerProps as TimePickerAntdProps,
} from "antd";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import RangePicker from "./range-picker";
import koKR from "antd/es/date-picker/locale/ko_KR";
import "dayjs/locale/ko";
import "./styles.css";

interface TimePickerProps extends TimePickerAntdProps {}

const TimePicker = ({ className, size = "middle", showNow = false, ...rest }: TimePickerProps) => {
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
        locale={koKR}
        className={cn(isDarkMode && "dark", className)}
        showNow={showNow}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};

TimePicker.RangePicker = RangePicker;

export default TimePicker;
