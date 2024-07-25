"use client";

import { Radio, Space, Table } from "@/components/atoms";
import { TableProps, Text } from "@/components/atoms";
import { DataType, MemberRoleType } from "./types";
import { ColorType } from "@/styles";
import { useState } from "react";
import { RadioChangeEvent } from "antd";

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render 함수는 client 전용 함수이다.
    render: (text) => <Text type="sm-semibold">{text}</Text>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  { title: "Gender", dataIndex: "gender", key: "gender" },
  { title: "Address", dataIndex: "address", key: "address" },
];

const data: DataType[] = [...Array(100)].map((_, index) => ({
  key: index + 1,
  name: `Brian`,
  gender: index % 2 ? "man" : "woman",
  age: Math.ceil(20 + index / 10),
  address: `${100 + index}, Guro-gu, Seoul, South Korea`,
  role: {
    type: ["owner", "manager", "guest"][index % 3] as MemberRoleType,
    color: ["red", "blue", "primary"][index % 3] as ColorType,
  },
  editable: index % 3 !== 0,
  deleteable: index % 3 === 2,
}));

export const RowSelectionTableComponent = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">("checkbox");

  const handleChangeSelectionType = (e: RadioChangeEvent) => setSelectionType(e.target.value);

  return (
    <>
      <Radio.Group value={selectionType} onChange={handleChangeSelectionType}>
        <Space className="pb-4" gap={16}>
          <Radio value={"checkbox"}>Checkbox</Radio>
          <Radio value={"radio"}>Radio</Radio>
        </Space>
      </Radio.Group>
      <Table
        rowSelection={{
          type: selectionType,
          defaultSelectedRowKeys: [2, 3],
          onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
          },
          getCheckboxProps: (record: DataType) => ({
            disabled: record.age === 20, // 선택 금지할 항목 조건 정의
            name: record.name,
          }),
        }}
        dataSource={data}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
      />
    </>
  );
};
