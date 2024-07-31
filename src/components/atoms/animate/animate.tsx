"use client";

import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { AnimateProps } from "./types";
import { animations } from "./animations";
import { useEffect, useState } from "react";

const Animate = ({ name, type = "show-up", layoutId, transition, children }: AnimateProps) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => setIsMount(true), []);

  return isMount ? (
    <AnimatePresence>
      <motion.div
        key={name}
        variants={animations[type]}
        initial={"initial"}
        animate={{
          ...animations[type]["animate"],
          ...(transition && { transition: { ...transition } }),
        }}
        exit={"exit"}
        layoutId={layoutId}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  ) : null;
};

export default Animate;
