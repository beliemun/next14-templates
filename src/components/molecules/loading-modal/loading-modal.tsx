"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LoadingModalProps } from "./types";
import { useEffect, useState } from "react";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { Text } from "@/components/atoms";
import { theme } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
export const LoadingModal = ({
  loading = true,
  message = undefined,
  size = 480,
  onClose,
}: LoadingModalProps) => {
  const [visible, setVisible] = useState(true);

  const { isDarkMode } = useDarkModeStore();
  const { colorText } = theme.useToken().token;

  useEffect(() => {
    if (!loading) {
      setVisible(false);
      setTimeout(() => onClose?.(), 500);
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.85)" : "rgba(240, 240, 240, 0.85)",
          }}
          className={
            "fixed row-center w-full h-full min-h-screen top-0 left-0 bottom-0 right-0 m-auto gap-4"
          }
        >
          <LoadingOutlined style={{ color: colorText, opacity: 0.5, fontSize: 18 }} spin />
          {message ? <Text style={{ color: colorText, opacity: 0.5 }}>{message}</Text> : null}
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
