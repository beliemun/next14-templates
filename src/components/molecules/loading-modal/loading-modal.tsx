"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LoadingModalProps } from "./types";
import { useEffect, useState } from "react";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { Text } from "@/components/atoms";
import { theme } from "antd";
import { loadingJson } from "@/assets/lotties";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const LoadingModal = ({
  loading = true,
  message = undefined,
  onClose,
}: LoadingModalProps) => {
  const [visible, setVisible] = useState(true);

  const { isDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (!loading) {
      setVisible(false);
      setTimeout(() => onClose?.(), 500);
    }
  }, [loading, onClose]);

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
            "fixed col-center w-full h-full min-h-screen top-0 left-0 bottom-0 right-0 m-auto gap-4"
          }
        >
          <DotLottieReact className="size-32" data={loadingJson} loop autoplay />
          {message ? (
            <Text type="base-semibold" style={{ marginTop: -40 }}>
              {message}
            </Text>
          ) : null}
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
