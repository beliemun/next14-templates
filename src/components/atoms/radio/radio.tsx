"use client";

import { cn } from "@/lib/utils";
import { CheckboxOptionType, Radio as RadioAntd, RadioProps as RadioAntdProps } from "antd";
import "./styles.css";
import { RadioGroup } from "./radio-group";

export interface RadioProps extends RadioAntdProps {
  className?: string;
}

export type RadioOption = string | number | CheckboxOptionType<any>;

const Radio = ({ className, ...rest }: RadioProps) => {
  return <RadioAntd className={cn(className)} {...rest} />;
};

Radio.Group = RadioGroup;

export default Radio;
