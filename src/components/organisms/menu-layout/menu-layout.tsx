"use client";

import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { MenuHeader } from "./components/menu-header";
import { menu } from "./data";
import { MenuFooter, MenuWrapper, ResizableWapper } from "./components";
import { useRouter } from "next/navigation";
const { Sider } = Layout;

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
        <Sider
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
                defaultSelectedKeys={["I100"]}
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
        </Sider>
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
