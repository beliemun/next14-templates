import { cn } from "@/styles";
import { Divider as DividerAtnd } from "antd";
import { CSSProperties, ReactNode } from "react";

interface DividerProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  children?: ReactNode | undefined;
  dashed?: boolean | undefined;
  orientation?: "left" | "right" | "center" | undefined;
  plain?: boolean | undefined;
  type?: "horizontal" | "vertical" | undefined;
}

export const Divider = ({ style, className, children, ...rest }: DividerProps) => {
  return (
    <DividerAtnd style={{ ...style }} className={cn(className)} {...rest}>
      {children ? String(children).toUpperCase() : null}
    </DividerAtnd>
  );
};
