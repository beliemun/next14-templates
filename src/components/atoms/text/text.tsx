"use client";

import { CSSProperties, ReactNode } from "react";
import { TextStyle, TextType } from "./types";
import { cn } from "@/styles";
import { theme } from "antd";

export interface TextProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TextType;
  onClick?: () => void;
}

export const Text = ({ children, style, className, type = "base-normal", ...rest }: TextProps) => {
  const {
    token: { colorText },
  } = theme.useToken();
  return (
    <span
      style={{ ...style, color: colorText }}
      className={cn(className, TextStyle[type])}
      {...rest}
    >
      {children}
    </span>
  );
};
