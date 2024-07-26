"use client";

import { CSSProperties, forwardRef, LegacyRef, ReactNode } from "react";
import { TextColor, TextStyle, TextType } from "./types";
import { cn } from "@/styles";
import { theme } from "antd";

export interface TextProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TextType;
  color?: TextColor;
  onClick?: () => void;
}

const Text = (
  { children, style, className, type = "base-normal", color = "default", ...rest }: TextProps,
  ref: LegacyRef<HTMLSpanElement>
) => {
  const {
    token: { colorText, colorTextDescription, colorTextDisabled },
  } = theme.useToken();
  return (
    <span
      ref={ref}
      style={{
        color:
          color === "default"
            ? colorText
            : color === "description"
            ? colorTextDescription
            : colorTextDisabled,
        ...style,
      }}
      className={cn(className, TextStyle[type])}
      {...rest}
    >
      {children}
    </span>
  );
};

export default forwardRef(Text);
