"use client";

import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { colors } from "@/lib/colors";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";

export const AntdProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkModeStore();
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
