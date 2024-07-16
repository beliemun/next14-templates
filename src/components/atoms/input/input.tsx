import { cn } from "@/styles";
import { Input as InputAntd, InputProps as InputAntdProps, InputRef } from "antd";
import { CSSProperties, forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { ConfigProvider } from "./config";
import Search, { SearchProps } from "./search";
import Password, { PasswordProps } from "./password";

interface InputProps extends InputAntdProps {
  stlyes?: CSSProperties;
  className?: string;
}

interface InputComponent extends ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>> {
  Search: ForwardRefExoticComponent<SearchProps & RefAttributes<InputRef>>;
  Password: ForwardRefExoticComponent<PasswordProps & RefAttributes<InputRef>>;
}

const Input = forwardRef<InputRef, InputProps>(({ style, className, ...rest }: InputProps, ref) => {
  return (
    <ConfigProvider>
      <InputAntd ref={ref} style={{ ...style }} className={cn(className)} {...rest} />
    </ConfigProvider>
  );
}) as InputComponent;

Input.Search = Search;
Input.Password = Password;

export default Input;
