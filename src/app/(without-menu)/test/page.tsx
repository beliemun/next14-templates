"use client";

import { Animate, Button } from "@/components/atoms";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Text() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible((prev) => !prev);

  return <div className="col-center size-full h-screen gap-20 bg-red-100"></div>;
}
