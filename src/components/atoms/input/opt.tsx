import { cn } from "@/styles";
import OTPAntd, { OTPProps as OTPAntdProps, OTPRef } from "antd/es/input/OTP";
import { ForwardedRef, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";
import { InputRef } from "antd";

export interface OTPProps extends OTPAntdProps {}

const OTP = ({ className, ...rest }: OTPProps, ref: ForwardedRef<OTPRef>) => {
  return (
    <ConfigProvider>
      <OTPAntd ref={ref} className={cn(className)} {...rest} />
    </ConfigProvider>
  );
};

export default forwardRef<OTPRef, OTPProps>(OTP);
