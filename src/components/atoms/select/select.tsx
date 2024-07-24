"use client";

import { cn, colors } from "@/styles";
import { ConfigProvider, Select as SelectAntd, SelectProps as SelectAntdProps } from "antd";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import "./styles.css";

export interface SelectProps extends SelectAntdProps {}

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
