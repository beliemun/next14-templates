"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { theme } from "antd";
import { Layout, Menu, Message } from "@/components/atoms";
import { MenuHeader } from "./menu-header";
import { MenuWrapper } from "./menu-wrapper";
import { MenuFooter } from "./menu-footer";
import { menu } from "../data";
import { useLayoutStore } from "@/stores/useLayoutStore";
import { User } from "@prisma/client";
import { useUserStore } from "@/stores/useUserStore";

export const Sider = ({ user }: { user: User | null }) => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const [messageApi, contextHolder] = Message.useMessage();
  const [selectedKey, setSelectedKey] = useState("introduction");
  const { isCollapsed, isFullWidth, setIsCollapsed, setIsFullWidth } = useLayoutStore();
  const {
    token: { colorBorder },
  } = theme.useToken();

  const handleClickMenu = ({ key }: { key: string }) => {
    setSelectedKey(key);
    router.push(`/${key}`);
  };
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const handleResize = () => setIsFullWidth(!isFullWidth);

  useEffect(() => {
    setUser(user);
    if (user) {
      messageApi.success("로그인 되었습니다");
    }
  }, [user]);

  return (
    <Layout.Sider
      className="hide-scrollbar"
      theme={"light"}
      collapsible
      collapsed={isCollapsed}
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
      {contextHolder}
      <MenuHeader />
      {menu.map(({ title, items }, index) => (
        <MenuWrapper key={index} title={title} collapsed={isCollapsed}>
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
        collapsed={isCollapsed}
        isFullWidth={isFullWidth}
        onCollapse={handleCollapse}
        onResize={handleResize}
      />
    </Layout.Sider>
  );
};
