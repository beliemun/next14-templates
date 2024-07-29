"use client";

import { Title } from "@/components/atoms";
import { Layout, theme } from "antd";

export const PageLayout = ({
  children,
  title,
}: {
  className?: string | undefined;
  children?: React.ReactNode | undefined;
  title: React.ReactNode | string;
}) => {
  const {
    token: { colorBgBase, colorText, colorBorder },
  } = theme.useToken();
  return (
    <Layout className={"col-flex"}>
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
          overflow: "auto",
        }}
      >
        {children}
      </Layout>
    </Layout>
  );
};
