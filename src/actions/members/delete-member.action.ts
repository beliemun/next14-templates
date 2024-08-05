"use server";

import client from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export type DeleteMemberType = Prisma.PromiseReturnType<typeof deleteMemberAction>;

const deleteMemberAction = async (email: string) => {
  await client.user.delete({
    where: { email },
  });
  return;
};

export default deleteMemberAction;
