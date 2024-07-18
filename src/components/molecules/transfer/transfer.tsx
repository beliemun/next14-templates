import { cn } from "@/styles";
import { Transfer as TransferAntd, TransferProps as TransferAntdProps } from "antd";
import { CSSProperties } from "react";

interface TransferProps extends TransferAntdProps {
  style?: CSSProperties;
  className?: string;
}

export const Transfer2 = ({ style, className, ...rest }: TransferProps) => {
  return <TransferAntd style={{ ...style }} className={cn(className)} {...rest}></TransferAntd>;
};
