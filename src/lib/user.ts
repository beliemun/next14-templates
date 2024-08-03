"use server";

import client from "./prisma";
import { SessionProps } from "./session";
import { IronSession } from "iron-session";

const getUser = async (session: IronSession<SessionProps>) => {
  if (session.id) {
    const user = await client.user.findUnique({
      where: { id: session.id },
    });
    if (user) {
      return user;
    }
  }
  return null;
};

export default getUser;
