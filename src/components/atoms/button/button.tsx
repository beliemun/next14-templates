import { cn } from "@/styles";
import { ForwardedRef, forwardRef } from "react";
import { buttonStyles } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";
import { Tooltip } from "../tooltip";
import { ButtonProps } from "./types";

const Button = (
  {
    style,
    className,
    children,
    buttonRound = "round",
    buttonStyle = "solid",
    buttonSize = "sm",
    buttonColor = "primary",
    fullWidth,
    disabled,
    loading,
    tooltipTitle,
    tooltipStyle,
    tooltipPlacement,
    showCloseButton = true,
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Tooltip title={tooltipTitle} style={tooltipStyle} placement={tooltipPlacement}>
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
    </Tooltip>
  );
};

export default forwardRef(Button);
