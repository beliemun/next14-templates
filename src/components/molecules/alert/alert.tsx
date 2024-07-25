"use client";

import { Button, Skeleton, Text, Title } from "@/components/atoms";
import { useAlertStore } from "@/stores/useAlertStore";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { cn } from "@/styles";
import { CloseOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { AnimatePresence, motion } from "framer-motion";

export const Alert = () => {
  const {
    visible,
    size = 480,
    title,
    message,
    contents,
    actions,
    footerDirection = "right",
    footerFitable = false,
    loading = false,
    onDismiss,
  } = useAlertStore();
  const { isDarkMode } = useDarkModeStore();
  const { colorBgBase, boxShadow, colorText } = theme.useToken().token;
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
              className={cn(`flex flex-col`, "gap-6 p-6 rounded-xl")}
            >
              <header className="flex flex-row justify-between items-center">
                <Skeleton.Node />
                <Button buttonColor="slate" buttonStyle="soft" buttonSize="sm" onClick={onDismiss}>
                  <CloseOutlined style={{ color: colorText, fontSize: 10 }} />
                </Button>
              </header>
              <Skeleton.Input />
              <footer
                className={cn(
                  "flex gap-2",
                  footerDirection === "left" ? "flex-row" : "flex-row-reverse"
                )}
              >
                <Skeleton.Button />
              </footer>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.5 } }}
              exit={{ scale: 1, translateY: 20, transition: { type: "just" } }}
              style={{ backgroundColor: colorBgBase, boxShadow, width: size }}
              className={cn(`flex flex-col`, "gap-6 p-6 rounded-xl")}
            >
              <header className="flex flex-row justify-between items-center">
                <Title>{title}</Title>
                <Button buttonColor="slate" buttonStyle="soft" buttonSize="sm" onClick={onDismiss}>
                  <CloseOutlined style={{ color: colorText, fontSize: 10 }} />
                </Button>
              </header>
              {message ? <Text>{message}</Text> : null}
              {contents}
              <footer
                className={cn(
                  "flex gap-4",
                  footerDirection === "left" ? "flex-row" : "flex-row-reverse"
                )}
              >
                {actions?.map((action, index) => (
                  <Button
                    className={cn({ "flex-1": footerFitable })}
                    key={index}
                    buttonStyle={action?.style}
                    buttonColor={action?.color}
                    onClick={action?.onClick ?? onDismiss}
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