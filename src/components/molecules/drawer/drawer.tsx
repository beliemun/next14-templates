import { cn } from "@/styles";
import { Drawer as DrawerAntd, DrawerProps as DrawerAntdProps } from "antd";

export interface DrawerProps extends DrawerAntdProps {}

export const Drawer = ({ style, className, children, ...rest }: DrawerProps) => {
  return (
    <DrawerAntd style={{ ...style }} className={cn(className)} {...rest}>
      {children}
    </DrawerAntd>
  );
};
