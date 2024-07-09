"use client";

import { CSSProperties, ReactNode } from "react";
import { TextStyle, TextType } from "./types";
import { cn } from "@/styles";
import useDarkMode from "@/stores/useDarkModeStore/useDarkModeStore";

interface TextProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TextType;
  onClick?: () => void;
}

export const Text = ({ children, style, className, type = "base-normal", ...rest }: TextProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <span
      style={{ ...style, color: isDarkMode ? "white" : "black" }}
      className={cn(className, TextStyle[type])}
      {...rest}
    >
      {children}
    </span>
  );
};
