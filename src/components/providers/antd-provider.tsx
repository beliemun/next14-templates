"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";

export const AntdProvider = ({ children }: { children: ReactNode }) => (
  <AntdRegistry>
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#722ed1",
          colorInfo: "#722ed1",
          borderRadius: 6,
          wireframe: false,
          fontSize: 14,
        },
        components: {},
      }}
    >
      {children}
    </ConfigProvider>
  </AntdRegistry>
);
