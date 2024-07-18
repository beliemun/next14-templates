"use client";

import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Transfer, TransferProps } from "antd";
import { useState } from "react";

interface RecordType {
  key: number;
  title: string;
  description: string;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i,
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData.filter(({ key }) => key > 10).map((item) => item.key);

export default function () {
  const [targetKeys, setTargetKeys] = useState<TransferProps["targetKeys"]>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<TransferProps["targetKeys"]>([]);

  const onChange: TransferProps["onChange"] = (nextTargetKeys, direction, moveKeys) => {
    console.log("targetKeys:", nextTargetKeys);
    console.log("direction:", direction);
    console.log("moveKeys:", moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange: TransferProps["onSelectChange"] = (
    sourceSelectedKeys,
    targetSelectedKeys
  ) => {
    console.log("sourceSelectedKeys:", sourceSelectedKeys);
    console.log("targetSelectedKeys:", targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll: TransferProps["onScroll"] = (direction, e) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  return (
    <PageLayout title="<Trasfer />">
      <Divider orientation="left">Base</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2">
        <Transfer
          dataSource={mockData}
          titles={["Source", "Target"]}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={onChange}
          onSelectChange={onSelectChange}
          onScroll={onScroll}
          render={(item) => item.title}
          listStyle={{
            width: 320,
            height: 240,
          }}
        />
      </Section>
    </PageLayout>
  );
}
