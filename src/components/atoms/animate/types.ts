import { Transition } from "framer-motion";
import { ReactNode } from "react";

export type AnimationType = "show-up" | "turn-left" | "fall-down";

export interface AnimateProps {
  name?: string | number;
  type?: AnimationType;
  layoutId?: string;
  children?: ReactNode;
  transition?: Transition;
}
