import { cn } from "@/styles";
import { Pagination as PaginationAntd, PaginationProps as PaginationAntdProps } from "antd";

interface PaginationProps extends PaginationAntdProps {}

export const Pagination = ({ className, ...rest }: PaginationProps) => {
  return <PaginationAntd className={cn(className)} {...rest} />;
};
