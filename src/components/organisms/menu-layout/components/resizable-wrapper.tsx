"use client";

import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { cn } from "@/lib/utils";
import { theme } from "antd";
import styled, { css } from "styled-components";
import { useLayoutStore } from "@/stores/useLayoutStore";
import "../styles.css";

export type LayoutResizeType = "1280px" | "100%";

interface ResizableWapperProps {
  children: React.ReactNode;
  ignoreBackgroundColor?: boolean;
}

export const ResizableWapper = ({ children, ignoreBackgroundColor }: ResizableWapperProps) => {
  const {
    token: { colorBorder, colorBgBase },
  } = theme.useToken();
  const { isDarkMode } = useDarkModeStore();
  const { isFullWidth } = useLayoutStore();
  return (
    <div
      style={{
        backgroundColor: ignoreBackgroundColor
          ? "transparent"
          : isDarkMode
          ? colorBgBase
          : "rgba(240, 240, 240, 0.85)",
      }}
      className={cn("fixed col-center w-full h-full")}
    >
      <ScrollProvider
        $isDarkMode={isDarkMode}
        $isFullWidth={isFullWidth}
        $colorBorder={colorBorder}
        style={{ borderColor: colorBorder }}
        className={cn(
          "w-full h-screen transition-all duration-200 ease-in-out overflow-auto border-x"
        )}
      >
        {children}
      </ScrollProvider>
    </div>
  );
};

const ScrollProvider = styled.div<{
  $isDarkMode: boolean;
  $isFullWidth: boolean;
  $colorBorder: string;
}>`
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #64748b;
    ${({ $isDarkMode }) =>
      $isDarkMode
        ? css`
            background: #14b8a6;
          `
        : css`
            background: #64748b;
          `}
  }
  &::-webkit-scrollbar-track-piece {
    ${({ $isDarkMode }) =>
      $isDarkMode
        ? css`
            background: #000;
          `
        : css`
            background: #f1f5f9;
          `}
  }
  width: 100%;
  overflow: auto;
  transition: all 0.2s ease-in-out;
  ${({ $isFullWidth }) =>
    $isFullWidth
      ? css`
          max-width: 100%;
        `
      : css`
          max-width: 1280px;
        `}
`;
