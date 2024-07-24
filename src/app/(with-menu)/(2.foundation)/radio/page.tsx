"use client";

import { Radio, Section, Text } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function () {
  return (
    <PageLayout title="<Radio />">
      <Section className="flex flex-row flex-wrap gap-4 px-8">
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
          <Radio value={4} disabled>
            <Text type="sm-normal">Option D</Text>
          </Radio>
        </Radio.Group>
      </Section>
    </PageLayout>
  );
}
