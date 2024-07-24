import { cn } from "@/styles";
import {
  ConfigProvider,
  DatePicker as DatePickerAntd,
  DatePickerProps as DatePickerAntdProps,
} from "antd";
import koKR from "antd/es/date-picker/locale/ko_KR";
import RangePicker from "./range-picker";
import "dayjs/locale/ko";
import "../time-picker/styles.css";

export interface DatePickerProps extends DatePickerAntdProps {}

const DatePicker = ({ className, size = "middle", ...rest }: DatePickerProps) => {
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
