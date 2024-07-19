"use client";

import { Divider, Section, Tag } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { BaseTransfer, DataType, mockData, TableTransfer, TableTransferProps } from "./_components";
import { useState } from "react";
import { TableColumnsType, TransferProps } from "antd";
import { ColorType } from "@/styles";
import { capitalizeFirstLetter } from "@/shared/utils";

export default function () {
  const [targetKeys, setTargetKeys] = useState<TransferProps["targetKeys"]>([]);
  const [disabled, setDisabled] = useState(false);

  const onChange: TableTransferProps["onChange"] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const toggleDisabled = (checked: boolean) => {
    setDisabled(checked);
  };

  const columns: TableColumnsType<DataType> = [
    {
      dataIndex: "title",
      title: "Name",
    },
    {
      dataIndex: "tag",
      title: "Tag",
      render: (tag: string) => (
        <Tag style={{ marginInlineEnd: 0 }} tagColor={tag as ColorType}>
          {capitalizeFirstLetter(tag)}
        </Tag>
      ),
    },
    {
      dataIndex: "description",
      title: "Description",
    },
  ];

  const filterOption = (input: string, item: DataType) =>
    item.title?.includes(input) || item.tag?.includes(input);

  return (
    <PageLayout title="<Trasfer />">
      <Divider orientation="left">Base Transfer</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2">
        <BaseTransfer />
      </Section>
      <Divider orientation="left">Table Transfer</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2">
        <TableTransfer
          dataSource={mockData}
          targetKeys={targetKeys}
          disabled={disabled}
          showSearch
          showSelectAll={false}
          onChange={onChange}
          filterOption={filterOption}
          leftColumns={columns}
          rightColumns={columns}
        />
      </Section>
    </PageLayout>
  );
}
