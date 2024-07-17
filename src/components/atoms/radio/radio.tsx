import { cn } from "@/styles";
import { Radio as RadioAntd, RadioProps as RadioAntdProps } from "antd";
import { CSSProperties } from "react";
import "./styles.css";

interface RadioProps extends RadioAntdProps {
  style?: CSSProperties;
  className?: string;
}

const Radio = ({ style, className, ...rest }: RadioProps) => {
  return <RadioAntd style={{ ...style }} className={cn(className)} {...rest} />;
};

Radio.Group = RadioAntd.Group;

export default Radio;
