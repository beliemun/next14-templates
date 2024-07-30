"use client";

import { Title } from "@/components/atoms";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { Layout, theme } from "antd";
import styled from "styled-components";

export const PageLayout = ({
  title,
  children,
}: {
  title?: React.ReactNode | string;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}) => {
  const { isDarkMode } = useDarkModeStore();
  const {
    token: { colorBgBase, colorText, colorBorder },
  } = theme.useToken();
  return (
    <Layout className={"col-flex overflow-hidden"}>
      <Title
        type="h6-semibold"
        style={{ color: colorText, backgroundColor: colorBgBase }}
        className="flex flex-row justify-start items-center h-20 p-8"
      >
        {title}
      </Title>
      <Layout
        style={{
          color: colorText,
          backgroundColor: colorBgBase,
          minHeight: "calc(100vh - 80px)",
          borderTopWidth: "1px",
          borderColor: colorBorder,
          overflow: "hidden",
        }}
      >
        {children}
      </Layout>
    </Layout>
  );
};
