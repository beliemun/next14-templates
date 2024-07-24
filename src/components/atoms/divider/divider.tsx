import { capitalizeFirstLetter } from "@/shared/utils";
import { cn } from "@/styles";
import { Divider as DividerAtnd, DividerProps as DividerAntdProps } from "antd";

export interface DividerProps extends DividerAntdProps {}

export const Divider = ({ className, children, ...rest }: DividerProps) => {
  return (
    <DividerAtnd className={cn(className)} {...rest}>
      {children ? capitalizeFirstLetter(String(children)) : null}
    </DividerAtnd>
  );
};
