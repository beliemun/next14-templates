"use client";

import { cn } from "@/styles";
import { ButtonHTMLAttributes, CSSProperties, ForwardedRef, forwardRef, ReactNode } from "react";
import { ButtonColorType, ButtonRoundType, ButtonSizeType, ButtonTypeType } from "./types";
import { buttonStyles } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  buttonRound?: ButtonRoundType;
  buttonType?: ButtonTypeType;
  buttonSize?: ButtonSizeType;
  buttonColor?: ButtonColorType;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = forwardRef(
  (
    {
      style,
      className,
      children,
      buttonRound = "round",
      buttonType = "solid",
      buttonSize = "default",
      buttonColor = "red",
      fullWidth,
      disabled,
      loading,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        style={{ ...style }}
        className={cn(
          className,
          buttonStyles({
            buttonRound,
            buttonType,
            buttonSize,
            buttonColor,
            fullWidth,
            disabled,
          }),
          ""
        )}
        ref={ref}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? <LoadingOutlined className="mr-2" /> : null}
        {children}
      </button>
    );
  }
);
