import { cn } from "@/styles";
import OTPAntd, { OTPProps as OTPAntdProps, OTPRef } from "antd/es/input/OTP";
import { CSSProperties, forwardRef } from "react";
import { ConfigProvider } from "./config";

export interface OTPProps extends OTPAntdProps {
  style?: CSSProperties;
  className?: string;
}

const OTP = forwardRef<OTPRef, OTPProps>(({ style, className, ...rest }: OTPProps, ref) => {
  return (
    <ConfigProvider>
      <OTPAntd ref={ref} style={{ ...style }} className={cn(className)} {...rest} />
    </ConfigProvider>
  );
});

export default OTP;
