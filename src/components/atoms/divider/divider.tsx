import { capitalizeFirstLetter } from "@/shared/utils";
import { cn } from "@/styles";
import { Divider as DividerAtnd, DividerProps as DividerAntdProps } from "antd";
import { CSSProperties, ReactNode } from "react";

interface DividerProps extends DividerAntdProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  children?: ReactNode | undefined;
}

export const Divider = ({ style, className, children, ...rest }: DividerProps) => {
  return (
    <DividerAtnd style={{ ...style }} className={cn(className)} {...rest}>
      {children ? capitalizeFirstLetter(String(children)) : null}
    </DividerAtnd>
  );
};
