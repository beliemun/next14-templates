import { cn, ColorType } from "@/styles";
import { ButtonHTMLAttributes, CSSProperties, ForwardedRef, forwardRef, ReactNode } from "react";
import { ButtonRoundType, ButtonSizeType, ButtonStyleType } from "./types";
import { buttonStyles } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  buttonRound?: ButtonRoundType;
  buttonStyle?: ButtonStyleType;
  buttonSize?: ButtonSizeType;
  buttonColor?: ColorType;
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
      buttonStyle = "solid",
      buttonSize = "default",
      buttonColor = "primary",
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
          buttonStyles({
            buttonRound,
            buttonStyle,
            buttonSize,
            buttonColor,
            fullWidth,
            disabled,
            loading,
          }),
          className
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
