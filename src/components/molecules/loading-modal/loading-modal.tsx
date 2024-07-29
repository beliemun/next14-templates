"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LoadingModalProps } from "./types";
import { useEffect, useState } from "react";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { Loading, Text } from "@/components/atoms";
import { loadingLottie } from "@/assets/lotties";

// Lottie는 브라우저에서만 실행되는 웹 워커를 사용하기 때문에 클라이언트 사이드에서만 실행되어야 한다.
import dynamic from "next/dynamic";
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export const LoadingModal = ({
  loading = true,
  loadingMessage = undefined,
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
          <Loading loadingMessage={loadingMessage} />
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
