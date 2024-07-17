import { cn } from "@/styles";
import {
  ConfigProvider,
  DatePicker as DatePickerAntd,
  DatePickerProps as DatePickerAntdProps,
} from "antd";
import { CSSProperties } from "react";
import koKR from "antd/es/date-picker/locale/ko_KR";
import "dayjs/locale/ko";
import "../time-picker/styles.css";
import RangePicker from "./range-picker";

interface DatePickerProps extends DatePickerAntdProps {
  style?: CSSProperties;
  className?: string;
}

const DatePicker = ({ style, className, size = "middle", ...rest }: DatePickerProps) => {
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
      <DatePickerAntd
        locale={koKR}
        style={{ ...style }}
        className={cn(className)}
        size={size}
        showNow={false}
        {...rest}
      />
    </ConfigProvider>
  );
};

DatePicker.RangePicker = RangePicker;

export default DatePicker;
