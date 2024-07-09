"use client";

import useDarkMode from "@/stores/useDarkModeStore/useDarkModeStore";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";
import colors from "tailwindcss/colors";

export const AntdProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : undefined,
          token: {
            borderRadius: 6,
            wireframe: false,
            fontSize: 14,
            colorPrimary: colors.teal[500],
            colorInfo: colors.teal[500],
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};
