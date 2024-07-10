import { cn } from "@/styles";
import { Tooltip as TooltipAtnd } from "antd";
import { CSSProperties } from "react";

interface TooltipProps {
  style?: CSSProperties;
  className?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  trigger?: "hover" | "click";
  defaultOpen?: boolean;
  placement?: "top" | "left" | "right" | "bottom";
}

export const Tooltip = ({ style, className, ...rest }: TooltipProps) => {
  return <TooltipAtnd style={{ ...style }} className={cn(className)} {...rest}></TooltipAtnd>;
};
