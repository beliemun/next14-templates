"use client";

import { Text, Title } from "@/components/atoms";
import { Layout, theme } from "antd";
import { useEffect, useState } from "react";

export const PageLayout = ({
  title,
  children,
}: {
  title?: React.ReactNode | string;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}) => {
  const [isXsSize, setIsXsSize] = useState(false);
  const {
    token: { colorText, colorBorder, colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const updateCollapsedWidth = () => {
      setIsXsSize(window.innerWidth < 480);
    };
    window.addEventListener("resize", updateCollapsedWidth);
    updateCollapsedWidth();

    return () => window.removeEventListener("resize", updateCollapsedWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout style={{ backgroundColor: colorBgContainer }} className={"col-flex overflow-hidden"}>
      {typeof title === "string" ? (
        <>
          {isXsSize ? (
            <Text
              type="xl-semibold"
              style={{ color: colorText }}
              className="flex flex-row justify-start items-center h-12 xs:h-20 p-4 xs:p-8"
            >
              {title}
            </Text>
          ) : (
            <Title
              type="h6-semibold"
              style={{ color: colorText }}
              className="flex flex-row justify-start items-center h-12 xs:h-20 p-4 xs:p-8"
            >
              {title}
            </Title>
          )}
        </>
      ) : (
        <>{title}</>
      )}
      <Layout
        style={{
          color: colorText,
          backgroundColor: colorBgContainer,
          minHeight: "calc(100vh - 80px)",
          borderTopWidth: "1px",
          borderColor: colorBorder,
          overflow: "hidden",
        }}
        className=""
      >
        {children}
      </Layout>
    </Layout>
  );
};
