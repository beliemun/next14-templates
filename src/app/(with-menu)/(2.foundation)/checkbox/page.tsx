"use client";

import { Card, Checkbox, CheckboxProps, Divider, Section, Space, Text } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { useState } from "react";

const options = ["Option A", "Option B", "Option C"];

export default function () {
  const [checkedList, setCheckedList] = useState<string[]>(["Option A", "Option B"]);
  const checkAll = checkedList.length === options.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < options.length;
  const onChange = (e: string[]) => setCheckedList(e);
  const onChangeAll: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? options : []);
  };

  return (
    <PageLayout title="<Checkbox />">
      <Section className="flex flex-row flex-wrap gap-4">
        <Card title={"Variants"}>
          <Space direction="vertical" gap={16}>
            <Space direction="horizontal">
              <Checkbox />
              <Text type="sm-normal">Base</Text>
            </Space>
            <Space direction="horizontal">
              <Checkbox checked />
              <Text type="sm-normal">Defautl Checked</Text>
            </Space>
            <Space direction="horizontal">
              <Checkbox checked disabled />
              <Text type="sm-normal">Disabled</Text>
            </Space>
          </Space>
        </Card>
        <Card
          title={"Group"}
          actions={[
            <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={onChangeAll}>
              <Text type="base-semibold">{checkAll ? "Uncheck all" : "Check all"}</Text>
            </Checkbox>,
          ]}
        >
          <Space direction="horizontal" size={16} className="py-2">
            <Checkbox.Group options={options} value={checkedList} onChange={onChange} />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
}
