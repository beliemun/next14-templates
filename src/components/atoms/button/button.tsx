"use client";

import { cn } from "@/styles";
import { ForwardedRef, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { buttonStyles, waveStyles } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";
import { ButtonProps } from "./types";
import { motion, Variants, useAnimation, MotionProps } from "framer-motion";
import { Tooltip } from "@/components/atoms";
import { useFormStatus } from "react-dom";

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
    scale: 1.3,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  blur: { opacity: 0, scale: 1.2, transition: { duration: 0.2 } },
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
    loading: staticLoading,
    tooltipTitle,
    tooltipStyle,
    tooltipPlacement,
    showCloseButton = true,
    skipAnimation = false,
    onClick,
    ...rest
  }: ButtonProps & MotionProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const [isMount, setIsMount] = useState(false);
  // 에니메이션 종료에 따라 리렌더가 되면 안됨
  const isAnimatingRef = useRef(false);
  const btnController = useAnimation();
  const waveController = useAnimation();
  const { pending } = useFormStatus();
  const loading = pending || staticLoading;

  useEffect(() => {
    setIsMount(true);
    btnController.start(btnVariants.visible);
  }, []);

  const handleClick = useCallback(() => {
    if (disabled || loading || !isMount) return;
    onClick?.();
    isAnimatingRef.current = true;
    waveController
      .start(waveVariants.click)
      .then(() => waveController.start(waveVariants.blur))
      .then(() => waveController.start(waveVariants.hidden))
      .then(() => (isAnimatingRef.current = false));
    btnController.start(btnVariants.click).then(() => btnController.start(btnVariants.visible));
  }, [disabled, loading, isMount]);

  const btnProps = {
    ...(!skipAnimation && { initial: "hidden" }),
    animate: btnController,
    exit: "hidden",
  };

  const waveProps = { initial: "hidden", animate: waveController, exit: "hidden" };

  return (
    <Tooltip
      className={fullWidth ? "flex w-full" : "self-center w-min"}
      title={tooltipTitle}
      style={tooltipStyle}
      placement={tooltipPlacement}
    >
      {/* CSS 스타일이 적용된 엘리먼트에 에니메이션을 적용하면 부하가 심하기 때문에 버튼과 분리해야 함 */}
      <motion.div className={cn({ "w-full": fullWidth })} variants={btnVariants} {...btnProps}>
        <button
          ref={ref}
          style={{ ...style }}
          className={cn(
            "relative row-center overflow-hidden",
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
          <div className={cn("select-none min-w-max")}>{children}</div>
        </button>
      </motion.div>
    </Tooltip>
  );
};

export default forwardRef(Button);
