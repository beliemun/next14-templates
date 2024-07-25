import { InputRef, PasswordProps as PasswordAntdProps } from "antd/es/input";
import { ForwardedRef, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";
import PasswordAntd from "antd/es/input/Password";
import { cn } from "@/styles";
import "./styles.css";

export interface PasswordProps extends PasswordAntdProps {}

const Password = (
  { className, size = "middle", ...rest }: PasswordProps,
  ref: ForwardedRef<InputRef>
) => {
  return (
    <ConfigProvider>
      <PasswordAntd ref={ref} className={cn(size, className)} size={size} {...rest} />
    </ConfigProvider>
  );
};

export default forwardRef<InputRef, PasswordProps>(Password);
