"use client";

import { cn, colors } from "@/styles";
import { ConfigProvider, Select as SelectAntd, SelectProps as SelectAntdProps } from "antd";
import { CSSProperties, ReactNode } from "react";
import { useDarkModeStore } from "@/stores";
import "./styles.css";

interface SelectProps extends SelectAntdProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export const Select = ({ style, className, children, size = "middle", ...rest }: SelectProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            controlPaddingHorizontalSM: 12,
            borderRadiusSM: 8,
            borderRadius: 8,
            borderRadiusLG: 8,
            multipleItemHeightSM: 24,
            multipleItemHeight: 28,
            multipleItemHeightLG: 32,
            multipleItemBg: isDarkMode ? colors.slate[800] : colors.slate[100],
          },
        },
      }}
    >
      <SelectAntd
        style={{ borderRadius: 8, ...style }}
        className={cn(isDarkMode && "dark", size, className)}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};
