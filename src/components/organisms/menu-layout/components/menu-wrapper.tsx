import { Tooltip } from "@/components/atoms";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Divider, theme } from "antd";

interface MenuWrapperProps {
  children?: React.ReactNode;
  title: string | undefined;
  collapsed: boolean;
}

export const MenuWrapper = ({ children, title, collapsed }: MenuWrapperProps) => {
  const {
    token: { colorTextDescription, colorTextDisabled, fontSize },
  } = theme.useToken();
  return title ? (
    <div>
      {collapsed ? (
        <div className="w-full text-center">
          <Tooltip title={title}>
            <QuestionCircleOutlined style={{ color: colorTextDisabled, paddingTop: 10 }} />
          </Tooltip>
        </div>
      ) : (
        <Divider style={{ color: colorTextDescription, fontSize }} orientation="left">
          {title}
        </Divider>
      )}
      {children}
    </div>
  ) : (
    <div>{children}</div>
  );
};
