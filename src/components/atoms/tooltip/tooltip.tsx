import { cn } from "@/styles";
import { Tooltip as TooltipAtnd, TooltipProps } from "antd";

export const Tooltip = ({ style, className, ...rest }: TooltipProps) => {
  return <TooltipAtnd style={{ ...style }} className={cn(className)} {...rest}></TooltipAtnd>;
};
