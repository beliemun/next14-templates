import { cn } from "@/styles";
import { theme } from "antd";

export const MenuHeader = ({ collapsed }: { collapsed: boolean }) => {
  const {
    token: { colorTextDisabled },
  } = theme.useToken();
  return (
    <div className={cn("col-center p-4")}>
      <div
        className={cn(
          "size-full border border-dashed transition-all duration-200",
          collapsed ? "size-12 rounded-full" : "size-24 rounded-full"
        )}
        style={{ borderColor: colorTextDisabled }}
      />
    </div>
  );
};
