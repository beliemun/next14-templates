"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface SessionProps {
  id?: number;
}

export const getSession = async () => {
  return await getIronSession<SessionProps>(cookies(), {
    cookieName: "burngrit",
    password: process.env.COOKIE_PASSWORD!,
  });
};

interface SignInProps extends SessionProps {
  url: string;
}

export const signUserIn = async ({ id, url }: SignInProps) => {
  const session = await getSession();
  session.id = id;
  await session.save();
  return redirect(url);
};

export const signUserOut = async () => {
  const session = await getSession();
  session.destroy();
  return redirect("/");
};
