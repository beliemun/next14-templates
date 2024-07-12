import { theme } from "antd";

export type LayoutResizeType = "1280px" | "100%";

interface ResizableWapperProps {
  children: React.ReactNode;
  isFullWidth: boolean;
}

export const ResizableWapper = ({ children, isFullWidth }: ResizableWapperProps) => {
  const {
    token: { colorBorder },
  } = theme.useToken();

  return (
    <div className="col-center w-full h-full bg-black/10">
      <div
        className="w-full h-screen transition-all duration-200 ease-in-out border-x shadow-lg"
        style={{ maxWidth: isFullWidth ? "100%" : "1280px", borderColor: colorBorder }}
      >
        {children}
      </div>
    </div>
  );
};
