import client from "@/lib/prisma";
import { compare } from "bcrypt";

const fobiddenNames = ["admin"];
export const validateUserName = (username: string) => !fobiddenNames.includes(username);

export const validatePassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

export const mustNotExistUserName = async ({ username }: { username: string }) => {
  const user = await client.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

export const mustNotExistEmail = async ({ email }: { email: string }) => {
  const user = await client.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

export const mustExistEmail = async ({ email }: { email: string }) => {
  const user = await client.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
};

export const comparePassword = async ({ email, password }: { email: string; password: string }) => {
  const user = await client.user.findUnique({
    where: {
      email,
    },
    select: {
      password: true,
    },
  });
  return compare(password, user?.password ?? "");
};
