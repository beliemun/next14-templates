"use client";

import { cn } from "@/lib/utils";
import { Upload, UploadProps as UploadAntdProps } from "antd";
import { CSSProperties } from "react";

interface UploadProps extends UploadAntdProps {
  style?: CSSProperties;
  className?: string;
}
export const Dragger = ({
  style,
  className,
  name = "file",
  action = "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  ...rest
}: UploadProps) => {
  return <Upload.Dragger style={{ ...style }} className={cn(className)} {...rest}></Upload.Dragger>;
};
