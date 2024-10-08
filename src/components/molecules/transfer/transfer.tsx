import { cn } from "@/lib/utils";
import { Transfer as TransferAntd, TransferProps as TransferAntdProps } from "antd";
import { CSSProperties } from "react";
import { ConfigProvider } from "./config-provider";

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
