"use client";

import { Divider, Section, Tag } from "@/components/atoms";
import { useState } from "react";
import { TableColumnsType, TransferProps } from "antd";
import { ColorType } from "@/lib/colors";
import { capitalizeFirstLetter } from "@/shared/utils";
import { BasicTransfer } from "./base-transfer";
import { DataType, mockData, TableTransfer, TableTransferProps } from "./table-transfer";

export const ClientComponents = () => {
  const [targetKeys, setTargetKeys] = useState<TransferProps["targetKeys"]>([]);
  const [disabled, setDisabled] = useState(false);

  const onChange: TableTransferProps["onChange"] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
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
    <>
      <Divider orientation="left">Basic Transfer</Divider>
      <Section className="pt-2">
        <BasicTransfer className="w-full" />
      </Section>
      <Divider orientation="left">Table Transfer</Divider>
      <Section className="pt-2">
        <TableTransfer
          className="w-full"
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
    </>
  );
};
