"use client";

import { cn } from "@/styles";
import { ColorPicker as ColorPickerAntd, ColorPickerProps as ColorPickerAtndProps } from "antd";
import { CSSProperties } from "react";
import { useDarkModeStore } from "@/stores";
import "./styles.css";

interface ColorPickerProps extends ColorPickerAtndProps {
  style?: CSSProperties;
  className?: string;
}

export const ColorPicker = ({ style, className, ...rest }: ColorPickerProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ColorPickerAntd
      style={{ ...style }}
      className={cn(isDarkMode && "dark", className)}
      {...rest}
    />
  );
};
