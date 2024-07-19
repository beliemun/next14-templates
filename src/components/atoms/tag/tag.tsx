"use client";

import { CSSProperties, ReactNode, useState } from "react";
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
  closable?: boolean;
  onClose?: () => void;
}

export const Tag = ({
  style,
  className,
  children,
  tagStyle = "outline",
  tagSize = "default",
  tagColor = "gray",
  icon,
  closable = false,
  onClose,
  ...rest
}: TagProps) => {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    if (onClose) {
      setHide((prev) => !prev);
      onClose();
    }
  };

  return (
    <div
      style={{ ...style }}
      className={cn(
        tagStyles({ tagStyle, tagSize, tagColor }),
        { "pr-2": tagSize, hidden: hide },
        className
      )}
      {...rest}
    >
      {icon ? (
        <span style={{ paddingRight: tagSize ? 4 : 6, fontSize: tagSize === "sm" ? 9 : 12 }}>
          {icon}
        </span>
      ) : null}
      {children}
      {closable ? (
        <button onClick={handleHide} style={{ fontSize: 11, marginLeft: 4, opacity: 0.5 }}>
          ✕
        </button>
      ) : null}
    </div>
  );
};
