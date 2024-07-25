import { Select as SelectAntd, SelectProps as SelectAntdProps } from "antd";
import { ConfigProvider } from "./config-provider";
import { cn } from "@/styles";
import "./styles.css";

export interface SelectProps extends SelectAntdProps {}

export const Select = ({ style, className, children, size = "middle", ...rest }: SelectProps) => {
  return (
    <ConfigProvider>
      <SelectAntd
        style={{ borderRadius: 8, ...style }}
        className={cn(size, className)}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};
