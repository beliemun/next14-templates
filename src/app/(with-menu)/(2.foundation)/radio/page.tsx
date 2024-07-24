"use client";

import { Card, Radio, Section, Space, Text } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Divider } from "antd";

export default function () {
  return (
    <PageLayout title="<Radio />">
      <Section className="flex flex-row flex-wrap gap-4 px-8">
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
          <Radio.Group className="space-x-4" defaultValue={2}>
            <Radio value={1}>
              <Text type="sm-normal">Option A</Text>
            </Radio>
            <Radio value={2}>
              <Text type="sm-normal">Option B</Text>
            </Radio>
            <Radio value={3}>
              <Text type="sm-normal">Option C</Text>
            </Radio>
            <Radio value={4}>
              <Text type="sm-normal">Option D</Text>
            </Radio>
          </Radio.Group>
        </Card>
      </Section>
    </PageLayout>
  );
}
