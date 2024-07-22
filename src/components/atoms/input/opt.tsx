import { cn } from "@/styles";
import OTPAntd, { OTPProps as OTPAntdProps, OTPRef } from "antd/es/input/OTP";
import { forwardRef } from "react";
import { ConfigProvider } from "./config";

export interface OTPProps extends OTPAntdProps {}

const OTP = forwardRef<OTPRef, OTPProps>(({ className, ...rest }: OTPProps, ref) => {
  return (
    <ConfigProvider>
      <OTPAntd ref={ref} className={cn(className)} {...rest} />
    </ConfigProvider>
  );
});

export default OTP;
