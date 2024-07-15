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
    <Layout style={{ backgroundColor: colorBgBase }} className={"col-flex h-screen overflow-auto"}>
      <Title
        type="h6-semibold"
        style={{ color: colorText }}
        className="flex flex-row justify-start items-center h-20 p-8"
      >
        {title}
      </Title>
      <Layout
        className="border-t"
        style={{
          maxHeight: "calc(100vh - 80px)",
          backgroundColor: colorBgBase,
          borderColor: colorBorder,
        }}
      >
        {children}
      </Layout>
    </Layout>
  );
};
