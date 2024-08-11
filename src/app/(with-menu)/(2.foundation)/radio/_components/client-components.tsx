"use client";

import { Card, Radio, RadioOption, Section, Space, Text } from "@/components/atoms";
import { radioOptions } from "./data";

export const ClientComponents = () => {
  return (
    <Section>
      <Card title={"Variants"}>
        <Space direction="horizontal" gap={16}>
          <Radio value={1}>
            <Text type="sm-normal">Default</Text>
          </Radio>
          <Radio value={2} checked>
            <Text type="sm-normal">Checked</Text>
          </Radio>
          <Radio value={3} disabled>
            <Text type="sm-normal">Disabled</Text>
          </Radio>
        </Space>
      </Card>
      <Card title={"Radio Group"}>
        <Radio.Group
          className="whitespace-nowrap"
          options={radioOptions}
          defaultValue={radioOptions[0]}
        />
      </Card>
    </Section>
  );
};
