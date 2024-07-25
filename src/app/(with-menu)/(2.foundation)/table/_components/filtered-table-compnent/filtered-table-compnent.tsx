"use client";

import { Table, Tag } from "@/components/atoms";
import { TableProps, Text } from "@/components/atoms";
import { DataType, MemberGenderType, MemberRoleType } from "./types";
import { ColorType } from "@/styles";
import { capitalizeFirstLetter } from "@/shared/utils";
import { useState } from "react";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const data: DataType[] = [...Array(100)].map((_, index) => ({
  key: index + 1,
  gender: index % 2 ? "man" : "woman",
  age: Math.ceil(20 + index),
  address: `${100 + index}, Guro-gu, Seoul, South Korea`,
  role: {
    type: ["owner", "manager", "guest"][index % 3] as MemberRoleType,
    color: ["red", "blue", "primary"][index % 3] as ColorType,
  },
}));

export const FilterTableComponent = () => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({ role: ["guest"], gender: ["man"] });
  const [sortedInfo, setSortedInfo] = useState<Sorts>({
    columnKey: "age",
    field: "age",
    order: "descend",
  });

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (_, { role }: DataType) => {
        return (
          <Tag tagSize="sm" tagColor={role.color}>
            {capitalizeFirstLetter(role.type)}
          </Tag>
        );
      },
      filters: [
        {
          text: "Owner",
          value: "owner",
        },
        {
          text: "Manager",
          value: "manager",
        },
        {
          text: "Guest",
          value: "guest",
        },
      ],
      defaultFilteredValue: filteredInfo.role || null,
      onFilter: (value, record: DataType) => [record.role.type].includes(value as MemberRoleType),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      defaultSortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        {
          text: "man",
          value: "man",
        },
        {
          text: "woman",
          value: "woman",
        },
      ],
      defaultFilteredValue: filteredInfo.gender || null,
      onFilter: (value, record: DataType) => [record.gender].includes(value as MemberGenderType),
      sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ position: ["bottomCenter"] }}
      onChange={handleChange}
    />
  );
};
