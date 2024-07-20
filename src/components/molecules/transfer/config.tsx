"use client";

import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { colors, hexToRGBA } from "@/styles";
import { ConfigProvider as ConfigProviderAntd } from "antd";
import { ReactNode } from "react";

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProviderAntd
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
      {children}
    </ConfigProviderAntd>
  );
};
