import { cn } from "@/styles";
import { InputRef } from "antd";
import TextAreaAntd, { TextAreaProps as TextAreaAtndProps } from "antd/es/input/TextArea";
import { ForwardedRef, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";

export interface TextAreaProps extends TextAreaAtndProps {}

const TextArea = ({ className, ...rest }: TextAreaProps, ref: ForwardedRef<InputRef>) => {
  return (
    <ConfigProvider>
      <TextAreaAntd ref={ref} className={cn(className)} {...rest} />
    </ConfigProvider>
  );
};

export default forwardRef<InputRef, TextAreaProps>(TextArea);
