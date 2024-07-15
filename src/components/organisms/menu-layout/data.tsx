import React from "react";
import {
  FileOutlined,
  FontSizeOutlined,
  FormatPainterOutlined,
  HistoryOutlined,
  LaptopOutlined,
  SlidersOutlined,
  SmileOutlined,
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
  getItem("Typography", "typography", <FontSizeOutlined />),
  getItem("Components", "components", <SlidersOutlined />, [
    getItem("Button", "button"),
    getItem("Input", "input"),
    getItem("Tag", "tag"),
    getItem("Tooltip", "tooltip"),
  ]),
];

export const pageTemplates: MenuItem[] = [
  getItem("Dashboard", "T100", <FileOutlined />, [
    getItem("Main", "T101"),
    getItem("Analytics", "T102"),
    getItem("Fintech", "T103"),
  ]),
  getItem("E-Commerce", "T200", <FileOutlined />, [
    getItem("Customers", "T201"),
    getItem("Orders", "T202"),
    getItem("Invoices", "T203"),
    getItem("Shop", "T204"),
    getItem("Single Product", "T205"),
    getItem("Cart", "T206"),
    getItem("Pay", "T207"),
  ]),
  getItem("Community", "T300", <FileOutlined />, [
    getItem("User - Tabs", "T301"),
    getItem("User - Tiles", "T302"),
    getItem("Profile", "T303"),
    getItem("Feed", "T304"),
    getItem("Forum", "T305"),
    getItem("Forum - Post", "T306"),
    getItem("Meetups", "T307"),
    getItem("Meetups - Post", "T308"),
  ]),
  getItem("Finance", "T400", <FileOutlined />, [
    getItem("Cards", "T401"),
    getItem("Transactions", "T402"),
    getItem("Transaction Details", "T403"),
  ]),
  getItem("Job Board", "T500", <FileOutlined />, [
    getItem("Listing", "T501"),
    getItem("Jog Post", "T502"),
    getItem("Company Profile", "T503"),
  ]),
  getItem("Task", "T600", <FileOutlined />, [getItem("Kanban", "T601"), getItem("List", "T602")]),
  getItem("Message", "T700", <FileOutlined />),
  getItem("Inbox", "T800", <FileOutlined />),
  getItem("Calendar", "T900", <FileOutlined />),
  getItem("Settings", "T1000", <FileOutlined />, [
    getItem("My Account", "T1001"),
    getItem("My Notifications", "T1002"),
    getItem("Connected Apps", "T1003"),
    getItem("Plans", "T1004"),
    getItem("Billing & Invoices", "T1005"),
    getItem("Give Feedback", "T1006"),
  ]),
  getItem("Utility", "T1100", <FileOutlined />, [
    getItem("Changelog", "T1101"),
    getItem("Roadmap", "T1102"),
    getItem("FAQs", "T1103"),
    getItem("Empty State", "T1104"),
    getItem("404", "T1105"),
  ]),
];

export const menu = [
  {
    title: undefined,
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
