"use client";

import { cn } from "@/styles";
import { ColorPicker as ColorPickerAntd, ColorPickerProps as ColorPickerAtndProps } from "antd";
import { CSSProperties } from "react";
import "./styles.css";
import { useDarkModeStore } from "@/stores/useDarkModeStore";

interface ColorPickerProps extends ColorPickerAtndProps {
  style?: CSSProperties;
  className?: string;
}

export const ColorPicker = ({ style, className, size = "middle", ...rest }: ColorPickerProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ColorPickerAntd
      style={{ ...style }}
      className={cn(isDarkMode && "dark", className)}
      size={size}
      {...rest}
    />
  );
};
