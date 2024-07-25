import { cn } from "@/styles";
import { Table as TableAntd, TableProps as TableAntdProps } from "antd";

interface TableProps extends TableAntdProps {}

export const Table = ({ className, ...rest }: TableProps) => {
  return <TableAntd className={cn(className)} {...rest} />;
};
