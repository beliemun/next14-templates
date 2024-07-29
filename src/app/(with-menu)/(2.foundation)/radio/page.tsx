"use client";

import { Card, Radio, RadioOption, Section, Space, Text } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

const radioOptions: RadioOption[] = [
  {
    label: "Option1",
    value: "Option1",
  },
  {
    label: "Option2",
    value: "Option2",
  },
  {
    label: "Option3",
    value: "Option3",
  },
];

export default function RadioPage() {
  return (
    <PageLayout title="<Radio />">
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
            className="space-x-4"
            options={radioOptions}
            defaultValue={radioOptions[0]}
          />
        </Card>
      </Section>
    </PageLayout>
  );
}
