"use server";

import { PAGINATION_ITEM_SIZE } from "@/lib/constants";
import client from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export type GetMembersType = Prisma.PromiseReturnType<typeof getMembersAction>;

const getMembersAction = async (page: number) => {
  const members = await client.user.findMany({
    take: PAGINATION_ITEM_SIZE,
    skip: PAGINATION_ITEM_SIZE * (page - 1),
  });
  const count = await client.user.count();
  return {
    members,
    count,
  };
};

export default getMembersAction;
