import { EllipsisOutlined } from "@ant-design/icons";
import { Divider } from "antd";

interface MenuWrapperProps {
  children: React.ReactNode;
  title: string | undefined;
}

export const MenuWrapper = ({ children, title }: MenuWrapperProps) => {
  return (
    <div className="py-2">
      {title ? (
        <span className="px-4 text-xs text-black/50">{title}</span>
      ) : (
        <div className="w-full text-center">
          <EllipsisOutlined className="text-xl" />
        </div>
      )}
      {children}
    </div>
  );
};
