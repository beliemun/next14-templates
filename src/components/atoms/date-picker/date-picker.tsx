import { cn } from "@/lib/utils";
import { DatePicker as DatePickerAntd, DatePickerProps as DatePickerAntdProps } from "antd";
import { ConfigProvider } from "./config-provider";
import RangePicker from "./range-picker";
import koKR from "antd/es/date-picker/locale/ko_KR";
import "dayjs/locale/ko";
import "../time-picker/styles.css";

export interface DatePickerProps extends DatePickerAntdProps {}

const DatePicker = ({ className, size = "middle", ...rest }: DatePickerProps) => {
  return (
    <ConfigProvider>
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
