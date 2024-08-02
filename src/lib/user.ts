"use server";

import { notFound } from "next/navigation";
import { getSession } from "./session";
import client from "./prisma";

const getUser = async () => {
  const session = await getSession();
  if (session.id) {
    const user = await client.user.findUnique({
      where: { id: session.id },
    });
    if (user) {
      return user;
    }
  }
  notFound();
};

export default getUser;
