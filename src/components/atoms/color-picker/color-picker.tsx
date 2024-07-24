"use client";

import { cn } from "@/styles";
import { ColorPicker as ColorPickerAntd, ColorPickerProps as ColorPickerAtndProps } from "antd";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import "./styles.css";

export interface ColorPickerProps extends ColorPickerAtndProps {}

export const ColorPicker = ({ className, size = "middle", ...rest }: ColorPickerProps) => {
  const { isDarkMode } = useDarkModeStore();
  return <ColorPickerAntd className={cn(isDarkMode && "dark", className)} size={size} {...rest} />;
};
