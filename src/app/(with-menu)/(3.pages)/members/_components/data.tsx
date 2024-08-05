"use client";

import { DataType } from "./types";
import { User } from "@prisma/client";
import dayjs from "dayjs";

export const convertToDataType = (members: User[]): DataType[] =>
  members.map((member, index) => ({
    key: index,
    username: member.username,
    email: String(member.email),
    createdAt: dayjs(new Date()).format("YYYY-MM-DD"),
    role: {
      type: member.role === "Admin" ? "관리자" : "사용자",
      color: member.role === "User" ? "primary" : "red",
    },
    deletable: Boolean(member.role === "User"),
  }));
