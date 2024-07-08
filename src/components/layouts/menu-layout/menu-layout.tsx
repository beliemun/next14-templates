"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuLayoutAvatar } from "./components/avatar";
import { introduction, base, pageTemplates } from "./data";
import { MenuWrapper } from "./components";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const menu = [
  {
    title: "Introduction",
    items: introduction,
  },
  {
    title: "Base",
    items: base,
  },
  {
    title: "Templates",
    items: pageTemplates,
  },
];

export const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState("I100");
  const [collapsed, setCollapsed] = useState(false);
  const handleClickMenu = ({ key }: { key: string }) => {
    setSelectedKey(key);
    router.push(`/${key}`);
  };

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
