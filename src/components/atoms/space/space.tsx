import { cn } from "@/styles";
import { CSSProperties, ReactNode } from "react";
import { Space as SpaceAntd, SpaceProps as SpaceAntdProps } from "antd";

interface SpaceProps extends SpaceAntdProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  gap?: number;
  wrap?: boolean;
  direction?: "vertical" | "horizontal";
}

export const Space = ({ style, className, children, ...rest }: SpaceProps) => {
  return (
    <SpaceAntd style={{ ...style }} className={cn(className)} {...rest}>
      {children}
    </SpaceAntd>
  );
};
