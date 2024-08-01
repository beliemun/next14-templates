"use client";

import { Button, Loading, Text, Title } from "@/components/atoms";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { cn } from "@/lib/utils";
import { CloseOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "./types";
import { useState } from "react";

export const Modal = ({
  title = undefined,
  message = undefined,
  children,
  actions = [{ lable: "Close", style: "solid" }],
  footerDirection = "right",
  footerFitable = false,
  loading = false,
  loadingMessage,
  size = 720,
  onClose,
}: ModalProps) => {
  const [visible, setVisible] = useState(true);

  const { isDarkMode } = useDarkModeStore();
  const { colorBgBase, boxShadow, colorText } = theme.useToken().token;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 500);
  };

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
            "fixed col-center w-full h-full min-h-screen top-0 left-0 bottom-0 right-0 m-auto"
          }
        >
          {loading ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.5 } }}
              exit={{ scale: 1, translateY: 20, transition: { type: "just" } }}
              style={{ backgroundColor: colorBgBase, boxShadow, width: size }}
              className={cn(`col-center justify-between min-h-[480px] gap-6 p-6 rounded-xl `)}
              layoutId="modal-layout"
            >
              <Loading loadingMessage={loadingMessage} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.5 } }}
              exit={{ scale: 1, translateY: 20, transition: { type: "just" } }}
              style={{ backgroundColor: colorBgBase, boxShadow, width: size }}
              className={cn(`flex flex-col`, "gap-6 p-6 rounded-xl")}
              layoutId="modal-layout"
            >
              <header className="flex flex-row justify-between items-center">
                <Title>{title}</Title>
                <Button
                  buttonColor="slate"
                  buttonStyle="soft"
                  buttonSize="sm"
                  onClick={handleClose}
                >
                  <CloseOutlined style={{ color: colorText, fontSize: 10 }} />
                </Button>
              </header>
              {message ? <Text>{message}</Text> : null}
              {children}
              <footer
                className={cn(
                  "flex gap-4",
                  footerDirection === "left" ? "flex-row" : "flex-row-reverse"
                )}
              >
                {actions?.map((action, index) => (
                  <Button
                    key={index}
                    buttonStyle={action?.style}
                    buttonColor={action?.color}
                    fullWidth={footerFitable}
                    onClick={action?.onClick ?? handleClose}
                  >
                    {action?.lable}
                  </Button>
                ))}
              </footer>
            </motion.div>
          )}
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
