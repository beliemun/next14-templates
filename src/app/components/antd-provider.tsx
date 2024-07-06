"use client";

import { ConfigProvider } from "antd";
import { ReactNode } from "react";

export const AntdProvider = ({ children }: { children: ReactNode }) => (
  <ConfigProvider
    theme={{
      // algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: "#722ed1",
        colorInfo: "#722ed1",
        borderRadius: 6,
        wireframe: false,
        fontSize: 15,
        boxShadow: "0 0 0 2px rgba(8, 94, 20, 0.2)",
      },
    }}
  >
    {children}
  </ConfigProvider>
);
