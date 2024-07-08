import useDarkMode from "@/stores/useDarkModeStore/useDarkModeStore";
import { cn } from "@/styles";
import {
  ExpandAltOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonFilled,
  MoonOutlined,
} from "@ant-design/icons";
import { Button, theme } from "antd";

interface MenuFooter {
  collapsed: boolean;
  onResize: () => void;
  onCollapse: () => void;
}

export const MenuFooter = ({ collapsed, onResize, onCollapse }: MenuFooter) => {
  const { isDarkMode, setDarkMode } = useDarkMode();
  const {
    token: { colorBgBase, colorBorder, sizeMD },
  } = theme.useToken();

  const handleDarkMode = () => setDarkMode(!isDarkMode);

  return (
    <div
      className={cn(
        `fixed bottom-0 transition-all duration-200 gap-2 ease-in-out`,
        collapsed ? "col-center w-20 h-36" : "row-center w-64 h-12"
      )}
      style={{ backgroundColor: colorBgBase, border: `1px solid ${colorBorder}` }}
    >
      <Button type="dashed" onClick={onCollapse}>
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: sizeMD }} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: sizeMD }} />
        )}
      </Button>
      <Button type="dashed" onClick={onResize}>
        <ExpandAltOutlined style={{ fontSize: sizeMD }} />
      </Button>
      <Button type="dashed" onClick={handleDarkMode}>
        {isDarkMode ? (
          <MoonFilled style={{ fontSize: sizeMD }} />
        ) : (
          <MoonOutlined style={{ fontSize: sizeMD }} />
        )}
      </Button>
    </div>
  );
};
