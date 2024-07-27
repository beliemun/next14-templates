"use client";

import { useState } from "react";
import { PageModalProps } from "./types";
import { AnimatePresence, motion, useAnimate, useAnimation, Variants } from "framer-motion";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { theme } from "antd";
import { ResizableWapper } from "@/components/organisms/menu-layout/components";
import { cn } from "@/styles";
import { Button, Text, Title } from "@/components/atoms";
import { CloseOutlined, ExpandAltOutlined, ShrinkOutlined } from "@ant-design/icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { loadingJson } from "@/assets/lotties";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const contentsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const animationProps = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
};

export const PageModal = ({
  title = undefined,
  description = undefined,
  children,
  actions = [],
  loading = false,
  loadingMessage,
  onClose,
}: PageModalProps) => {
  const [worker, setWorker] = useState(null);
  const [visible, setVisible] = useState(true);
  const [isFullWidth, setIsFullWitdh] = useState(false);

  const { isDarkMode } = useDarkModeStore();
  const { colorBgBase, colorBorder } = theme.useToken().token;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 500);
  };
  const handleResize = () => setIsFullWitdh((prev) => !prev);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.figure
          variants={containerVariants}
          {...animationProps}
          style={{
            backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.85)" : "rgba(240, 240, 240, 0.85)",
          }}
          className={
            "fixed col-center w-full h-full min-h-screen top-0 left-0 bottom-0 right-0 m-auto"
          }
        >
          {loading ? (
            <motion.div
              variants={containerVariants}
              {...animationProps}
              style={{ backgroundColor: colorBgBase, borderColor: colorBorder }}
              className="col-center w-[1280px] h-screen gap-2 border-x"
            >
              <DotLottieReact className="size-32" data={loadingJson} loop autoplay />
              {loadingMessage ? (
                <Text type="base-semibold" style={{ marginTop: -40 }}>
                  {loadingMessage}
                </Text>
              ) : null}
            </motion.div>
          ) : (
            <ResizableWapper isFullWidth={isFullWidth} ignoreBackgroundColor>
              <header
                style={{ backgroundColor: colorBgBase, borderColor: colorBorder }}
                className={cn("flex flex-row justify-between items-center h-28 px-8 border-b")}
              >
                <motion.div variants={contentsVariants} {...animationProps}>
                  <Title type="h5-semibold">{title}</Title>
                  <Text color="description">{description}</Text>
                </motion.div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row-reverse gap-4">
                    {actions?.map((action, index) => (
                      <Button
                        key={index}
                        className="min-w-32"
                        buttonStyle={action?.style}
                        buttonColor={action?.color}
                        onClick={action?.onClick ?? handleClose}
                      >
                        {action?.lable}
                      </Button>
                    ))}
                  </div>
                  <Button
                    buttonSize="sm"
                    buttonColor="gray"
                    buttonStyle="soft"
                    tooltipTitle={isFullWidth ? "화면축소" : "화면확장"}
                    onClick={handleResize}
                  >
                    {isFullWidth ? <ShrinkOutlined /> : <ExpandAltOutlined />}
                  </Button>
                  <Button
                    buttonSize="sm"
                    buttonColor="gray"
                    buttonStyle="soft"
                    tooltipTitle={"닫기"}
                    onClick={handleClose}
                  >
                    <CloseOutlined />
                  </Button>
                </div>
              </header>
              <main
                style={{ backgroundColor: colorBgBase }}
                className="flex flex-col w-full h-full p-8 overflow-auto pb-36"
              >
                <motion.div variants={contentsVariants} {...animationProps}>
                  {children}
                </motion.div>
              </main>
            </ResizableWapper>
          )}
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
