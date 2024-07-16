"use client";

import { cn, colors, hexToRGBA } from "@/styles";
import { ConfigProvider, Input as InputAntd, InputProps as InputAntdProps } from "antd";
import { useDarkModeStore } from "@/stores";
import { CSSProperties } from "react";

interface InputProps extends InputAntdProps {
  stlyes?: CSSProperties;
  className?: string;
}

export const Input = ({ style, className, ...rest }: InputProps) => {
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
      <InputAntd style={{ ...style }} className={cn(className)} {...rest} />
    </ConfigProvider>
  );
};
