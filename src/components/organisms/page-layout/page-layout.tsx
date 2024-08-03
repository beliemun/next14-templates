"use client";

import { Title } from "@/components/atoms";
import { Layout, theme } from "antd";

export const PageLayout = ({
  title,
  children,
}: {
  title?: React.ReactNode | string;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}) => {
  const {
    token: { colorText, colorBorder, colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={"col-flex overflow-hidden"}>
      <Title
        type="h6-semibold"
        style={{ color: colorText, backgroundColor: colorBgContainer }}
        className="flex flex-row justify-start items-center h-20 p-8"
      >
        {title}
      </Title>
      <Layout
        style={{
          color: colorText,
          backgroundColor: colorBgContainer,
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
