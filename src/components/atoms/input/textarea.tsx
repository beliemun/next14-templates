import { cn } from "@/styles";
import { InputRef } from "antd";
import TextAreaAntd, { TextAreaProps as TextAreaAtndProps } from "antd/es/input/TextArea";
import { CSSProperties, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";

export interface TextAreaProps extends TextAreaAtndProps {}

const TextArea = forwardRef<InputRef, TextAreaProps>(
  ({ className, ...rest }: TextAreaProps, ref) => {
    return (
      <ConfigProvider>
        <TextAreaAntd ref={ref} className={cn(className)} {...rest} />
      </ConfigProvider>
    );
  }
);

export default TextArea;
