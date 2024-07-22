import { cn } from "@/styles";
import { Input as InputAntd, InputProps as InputAntdProps, InputRef } from "antd";
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { ConfigProvider } from "./config";
import Search, { SearchProps } from "./search";
import Password, { PasswordProps } from "./password";
import TextArea, { TextAreaProps } from "./textarea";
import OTP, { OTPProps } from "./opt";
import { OTPRef } from "antd/es/input/OTP";

export interface InputProps extends InputAntdProps {}

export interface InputComponent
  extends ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>> {
  Search: ForwardRefExoticComponent<SearchProps & RefAttributes<InputRef>>;
  Password: ForwardRefExoticComponent<PasswordProps & RefAttributes<InputRef>>;
  TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<InputRef>>;
  OTP: ForwardRefExoticComponent<OTPProps & RefAttributes<OTPRef>>;
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
Input.TextArea = TextArea;
Input.OTP = OTP;

export default Input;
