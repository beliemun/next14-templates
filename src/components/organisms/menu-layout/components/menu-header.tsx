import { cn } from "@/styles";
import { Divider, theme } from "antd";

export const MenuHeader = ({ collapsed }: { collapsed: boolean }) => {
  const {
    token: { colorBorder },
  } = theme.useToken();
  return (
    <div className={cn("col-center")}>
      <div
        className={cn(
          "size-full border border-dashed rounded-full transition-all duration-200",
          collapsed ? "size-12 m-4" : "size-12 m-4"
        )}
        style={{ borderColor: colorBorder }}
      />
      <Divider style={{ marginTop: 0, marginBottom: 10, borderColor: colorBorder }} />
    </div>
  );
};
