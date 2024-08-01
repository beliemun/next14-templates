import { cn } from "@/lib/utils";
import { Pagination as PaginationAntd, PaginationProps as PaginationAntdProps } from "antd";
import "./styles.css";

interface PaginationProps extends PaginationAntdProps {}

export const Pagination = ({ className, ...rest }: PaginationProps) => {
  return <PaginationAntd className={cn(className)} {...rest} />;
};
