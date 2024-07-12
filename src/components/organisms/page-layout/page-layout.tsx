"use client";

import { Title } from "@/components/atoms";
import { cn } from "@/styles";
import { Layout, theme } from "antd";

export const PageLayout = ({
  className,
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
    <Layout className={cn(`h-screen`, className)} style={{ backgroundColor: colorBgBase }}>
      <Layout
        className="flex flex-row justify-center items-start bg-blue-400 max-h-20 p-4"
        style={{
          backgroundColor: colorBgBase,
        }}
      >
        <Title type="h5-bold" style={{ color: colorText }}>
          {title}
        </Title>
      </Layout>
      <Layout
        className="border-t overflow-auto"
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
