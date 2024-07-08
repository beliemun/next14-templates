"use client";

import useDarkMode from "@/stores/useDarkModeStore/useDarkModeStore";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";

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
            colorPrimary: "#a03eff",
            colorInfo: "#a03eff",
          },
          components: {
            Typography: {
              colorLinkActive: "rgb(172, 87, 255)",
              colorLink: "rgb(175, 94, 255)",
              colorLinkHover: "rgb(153, 49, 255)",
            },
            Menu: {
              darkGroupTitleColor: "rgb(22, 119, 255)",
            },
            Button: {
              colorPrimary: "rgb(160, 62, 255)",
              colorLinkActive: "rgb(172, 87, 255)",
              colorLinkHover: "rgb(153, 49, 255)",
              colorLink: "rgb(171, 85, 255)",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};
