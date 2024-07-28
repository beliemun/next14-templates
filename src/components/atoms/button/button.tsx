"use client";

import { cn } from "@/styles";
import { ForwardedRef, forwardRef, useCallback, useEffect, useState } from "react";
import { buttonStyles, buttonPaddingStyle, waveStyles } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";
import { ButtonProps } from "./types";
import { motion, Variants, useAnimation, MotionProps } from "framer-motion";
import { Tooltip } from "@/components/atoms";

const btnVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 240, damping: 12 },
  },
  click: {
    scale: 0.95,
    transition: { type: "spring", duration: 0.1 },
  },
};

const waveVariants: Variants = {
  hidden: { opacity: 0, scale: 0, transition: { duration: 0 } },
  click: {
    opacity: 1,
    scale: 1.5,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  blur: { opacity: 0, scale: 1.2, transition: { duration: 0.3 } },
};

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
  }: ButtonProps & MotionProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const btnController = useAnimation();
  const waveController = useAnimation();

  useEffect(() => {
    btnController.start(btnVariants.visible);
  }, []);

  const handleClick = useCallback(() => {
    if (disabled || loading || isAnimating) return;
    setIsAnimating(true);
    console.log("check", disabled, loading, isAnimating);
    waveController
      .start(waveVariants.click)
      .then(() => waveController.start(waveVariants.blur))
      .then(() => waveController.start(waveVariants.hidden))
      .then(() => setIsAnimating(false));
    btnController.start(btnVariants.click).then(() => btnController.start(btnVariants.visible));
  }, [disabled, loading, isAnimating]);

  const btnProps = { initial: "hidden", animate: btnController, exit: "hidden" };
  const waveProps = { initial: "hidden", animate: waveController, exit: "hidden" };

  return (
    <Tooltip title={tooltipTitle} style={tooltipStyle} placement={tooltipPlacement}>
      <div
        style={{ ...style }}
        className={cn(
          "relative overflow-hidden",
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
      >
        <motion.button
          variants={btnVariants}
          {...btnProps}
          ref={ref}
          className={cn("row-center w-full h-full", buttonPaddingStyle({ buttonSize }))}
          disabled={disabled || loading}
          onClick={handleClick}
          {...rest}
        >
          <motion.div
            variants={waveVariants}
            {...waveProps}
            className={cn(
              "absolute top-0 left-0 w-full h-full rounded-full z-10 cursor-pointer",
              waveStyles({ buttonColor, buttonStyle, disabled, loading })
            )}
          />
          {loading ? <LoadingOutlined className="mr-2" /> : null}
          <div className={cn("select-none")}>{children}</div>
        </motion.button>
      </div>
    </Tooltip>
  );
};

export default forwardRef(Button);
