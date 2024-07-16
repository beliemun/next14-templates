"use client";

import { useDarkModeStore } from "@/stores";
import { cn, colors, hexToRGBA } from "@/styles";
import { ConfigProvider } from "antd";
import SearchAtnd from "antd/es/input/Search";
import { SearchProps as SearchAntdProps } from "antd/lib/input";
import { CSSProperties } from "react";
import "./styles.css";

interface SearchProps extends SearchAntdProps {
  style?: CSSProperties;
  className?: string;
  children?: string;
}

export const Search = ({ style, className, children, size = "middle", ...rest }: SearchProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            // small
            inputFontSizeSM: 14,
            borderRadiusSM: 8,
            paddingInlineSM: 12,
            paddingBlockSM: 6,

            // medium
            inputFontSize: 14,
            borderRadius: 8,
            paddingInline: 14,
            paddingBlock: 10,

            // large
            inputFontSizeLG: 16,
            borderRadiusLG: 8,
            paddingInlineLG: 14,
            paddingBlockLG: 12,

            // color
            hoverBorderColor: colors.primary[500],
            activeShadow: isDarkMode
              ? `0 0 0 4px ${hexToRGBA({ hex: colors.primary[100], alpha: 0.3 })}`
              : `0 0 0 4px ${hexToRGBA({ hex: colors.primary[500], alpha: 0.3 })}`,
          },
        },
      }}
    >
      <SearchAtnd
        style={{ ...style }}
        className={cn(size, className)}
        size={size}
        {...rest}
      ></SearchAtnd>
    </ConfigProvider>
  );
};
