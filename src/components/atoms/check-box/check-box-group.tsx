"use client";

import { cn } from "@/styles";
import { Checkbox } from "antd";
import { CheckboxGroupProps as CheckboxGroupAntdProps } from "antd/lib/checkbox";
import { CSSProperties } from "react";
import "./styles.css";

interface CheckboxGroupProps extends CheckboxGroupAntdProps {
  style?: CSSProperties;
  className?: string;
}

export const CheckboxGroup = ({ style, className, ...rest }: CheckboxGroupProps) => {
  return <Checkbox.Group style={{ ...style }} className={cn(className)} {...rest} />;
};
