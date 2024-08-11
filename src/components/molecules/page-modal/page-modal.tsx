"use client";

import { useEffect, useState } from "react";
import { PageModalProps } from "./types";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { theme } from "antd";
import { ResizableWapper } from "@/components/organisms/menu-layout/components";
import { cn } from "@/lib/utils";
import { Button, Loading, Text, Title } from "@/components/atoms";
import { CloseOutlined, ExpandAltOutlined, ShrinkOutlined } from "@ant-design/icons";
import { useLayoutStore } from "@/stores/useLayoutStore";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const contentsVariants: Variants = {
  hidden: { opacity: 0, y: 10, transition: { duration: 0.5, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const animationProps = { initial: "hidden", animate: "visible", exit: "hidden" };

type SizeType = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

const SIZE: SizeType = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
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
  const [visible, setVisible] = useState(true);
  const [sizeType, setSizeType] = useState<keyof SizeType>("xs");
  const { isFullWidth, setIsFullWidth } = useLayoutStore();
  const { isDarkMode } = useDarkModeStore();
  const { colorBgContainer, colorBorder } = theme.useToken().token;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 500);
  };
  const handleResize = () => setIsFullWidth(!isFullWidth);

  useEffect(() => {
    const updateCollapsedWidth = () => {
      if (window.innerWidth < SIZE.xs) {
        setSizeType("xs");
      } else if (window.innerWidth < SIZE.sm) {
        setSizeType("sm");
      } else if (window.innerWidth < SIZE.md) {
        setSizeType("md");
      } else if (window.innerWidth < SIZE.lg) {
        setSizeType("lg");
      } else {
        setSizeType("xl");
      }
    };
    window.addEventListener("resize", updateCollapsedWidth);
    updateCollapsedWidth();

    return () => window.removeEventListener("resize", updateCollapsedWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(sizeType);
  }, [sizeType]);

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
              style={{ backgroundColor: colorBgContainer, borderColor: colorBorder }}
              className="col-center w-[1280px] h-screen gap-2 border-x"
            >
              <Loading loadingMessage={loadingMessage} />
            </motion.div>
          ) : (
            <ResizableWapper ignoreBackgroundColor>
              <header
                style={{ backgroundColor: colorBgContainer, borderColor: colorBorder }}
                className={cn(
                  "flex flex-row items-center border-b p-4 gap-3 h-28",
                  "md:h-24"
                  // "md:flex-row md:justify-between md:items-center md:px-8"
                )}
              >
                <motion.div
                  className="w-full pl-0 md:pl-4"
                  variants={contentsVariants}
                  {...animationProps}
                >
                  <Title className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</Title>
                  <Text color="description" className="overflow-label">
                    {description}
                  </Text>
                </motion.div>
                <div className="flex flex-col-reverse md:flex-row gap-4">
                  <div className="flex flex-row-reverse gap-4">
                    {actions?.map((action, index) => (
                      <Button
                        key={index}
                        buttonStyle={action?.style}
                        buttonColor={action?.color}
                        buttonSize={sizeType === "xl" || sizeType === "lg" ? "sm" : "xs"}
                        onClick={action?.onClick ?? handleClose}
                      >
                        {action?.lable}
                      </Button>
                    ))}
                  </div>
                  <div className="flex flex-row-reverse gap-4">
                    <Button
                      buttonSize="sm"
                      buttonColor="gray"
                      buttonStyle="soft"
                      tooltipTitle={"닫기"}
                      onClick={handleClose}
                    >
                      <CloseOutlined />
                    </Button>
                    <Button
                      buttonSize="sm"
                      buttonColor="gray"
                      buttonStyle="soft"
                      tooltipTitle={isFullWidth ? "화면축소" : "화면확장"}
                      onClick={handleResize}
                    >
                      {isFullWidth ? <ShrinkOutlined /> : <ExpandAltOutlined />}
                    </Button>
                  </div>
                </div>
              </header>
              <main
                style={{
                  backgroundColor: colorBgContainer,
                  height:
                    sizeType === "xl" || sizeType === "lg"
                      ? "calc(100vh - 96px)"
                      : "calc(100vh - 112px)",
                }}
                className="flex flex-col w-full p-8 overflow-auto"
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
