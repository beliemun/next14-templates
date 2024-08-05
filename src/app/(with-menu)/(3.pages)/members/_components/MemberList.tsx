"use client";

import { Animate, Button, Loading, Message, Table, Tag } from "@/components/atoms";
import { User } from "@prisma/client";
import { convertToDataType } from "./data";
import { useState } from "react";
import { PaginationProps } from "antd";
import { deleteMemberAction, getMembersAction } from "@/actions/members";
import { LoadingOutlined } from "@ant-design/icons";
import { TableProps } from "antd/lib";
import { DataType } from "./types";
import { useSignedInUserStore } from "@/stores/useSignedInUserStore";
import { useAlertStore } from "@/stores/useAlertStore";
import { signUserOut } from "@/lib/session";

interface MemberListProps {
  members: User[];
  count: number;
}

const DeleteButton = ({
  email,
  onDelete,
}: {
  email: string;
  onDelete: (email: string) => void;
}) => {
  const { signedInUser } = useSignedInUserStore();
  const { show, onDismiss } = useAlertStore();

  const handleShowAlert = () => {
    show({
      title: "사용자 삭제",
      message: "사용자를 정말 삭제하시겠습니까?",
      actions: [
        {
          lable: "Yes",
          color: "red",
          onClickAsync: async () => {
            await deleteMemberAction(email);
            if (signedInUser?.email === email) {
              signUserOut();
            }
            onDelete(email);
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
    <Button
      buttonSize="xs"
      buttonColor="red"
      buttonStyle="ghost"
      disabled={
        signedInUser?.role === "Admin" ? false : signedInUser?.email === email ? false : true
      }
      onClick={handleShowAlert}
    >
      Delete
    </Button>
  );
};

export const MemberList = ({ members, count }: MemberListProps) => {
  const [data, setData] = useState(members);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = Message.useMessage();

  const handleChange: PaginationProps["onChange"] = async (page) => {
    setLoading(true);
    const { members } = await getMembersAction(page);
    setData(members);
    setPage(page);
    setLoading(false);
  };

  const onDelete = (email: string) => {
    setData((prev) => prev.filter((member) => member.email !== email));
    messageApi.success("성공적으로 삭제되었습니다.");
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "이름",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "이메일",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "권한",
      dataIndex: "role",
      key: "role",
      render: (_, { role }: DataType) => (
        <Tag tagSize="sm" tagColor={role.color}>
          {role.type}
        </Tag>
      ),
    },
    {
      title: "생성일",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "삭제",
      dataIndex: "deletable",
      key: "deletable",
      render: (_, { email }: DataType) => {
        return <DeleteButton email={email} onDelete={onDelete} />;
      },
    },
  ];

  return (
    <Animate>
      {contextHolder}
      <Table
        loading={
          loading
            ? {
                indicator: <LoadingOutlined spin />,
                size: "large",
                style: {
                  maxHeight: "calc(100vh - 80px)",
                  height: "calc(100vh - 80px)",
                },
              }
            : undefined
        }
        className="w-full h-full"
        columns={columns}
        dataSource={convertToDataType(data)}
        pagination={{
          current: page,
          onChange: handleChange,
          position: ["bottomCenter"],
          total: count,
        }}
      />
    </Animate>
  );
};
