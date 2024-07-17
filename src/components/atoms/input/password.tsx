import { InputRef, PasswordProps as PasswordAntdProps } from "antd/es/input";
import { CSSProperties, forwardRef } from "react";
import { ConfigProvider } from "./config";
import PasswordAntd from "antd/es/input/Password";
import { cn } from "@/styles";
import "./styles.css";

export interface PasswordProps extends PasswordAntdProps {
  style?: CSSProperties;
  className?: string;
}

const Password = forwardRef<InputRef, PasswordProps>(
  ({ style, className, size = "middle", ...rest }: PasswordProps, ref) => {
    return (
      <ConfigProvider>
        <PasswordAntd
          ref={ref}
          style={{ ...style }}
          className={cn(size, className)}
          size={size}
          {...rest}
        />
      </ConfigProvider>
    );
  }
);

export default Password;
