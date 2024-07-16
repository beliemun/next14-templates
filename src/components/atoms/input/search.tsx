import { cn } from "@/styles";
import { InputRef } from "antd";
import SearchAtnd from "antd/es/input/Search";
import { SearchProps as SearchAntdProps } from "antd/lib/input";
import { CSSProperties, forwardRef } from "react";
import { ConfigProvider } from "./config";
import "./styles.css";

export interface SearchProps extends SearchAntdProps {
  style?: CSSProperties;
  className?: string;
}

const Search = forwardRef<InputRef, SearchProps>(
  ({ style, className, size = "middle", ...rest }: SearchProps, ref) => {
    return (
      <ConfigProvider>
        <SearchAtnd
          ref={ref}
          style={{ ...style }}
          className={cn(size, className)}
          size={size}
          {...rest}
        />
      </ConfigProvider>
    );
  }
);

export default Search;
