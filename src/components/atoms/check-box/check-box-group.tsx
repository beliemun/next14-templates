"use client";

import { cn } from "@/lib/utils";
import { Checkbox } from "antd";
import { CheckboxGroupProps as CheckboxGroupAntdProps } from "antd/lib/checkbox";
import "./styles.css";

export interface CheckboxGroupProps extends CheckboxGroupAntdProps {}

export const CheckboxGroup = ({ className, ...rest }: CheckboxGroupProps) => {
  return <Checkbox.Group className={cn(className)} {...rest} />;
};
