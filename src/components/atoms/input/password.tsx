import { InputRef, PasswordProps as PasswordAntdProps } from "antd/es/input";
import { forwardRef } from "react";
import { ConfigProvider } from "./config";
import PasswordAntd from "antd/es/input/Password";
import { cn } from "@/styles";
import "./styles.css";

export interface PasswordProps extends PasswordAntdProps {}

const Password = forwardRef<InputRef, PasswordProps>(
  ({ className, size = "middle", ...rest }: PasswordProps, ref) => {
    return (
      <ConfigProvider>
        <PasswordAntd ref={ref} className={cn(size, className)} size={size} {...rest} />
      </ConfigProvider>
    );
  }
);

export default Password;
