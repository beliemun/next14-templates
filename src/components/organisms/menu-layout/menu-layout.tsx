"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { menu } from "./data";
import { MenuHeader } from "./components/menu-header";
import { MenuFooter, MenuWrapper, ResizableWapper } from "./components";
import { theme } from "antd";
import { Layout, Menu } from "@/components/atoms";
import "./styles.css";

export const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState("introduction");
  const [collapsed, setCollapsed] = useState(false);
  const [isFullWidth, setIsFullWitdh] = useState(false);

  const {
    token: { colorBorder },
  } = theme.useToken();

  const handleClickMenu = ({ key }: { key: string }) => {
    setSelectedKey(key);
    router.push(`/${key}`);
  };
  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  const handleResize = () => setIsFullWitdh((prev) => !prev);

  return (
    <Layout>
      <ResizableWapper isFullWidth={isFullWidth}>
        <Layout.Sider
          className="hide-scrollbar"
          theme={"light"}
          collapsible
          collapsed={collapsed}
          width={256}
          style={{
            overflow: "auto",
            height: "calc(100vh - 80px)",
            position: "fixed",
            paddingBottom: 48,
            borderRight: `1px solid ${colorBorder}`,
          }}
          trigger={null}
        >
          <MenuHeader collapsed={collapsed} />
          {menu.map(({ title, items }, index) => (
            <MenuWrapper key={index} title={title} collapsed={collapsed}>
              <Menu
                theme="light"
                mode="inline"
                items={items}
                defaultSelectedKeys={["alert"]}
                selectedKeys={[selectedKey]}
                onClick={handleClickMenu}
                style={{ border: "none" }}
              />
            </MenuWrapper>
          ))}
          <MenuFooter
            collapsed={collapsed}
            isFullWidth={isFullWidth}
            onCollapse={handleCollapse}
            onResize={handleResize}
          />
        </Layout.Sider>
        <Layout
          className="transition-all duration-300 ease-out"
          style={{ marginLeft: collapsed ? 80 : 256, overflow: "auto" }}
        >
          {children}
        </Layout>
      </ResizableWapper>
    </Layout>
  );
};
