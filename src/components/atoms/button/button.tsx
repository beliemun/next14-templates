"use client";

import { cn } from "@/styles";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { buttonStyles, waveRoundStyle, waveStyles } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";
import { Tooltip } from "../tooltip";
import { ButtonProps } from "./types";
import { motion, Variants, useAnimation } from "framer-motion";

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
    scale: 1.2,
    transition: { duration: 0.3, ease: "easeInOut" },
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
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const btnController = useAnimation();
  const waveController = useAnimation();

  useEffect(() => {
    btnController.start(btnVariants.visible);
  }, []);

  const handleClick = () => {
    if (disabled || loading || isAnimating) return;
    setIsAnimating(true);
    waveController
      .start(waveVariants.click)
      .then(() => waveController.start(waveVariants.blur))
      .then(() => waveController.start(waveVariants.hidden))
      .then(() => setIsAnimating(false));
    btnController.start(btnVariants.click).then(() => btnController.start(btnVariants.visible));
  };

  const btnProps = { initial: "hidden", animate: btnController, exit: "hidden" };
  const waveProps = { initial: "hidden", animate: waveController, exit: "hidden" };

  return (
    <motion.div
      className={cn(
        "relative self-start overflow-hidden",
        waveRoundStyle({ buttonRound, buttonSize })
      )}
      variants={btnVariants}
      {...btnProps}
      onClick={handleClick}
    >
      {/* Wave */}
      <motion.div
        variants={waveVariants}
        {...waveProps}
        className={cn(
          "absolute top-0 left-0 w-full h-full rounded-full z-10 cursor-pointer",
          waveStyles({ buttonColor, buttonStyle, disabled, loading })
        )}
      />
      {/* Button */}
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
    </motion.div>
  );
};

export default forwardRef(Button);
