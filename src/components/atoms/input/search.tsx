import { cn } from "@/styles";
import { InputRef } from "antd";
import SearchAtnd from "antd/es/input/Search";
import { SearchProps as SearchAntdProps } from "antd/lib/input";
import { ForwardedRef, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";
import "./styles.css";

export interface SearchProps extends SearchAntdProps {}

const Search = (
  { className, size = "middle", ...rest }: SearchProps,
  ref: ForwardedRef<InputRef>
) => {
  return (
    <ConfigProvider>
      <SearchAtnd ref={ref} className={cn(size, className)} size={size} {...rest} />
    </ConfigProvider>
  );
};

export default forwardRef<InputRef, SearchProps>(Search);
