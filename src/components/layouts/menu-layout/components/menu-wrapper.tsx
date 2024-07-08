import { EllipsisOutlined } from "@ant-design/icons";
import { Divider, theme } from "antd";

interface MenuWrapperProps {
  children: React.ReactNode;
  title: string | undefined;
}

export const MenuWrapper = ({ children, title }: MenuWrapperProps) => {
  const {
    token: { colorTextDescription, colorTextDisabled },
  } = theme.useToken();
  return (
    <div className="">
      {title ? (
        // <span className="px-4 text-xs text-black/50">{title}</span>
        <Divider style={{ color: colorTextDescription, fontSize: 13 }} orientation="left">
          {title}
        </Divider>
      ) : (
        <div className="w-full text-center">
          <EllipsisOutlined className="text-xl" />
        </div>
      )}
      {children}
    </div>
  );
};
