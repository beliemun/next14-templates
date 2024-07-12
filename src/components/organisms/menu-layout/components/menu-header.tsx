import { cn } from "@/styles";
import { theme } from "antd";

export const MenuHeader = ({ collapsed }: { collapsed: boolean }) => {
  const {
    token: { colorTextDisabled },
  } = theme.useToken();
  return (
    <div className={cn("col-center")}>
      <div
        className={cn(
          "size-full border border-dashed rounded-full transition-all duration-200",
          collapsed ? "size-12 m-4" : "size-12 m-4"
        )}
        style={{ borderColor: colorTextDisabled }}
      />
    </div>
  );
};
