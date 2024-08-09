import { Button } from "@/components/atoms";
import { colors } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { useDarkModeStore } from "@/stores/useDarkModeStore";

import {
  ExpandAltOutlined,
  MenuUnfoldOutlined,
  MoonFilled,
  MoonOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";
import { theme } from "antd";
import { useEffect, useState } from "react";

interface MenuFooter {
  collapsed: boolean;
  isFullWidth: boolean;
  isSmallMode: boolean;
  onResize: () => void;
  onCollapse: () => void;
}

export const MenuFooter = ({
  collapsed,
  isFullWidth,
  isSmallMode,
  onResize,
  onCollapse,
}: MenuFooter) => {
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const {
    token: { colorBgContainer, colorBorder, sizeMD },
  } = theme.useToken();

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={cn(
        `fixed bottom-0 transition-all duration-200 ease-in-out`,
        collapsed ? "col-center w-12 h-36 xs:w-20" : "row-center w-64 h-20",
        { "h-20": isSmallMode && collapsed }
      )}
      style={{
        backgroundColor: colorBgContainer,
        borderTop: `1px solid ${colorBorder}`,
        borderRight: `1px solid ${colorBorder}`,
      }}
    >
      <div className={cn(collapsed ? "col-center" : "row-center")}>
        {isSmallMode ? null : (
          <>
            <Button
              buttonSize="sm"
              buttonColor="gray"
              buttonStyle="ghost"
              tooltipTitle={collapsed ? "메뉴확장" : "메뉴축소"}
              tooltipPlacement={collapsed ? "right" : "top"}
              onClick={onCollapse}
            >
              <MenuUnfoldOutlined
                style={{
                  fontSize: sizeMD,
                  transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "all 0.2s ease-in-out",
                }}
              />
            </Button>
            <Button
              buttonSize="sm"
              buttonColor="gray"
              buttonStyle="ghost"
              tooltipTitle={isFullWidth ? "화면축소" : "화면확장"}
              tooltipStyle={{ visibility: collapsed ? "hidden" : "visible" }}
              tooltipPlacement={collapsed ? "right" : "top"}
              onClick={onResize}
            >
              {isFullWidth ? (
                <ShrinkOutlined style={{ fontSize: sizeMD }} />
              ) : (
                <ExpandAltOutlined style={{ fontSize: sizeMD }} />
              )}
            </Button>
          </>
        )}

        <Button
          buttonSize="sm"
          buttonColor="gray"
          buttonStyle="ghost"
          tooltipTitle={isDarkMode ? "일반모드" : "다크모드"}
          tooltipStyle={{ visibility: collapsed ? "hidden" : "visible" }}
          tooltipPlacement={collapsed ? "right" : "top"}
          onClick={handleDarkMode}
        >
          {isDarkMode ? (
            <MoonFilled style={{ fontSize: sizeMD, color: colors.primary[500] }} />
          ) : (
            <MoonOutlined style={{ fontSize: sizeMD }} />
          )}
        </Button>
      </div>
    </div>
  );
};
