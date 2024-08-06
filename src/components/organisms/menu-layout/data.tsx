import React from "react";
import {
  BugOutlined,
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
];

export const base: MenuItem[] = [
  getItem("Color Pallete", "color", <FormatPainterOutlined />),
  getItem("Typography", "typography", <FontSizeOutlined />, [
    getItem("Text", "text"),
    getItem("Title", "title"),
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
    getItem("Pagination", "pagination"),
    getItem("QRCode", "qrcode"),
    getItem("Radio", "radio"),
    getItem("Select", "select"),
    getItem("Switch", "switch"),
    getItem("Table", "table"),
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
