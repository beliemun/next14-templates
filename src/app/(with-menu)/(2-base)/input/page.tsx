// "use client";

import { Card, Divider, Input, Section, Select, Space } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { SettingOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";

const selectBefore = (
  <Select
    defaultValue="http://"
    options={[
      { value: "http://", label: "http://" },
      { value: "https://", label: "https://" },
    ]}
  />
);
const selectAfter = (
  <Select
    defaultValue=".com"
    options={[
      { value: ".com", label: ".com" },
      { value: ".net", label: ".net" },
      { value: ".org", label: ".org" },
      { value: ".kr", label: ".kr" },
    ]}
  />
);

export default function () {
  return (
    <PageLayout title="<Input />">
      <Divider orientation="left">Input</Divider>
      <Section className="flex flex-row flex-wrap gap-4">
        <Card title={"Size"}>
          <Space direction="vertical" size={16}>
            <Input placeholder="small" size="small" />
            <Input placeholder="middle" size="middle" />
            <Input placeholder="large" size="large" />
            <Input placeholder="middle disabled" size="middle" disabled />
          </Space>
        </Card>
        <Card title={"Variant"}>
          <Space direction="vertical" size={16}>
            <Input placeholder="outlined" variant="outlined" />
            <Input placeholder="filled" variant="filled" />
            <Input placeholder="borderless" variant="borderless" />
            <Input placeholder="borderless disabled" variant="borderless" disabled />
          </Space>
        </Card>
        <Card title={"Addon"}>
          <Space direction="vertical" size={16}>
            <Input placeholder="google" addonBefore="https://" suffix=".com" />
            <Input placeholder="google" addonBefore="https://" addonAfter=".com" />
            <Input placeholder="google" addonBefore={selectBefore} addonAfter={selectAfter} />
            <Input placeholder="https://google.com" addonAfter={<SettingOutlined />} />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
}
