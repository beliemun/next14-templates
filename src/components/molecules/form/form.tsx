"use client";

import { Text, Title } from "@/components/atoms";
import { cn } from "@/styles";
import { MotionProps, Variants, motion } from "framer-motion";
import { CSSProperties, DetailedHTMLProps, FormHTMLAttributes } from "react";

interface FormProps
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  style?: CSSProperties;
  className?: string;
  title?: string;
  description?: string;
  gap?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 10, transition: { duration: 0.5, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const animationProps = { initial: "hidden", animate: "visible", exit: "hidden" };

export const Form = ({
  style,
  className,
  title,
  description,
  children,
  gap = 30,
  ...rest
}: FormProps & MotionProps) => {
  return (
    <motion.form
      variants={containerVariants}
      {...animationProps}
      style={{ gap, ...style }}
      className={cn("flex flex-col w-full", className)}
      {...rest}
    >
      <div className={"flex flex-col gap-1 mb-1"}>
        <Title type="h6-semibold">{title}</Title>
        <Text type="sm-regular" color="description">
          {description}
        </Text>
      </div>
      {children}
    </motion.form>
  );
};
