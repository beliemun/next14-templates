import { Select as SelectAntd, SelectProps as SelectAntdProps } from "antd";
import { CSSProperties, ReactNode } from "react";

interface SelectProps extends SelectAntdProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export const Select = ({ style, className, children, ...rest }: SelectProps) => {
  return (
    <SelectAntd style={{ ...style }} className={className} {...rest}>
      {children}
    </SelectAntd>
  );
};
