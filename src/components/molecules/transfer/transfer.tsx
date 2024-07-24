import { cn } from "@/styles";
import { Transfer as TransferAntd, TransferProps as TransferAntdProps } from "antd";
import { CSSProperties } from "react";
import { ConfigProvider } from "./config";

export interface TransferProps extends TransferAntdProps {
  style?: CSSProperties;
  className?: string;
}

export const Transfer = ({ style, className, ...rest }: TransferProps) => {
  return (
    <ConfigProvider>
      <TransferAntd style={{ ...style }} className={cn(className)} {...rest} />
    </ConfigProvider>
  );
};
