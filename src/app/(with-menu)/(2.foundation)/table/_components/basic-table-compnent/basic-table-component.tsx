"use client";

import { Message, Table } from "@/components/atoms";
import { Button, TableProps, Tag, Text } from "@/components/atoms";
import { DataType, MemberRoleType } from "./types";
import { ColorType } from "@/styles";
import { capitalizeFirstLetter } from "@/shared/utils";
import { useAlertStore } from "@/stores/useAlertStore";

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
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  { title: "Gender", dataIndex: "gender", key: "gender" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Edit",
    dataIndex: "editable",
    key: "ediatable",
    render: (_, { editable }: DataType) => {
      return editable ? <TableEditButton /> : null;
    },
  },
  {
    title: "Delete",
    dataIndex: "editable",
    key: "ediatable",
    render: (_, { deleteable }: DataType) => {
      return deleteable ? <TableDeleteButton /> : null;
    },
  },
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

const TableEditButton = () => {
  const { show } = useAlertStore();
  const handleShowAlert = () => {
    show({
      title: "Edit",
      message:
        "Fugiat dolor magna eu mollit officia voluptate fugiat sint laboris pariatur esse aliqua. ",
    });
  };
  return (
    <Button buttonSize="xs" buttonStyle="soft" onClick={handleShowAlert}>
      Edit
    </Button>
  );
};

const TableDeleteButton = () => {
  const { show, onDismiss } = useAlertStore();
  const [messageApi, contextHolder] = Message.useMessage();
  const handleShowAlert = () => {
    show({
      title: "Delete",
      message:
        "Fugiat dolor magna eu mollit officia voluptate fugiat sint laboris pariatur esse aliqua? ",
      actions: [
        {
          lable: "Yes",
          color: "red",
          onClick: () => {
            messageApi.success("Deleted Successfully.");
            onDismiss();
          },
        },
        {
          lable: "No",
          color: "red",
          style: "outline",
        },
      ],
    });
  };
  return (
    <Button buttonSize="xs" buttonColor="red" buttonStyle="ghost" onClick={handleShowAlert}>
      {contextHolder}
      Delete
    </Button>
  );
};

export const BasicTableComponent = () => {
  return <Table dataSource={data} columns={columns} pagination={{ position: ["bottomCenter"] }} />;
};
