import { cn } from "@/styles";
import SearchAtnd from "antd/es/input/Search";
import { SearchProps as SearchAntdProps } from "antd/lib/input";
import { CSSProperties } from "react";

interface SearchProps extends SearchAntdProps {
  style?: CSSProperties;
  className?: string;
  children?: string;
}

export const Search = ({ style, className, children, ...rest }: SearchProps) => {
  return <SearchAtnd style={{ ...style }} className={cn(className)} {...rest}></SearchAtnd>;
};
