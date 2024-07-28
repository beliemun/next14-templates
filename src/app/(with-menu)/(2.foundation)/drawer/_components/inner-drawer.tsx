"use client";

import { Button, Drawer, Space, Text } from "@/components/atoms";
import { theme } from "antd";
import { useState } from "react";

export const InnerDrawer = () => {
  const {
    token: { colorFillAlter, colorBorderSecondary, borderRadiusLG },
  } = theme.useToken();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        position: "relative",
        maxWidth: 1080,
        height: 480,
        padding: 16,
        overflow: "hidden",
        background: colorFillAlter,
        border: `1px solid ${colorBorderSecondary}`,
        borderRadius: borderRadiusLG,
      }}
    >
      <Button className="w-32" onClick={handleOpen}>
        Open Drawer
      </Button>
      <Drawer
        title={"Inner Drawer"}
        placement="right"
        onClose={handleClose}
        open={open}
        closable={false}
        getContainer={false}
      >
        <Space direction="vertical" gap={16}>
          <Text>Content 1</Text>
          <Text>Content 2</Text>
          <Text>Content 3</Text>
        </Space>
      </Drawer>
    </div>
  );
};
