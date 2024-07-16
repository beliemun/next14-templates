import { cn } from "@/styles";
import { Card as CardAntd, CardProps as CardAntdProps } from "antd";
import { CSSProperties, ReactNode } from "react";

interface CardProps extends CardAntdProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export const Card = ({ style, className, children, ...rest }: CardProps) => {
  return (
    <CardAntd style={{ ...style }} className={cn(className)} {...rest}>
      {children}
    </CardAntd>
  );
};
