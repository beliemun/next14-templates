import { cn } from "@/styles";
import { Radio as RadioAntd, RadioProps as RadioAntdProps } from "antd";
import "./styles.css";

export interface RadioProps extends RadioAntdProps {
  className?: string;
}

const Radio = ({ className, ...rest }: RadioProps) => {
  return <RadioAntd className={cn(className)} {...rest} />;
};

Radio.Group = RadioAntd.Group;

export default Radio;
