"use client";

import { Card, Section, Space, Switch } from "@/components/atoms";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export const ClientComponents = () => {
  return (
    <Section>
      <Card title={"Size"}>
        <Space direction="vertical" gap={16}>
          <Switch size="small" defaultChecked />
          <Switch size="default" />
        </Space>
      </Card>
      <Card title={"with Text, Icon"}>
        <Space direction="vertical" gap={16}>
          <Switch
            size="small"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
          <Switch size="default" defaultChecked checkedChildren={"On"} unCheckedChildren={"Off"} />
        </Space>
      </Card>
      <Card title={"Loading"}>
        <Space direction="vertical" gap={16}>
          <Switch
            size="small"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            loading
          />
          <Switch
            size="default"
            defaultChecked
            checkedChildren={"On"}
            unCheckedChildren={"Off"}
            loading
          />
        </Space>
      </Card>
    </Section>
  );
};
