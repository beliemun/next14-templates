"use client";

import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { cn } from "@/styles";
import { theme } from "antd";

export type LayoutResizeType = "1280px" | "100%";

interface ResizableWapperProps {
  children: React.ReactNode;
  isFullWidth: boolean;
  ignoreBackgroundColor?: boolean;
}

export const ResizableWapper = ({
  children,
  isFullWidth,
  ignoreBackgroundColor,
}: ResizableWapperProps) => {
  const {
    token: { colorBorder },
  } = theme.useToken();
  const { isDarkMode } = useDarkModeStore();
  return (
    <div
      style={{
        backgroundColor: ignoreBackgroundColor
          ? "transparent"
          : isDarkMode
          ? "rgba(30, 30, 30, 0.85)"
          : "rgba(240, 240, 240, 0.85)",
      }}
      className={cn("fixed col-center w-full h-full")}
    >
      <div
        className={cn(
          "w-full h-screen transition-all duration-200 ease-in-out overflow-auto",
          ignoreBackgroundColor ? "border-x" : "shadow-lg"
        )}
        style={{
          maxWidth: isFullWidth ? "100%" : "1280px",
          borderLeft: `1px solid ${colorBorder}`,
          borderRight: `1px solid ${colorBorder}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
