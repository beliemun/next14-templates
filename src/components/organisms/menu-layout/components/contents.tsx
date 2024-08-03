"use client";

import { useLayoutStore } from "@/stores/useLayoutStore";
import { Layout } from "antd";
import { ReactNode } from "react";

export const Contents = ({ children }: { children: ReactNode }) => {
  const { isCollapsed } = useLayoutStore();

  return (
    <Layout
      className="transition-all duration-300 ease-out"
      style={{ marginLeft: isCollapsed ? 80 : 256, overflow: "hidden" }}
    >
      {children}
    </Layout>
  );
};
