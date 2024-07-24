import React from "react";
import {
  FontSizeOutlined,
  FormatPainterOutlined,
  HistoryOutlined,
  LaptopOutlined,
  LoginOutlined,
  MessageOutlined,
  SlidersOutlined,
  SmileOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const introduction: MenuItem[] = [
  getItem("Introduction", "introduction", <SmileOutlined />),
  getItem("History", "history", <HistoryOutlined />),
  getItem("Skills", "skills", <LaptopOutlined />),
];

export const base: MenuItem[] = [
  getItem("Color", "color", <FormatPainterOutlined />),
  getItem("Typography", "typography", <FontSizeOutlined />, [
    getItem("Title", "title"),
    getItem("Text", "text"),
  ]),
  getItem("Components", "components", <SlidersOutlined />, [
    getItem("Alert", "alert"),
    getItem("Avatar", "avatar"),
    getItem("Button", "button"),
    getItem("Checkbox", "checkbox"),
    getItem("Drawer", "drawer"),
    getItem("Form", "form"),
    getItem("Image", "image"),
    getItem("Input", "input"),
    getItem("Message", "message"),
    getItem("Modal", "modal"),
    getItem("QRCode", "qrcode"),
    getItem("Radio", "radio"),
    getItem("Select", "select"),
    getItem("Skeleton", "skeleton"),
    getItem("Switch", "switch"),
    getItem("Tag", "tag"),
    getItem("Picker - Color", "color-picker"),
    getItem("Picker - Time", "time-picker"),
    getItem("Picker - Date", "date-picker"),
    getItem("Tooltip", "tooltip"),
    getItem("Transfer", "transfer"),
    getItem("Upload", "upload"),
  ]),
];

export const pages: MenuItem[] = [
  getItem("Sign In", "sign-in", <LoginOutlined />),
  getItem("Sign Up", "sign-up", <UserAddOutlined />),
  getItem("Members", "members", <TeamOutlined />),
  getItem("Messages", "messages", <MessageOutlined />),
];

export const menu = [
  {
    title: "About me",
    items: introduction,
  },
  {
    title: "Foundation",
    items: base,
  },
  {
    title: "Pages",
    items: pages,
  },
];
