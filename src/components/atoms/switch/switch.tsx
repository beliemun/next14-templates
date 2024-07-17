import { cn } from "@/styles";
import { Switch as SwitchAntd, SwitchProps as SwitchAntdProps } from "antd";
import { CSSProperties } from "react";
import "./styles.css";

interface SwitchProps extends SwitchAntdProps {
  style?: CSSProperties;
  className?: string;
}

export const Switch = ({ style, className, ...rest }: SwitchProps) => {
  return <SwitchAntd style={{ ...style }} className={cn(className)} {...rest} />;
};
