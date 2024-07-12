"use client";

import { CSSProperties, ReactNode } from "react";
import { TextStyle, TextType } from "./types";
import { cn } from "@/styles";

interface TextProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TextType;
  onClick?: () => void;
}

export const Text = ({ children, style, className, type = "base-normal", ...rest }: TextProps) => {
  return (
    <span style={{ ...style }} className={cn(className, TextStyle[type])} {...rest}>
      {children}
    </span>
  );
};
