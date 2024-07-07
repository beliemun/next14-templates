"use client";

import React, { useState } from "react";
import { Divider, Layout, Menu } from "antd";
import { MenuLayoutAvatar } from "./components/avatar";
import { introductions, baseComponents, pageTemplates } from "./data";
import { MenuWrapper } from "./components";

const { Sider } = Layout;

const menu = [
  {
    title: "Introduction",
    items: introductions,
  },
  {
    title: "Base Components",
    items: baseComponents,
  },
  {
    title: "Page Templates",
    items: pageTemplates,
  },
];

export const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  const [selectedKey, setSelectedKey] = useState("I100");
  const [collapsed, setCollapsed] = useState(false);
  const handleClickMenu = ({ key }: { key: string }) => setSelectedKey(key);

  return (
    <Layout>
      <Sider
        className="hide-scrollbar"
        theme={"light"}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={256}
        style={{
          overflow: "auto",
          height: "calc(100vh - 48px)",
          position: "fixed",
          paddingBottom: 48,
        }}
      >
        <MenuLayoutAvatar collapsed={collapsed} />
        {menu.map(({ title, items }, index) => (
          <div key={index}>
            <MenuWrapper title={collapsed ? undefined : title}>
              <Menu
                theme="light"
                mode="inline"
                items={items}
                defaultSelectedKeys={["I100"]}
                selectedKeys={[selectedKey]}
                onClick={handleClickMenu}
              />
            </MenuWrapper>
          </div>
        ))}
      </Sider>
      <Layout style={{ marginLeft: 256, overflow: "auto" }}>{children}</Layout>
    </Layout>
  );
};
