import { cn } from "@/lib/utils";
import { Switch as SwitchAntd, SwitchProps as SwitchAntdProps } from "antd";
import "./styles.css";

export interface SwitchProps extends SwitchAntdProps {}

export const Switch = ({ className, ...rest }: SwitchProps) => {
  return <SwitchAntd className={cn(className)} {...rest} />;
};
