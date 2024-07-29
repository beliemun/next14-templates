"use client";

import { Divider, Section, Select, SelectProps, Space, Tag } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { colorList } from "@/styles";
import { DownOutlined } from "@ant-design/icons";
import { DefaultOptionType } from "antd/es/select";
import { useState } from "react";

const options1: DefaultOptionType[] = [
  {
    value: "brain",
    label: "Brian",
  },
  {
    value: "ben",
    label: "Ben",
  },
  {
    value: "wendy",
    label: "Wedny",
  },
  {
    value: "toby",
    label: "Toby",
  },
];

const options2: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options2.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const options3: SelectProps["options"] = colorList.map((color) => ({ value: color }));

export default function SelectPage() {
  const [value, setValue] = useState<string[]>(["b11"]);
  const suffixIcon = (
    <>
      <span>{value.length} / 3</span>
      <DownOutlined />
    </>
  );

  const [selectedTags, setSelectedTags] = useState(["red", "lime", "cyan", "rose"]);

  const handleClose = (removedTag: string) => {
    const tags = selectedTags.filter((tag) => tag !== removedTag);
    setSelectedTags(tags);
  };

  const tagRender: SelectProps["tagRender"] = ({ label, value, closable, onClose }) => {
    return (
      <Tag
        tagColor={value}
        closable={closable}
        onClose={() => {
          onClose();
          handleClose(value);
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <PageLayout title="<Select />">
      <Divider orientation="left">Size</Divider>
      <Section className="pt-2">
        <Space direction="horizontal" gap={16}>
          <Select style={{ width: 120 }} options={options1} defaultValue={"brain"} size="small" />
          <Select style={{ width: 120 }} options={options1} defaultValue={"brain"} size="middle" />
          <Select style={{ width: 120 }} options={options1} defaultValue={"brain"} size="large" />
        </Space>
      </Section>
      <Divider orientation="left">Variants</Divider>
      <Section className="pt-2 ">
        <Space direction="horizontal" gap={16}>
          <Select style={{ width: 120 }} options={options1} defaultValue={"brain"} loading />
          <Select style={{ width: 120 }} options={options1} defaultValue={"brain"} disabled />
          <Select
            style={{ width: 120 }}
            options={options1}
            defaultValue={"brain"}
            status="warning"
          />
          <Select style={{ width: 120 }} options={options1} defaultValue={"brain"} status="error" />
        </Space>
      </Section>
      <Divider orientation="left">Multiple Mode</Divider>
      <Section className="pt-2">
        <Select
          className="max-w-xl w-full"
          options={options2}
          mode="multiple"
          allowClear
          defaultValue={["a10", "b11", "c12"]}
        />
      </Section>
      <Divider orientation="left">Tags Mode</Divider>
      <Section className="pt-2">
        <Select
          className="max-w-xl w-full"
          options={options2}
          mode="tags"
          allowClear
          defaultValue={["d11", "new"]}
        />
      </Section>
      <Divider orientation="left">Max Count</Divider>
      <Section className="pt-2">
        <Select
          className="max-w-xl w-full"
          options={options2}
          mode="multiple"
          maxCount={3}
          suffixIcon={suffixIcon}
          onChange={setValue}
          defaultValue={["b11"]}
        />
      </Section>
      <Divider orientation="left">With Tags</Divider>
      <Section className="pt-2">
        <Select
          className="max-w-xl w-full"
          options={options3}
          mode="multiple"
          tagRender={tagRender}
          value={selectedTags}
          onChange={setSelectedTags}
        />
      </Section>
    </PageLayout>
  );
}
