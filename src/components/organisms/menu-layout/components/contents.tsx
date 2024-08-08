"use client";

import { cn } from "@/lib/utils";
import { useLayoutStore } from "@/stores/useLayoutStore";
import { Layout } from "antd";
import { ReactNode } from "react";

export const Contents = ({ children }: { children: ReactNode }) => {
  const { isCollapsed } = useLayoutStore();

  return (
    <Layout
      className={cn(
        "transition-all duration-300 ease-out overflow-hidden",
        isCollapsed ? "ml-12 xs:ml-20" : "ml-64"
      )}
    >
      {children}
    </Layout>
  );
};
