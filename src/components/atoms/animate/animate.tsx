"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimateProps {
  children?: ReactNode;
  layoutId?: string;
  delay?: number;
}

const Animate = ({ children, layoutId, delay }: AnimateProps) => {
  const contentsVariants: Variants = {
    hidden: { opacity: 0, y: 10, transition: { duration: 0.5, ease: "easeOut" } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
  };
  const animationProps = { initial: "hidden", animate: "visible", exit: "exit" };

  return (
    <AnimatePresence>
      <motion.div variants={contentsVariants} {...animationProps} layoutId={layoutId}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
