import { cn } from "@/styles";
import { Checkbox as CheckboxAntd, CheckboxProps as CheckboxAntdProps, ConfigProvider } from "antd";
import { CSSProperties } from "react";
import "./styles.css";

interface CheckboxProps extends CheckboxAntdProps {
  style?: CSSProperties;
  className?: string;
}

export const Checkbox = ({ style, className, ...rest }: CheckboxProps) => {
  return <CheckboxAntd style={{ ...style }} className={cn(className)} {...rest} />;
};
