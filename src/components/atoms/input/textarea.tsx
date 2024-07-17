import { cn } from "@/styles";
import { InputRef } from "antd";
import TextAreaAntd, { TextAreaProps as TextAreaAtndProps } from "antd/es/input/TextArea";
import { CSSProperties, forwardRef } from "react";
import { ConfigProvider } from "./config";

export interface TextAreaProps extends TextAreaAtndProps {
  style?: CSSProperties;
  className?: string;
}

const TextArea = forwardRef<InputRef, TextAreaProps>(
  ({ style, className, ...rest }: TextAreaProps, ref) => {
    return (
      <ConfigProvider>
        <TextAreaAntd ref={ref} style={{ ...style }} className={cn(className)} {...rest} />
      </ConfigProvider>
    );
  }
);

export default TextArea;
