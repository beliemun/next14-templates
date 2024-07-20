import { Button, Tooltip } from "@/components/atoms";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { cn, colors } from "@/styles";
import {
  ExpandAltOutlined,
  MenuUnfoldOutlined,
  MoonFilled,
  MoonOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";
import { theme } from "antd";

interface MenuFooter {
  isFullWidth: boolean;
  collapsed: boolean;
  onResize: () => void;
  onCollapse: () => void;
}

export const MenuFooter = ({ collapsed, isFullWidth, onResize, onCollapse }: MenuFooter) => {
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
        collapsed ? "col-center w-20 h-44" : "row-center w-64 h-20"
      )}
      style={{
        backgroundColor: colorBgContainer,
        borderTop: `1px solid ${colorBorder}`,
        borderRight: `1px solid ${colorBorder}`,
      }}
    >
      <div className={cn(collapsed ? "col-center" : "row-center")}>
        <Tooltip
          title={collapsed ? "메뉴확장" : "메뉴축소"}
          placement={collapsed ? "right" : "top"}
        >
          <Button buttonSize="sm" buttonColor="gray" buttonStyle="ghost" onClick={onCollapse}>
            <MenuUnfoldOutlined
              style={{
                fontSize: sizeMD,
                transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
                transition: "all 0.2s ease-in-out",
              }}
            />
          </Button>
        </Tooltip>
        <Tooltip
          title={isFullWidth ? "화면축소" : "화면확장"}
          style={{ visibility: collapsed ? "hidden" : "visible" }}
          placement={collapsed ? "right" : "top"}
        >
          <Button buttonSize="sm" buttonColor="gray" buttonStyle="ghost" onClick={onResize}>
            {isFullWidth ? (
              <ShrinkOutlined style={{ fontSize: sizeMD }} />
            ) : (
              <ExpandAltOutlined style={{ fontSize: sizeMD }} />
            )}
          </Button>
        </Tooltip>
        <Tooltip
          title={isDarkMode ? "일반모드" : "다크모드"}
          style={{ visibility: collapsed ? "hidden" : "visible" }}
          placement={collapsed ? "right" : "top"}
        >
          <Button buttonSize="sm" buttonColor="gray" buttonStyle="ghost" onClick={handleDarkMode}>
            {isDarkMode ? (
              <MoonFilled style={{ fontSize: sizeMD, color: colors.primary[500] }} />
            ) : (
              <MoonOutlined style={{ fontSize: sizeMD }} />
            )}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
