import { cn } from "@/styles";
import { CSSProperties, ReactNode } from "react";
import { Space as SpaceAntd, SpaceProps as SpaceAntdProps } from "antd";

interface SpaceProps extends SpaceAntdProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  gap?: number;
}

export const Space = ({ style, className, children, gap, ...rest }: SpaceProps) => {
  return (
    <SpaceAntd style={{ gap, ...style }} className={cn(className)} {...rest}>
      {children}
    </SpaceAntd>
  );
};
