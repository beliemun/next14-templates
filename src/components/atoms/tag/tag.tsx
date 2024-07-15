import { CSSProperties, ReactNode } from "react";
import { TagSizeType, TagStyleType } from "./types";
import { cn, ColorType } from "@/styles";
import { tagStyles } from "./styles";

export interface TagProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  tagStyle?: TagStyleType;
  tagSize?: TagSizeType;
  tagColor?: ColorType;
  icon?: ReactNode;
}

export const Tag = ({
  style,
  className,
  children,
  tagStyle = "outline",
  tagSize = "sm",
  tagColor = "gray",
  icon,
}: TagProps) => {
  return (
    <span
      style={{ ...style }}
      className={cn(tagStyles({ tagStyle, tagSize, tagColor }), className)}
    >
      {icon ? (
        <span style={{ marginRight: tagSize ? 4 : 6, fontSize: tagSize === "sm" ? 9 : 12 }}>
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  );
};
