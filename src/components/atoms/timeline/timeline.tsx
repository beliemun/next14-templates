import { cn } from "@/lib/utils";
import { Timeline as TimelineAntd, TimelineProps as TimelineAntdProps } from "antd";

export interface TimelineProps extends TimelineAntdProps {
  className?: string;
}

export const Timeline = ({ className, ...rest }: TimelineProps) => {
  return <TimelineAntd className={cn(className)} {...rest}></TimelineAntd>;
};
