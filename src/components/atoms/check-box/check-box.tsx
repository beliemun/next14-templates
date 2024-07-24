import { cn } from "@/styles";
import { Checkbox as CheckboxAntd, CheckboxProps as CheckboxAntdProps } from "antd";
import "./styles.css";
import { CheckboxGroup } from "./check-box-group";

export interface CheckboxProps extends CheckboxAntdProps {}

const Checkbox = ({ className, ...rest }: CheckboxProps) => {
  return <CheckboxAntd className={cn(className)} {...rest} />;
};

Checkbox.Group = CheckboxGroup;

export { Checkbox };
