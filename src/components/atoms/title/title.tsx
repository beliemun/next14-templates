"use client";

import { CSSProperties, ReactNode } from "react";
import { TitleStyle, TitleType } from "./types";
import { cn } from "@/styles";
import { theme } from "antd";

interface TitleProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TitleType;
  as?: keyof HTMLElementTagNameMap;
  onClick?: () => void;
}

export const Title = ({
  children,
  style,
  className,
  type = "h6-bold",
  as,
  ...rest
}: TitleProps) => {
  const {
    token: { colorText },
  } = theme.useToken();
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let Component: keyof JSX.IntrinsicElements = "h1";
  if (headings.includes(String(type).slice(0, 2))) {
    Component = String(type).slice(0, 2) as keyof JSX.IntrinsicElements;
  }
  return (
    <Component
      style={{ ...style, color: colorText }}
      className={cn(className, TitleStyle[type])}
      {...rest}
    >
      {children}
    </Component>
  );
};
