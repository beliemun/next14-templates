import { MSG } from "@/lib/constants";
import client from "@/lib/prisma";
import { compare } from "bcrypt";
import { z } from "zod";

const fobiddenNames = ["admin"];
export const validateUserName = async (username: string, ctx: z.RefinementCtx) => {
  if (fobiddenNames.includes(username)) {
    ctx.addIssue({
      code: "custom",
      message: MSG.CAN_NOT_USE_USERNAME,
      path: ["username"],
      fatal: true,
    });
    return z.NEVER;
  }
};

export const validatePassword = (
  {
    password,
    confirm_password,
  }: {
    password: string;
    confirm_password: string;
  },
  ctx: z.RefinementCtx
) => {
  if (password !== confirm_password) {
    ctx.addIssue({
      code: "custom",
      message: MSG.NOT_MATCHED_PASSWORD,
      path: ["confirm_password"],
      fatal: true,
    });
    return z.NEVER;
  }
};

export const mustNotExistUserName = async (
  { username }: { username: string },
  ctx: z.RefinementCtx
) => {
  const user = await client.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  });
  if (user) {
    ctx.addIssue({
      code: "custom",
      message: MSG.EXIST_USERNAME,
      path: ["username"],
      fatal: true,
    });
    return z.NEVER;
  }
};

export const mustNotExistEmail = async ({ email }: { email: string }, ctx: z.RefinementCtx) => {
  const user = await client.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  if (user) {
    ctx.addIssue({
      code: "custom",
      message: MSG.USED_EMAIL,
      path: ["email"],
      fatal: true,
    });
    return z.NEVER;
  }
};

export const mustExistEmail = async ({ email }: { email: string }, ctx: z.RefinementCtx) => {
  const user = await client.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  if (!user) {
    ctx.addIssue({
      code: "custom",
      message: MSG.NOT_EXISTED_EMAIL,
      path: ["email"],
      fatal: true,
    });
    return z.NEVER;
  }
};

export const comparePassword = async (
  { email, password }: { email: string; password: string },
  ctx: z.RefinementCtx
) => {
  const user = await client.user.findUnique({
    where: {
      email,
    },
    select: {
      password: true,
    },
  });

  if (!(await compare(password, user?.password ?? ""))) {
    ctx.addIssue({
      code: "custom",
      message: MSG.WRONG_PASSWORD,
      path: ["password"],
      fatal: true,
    });
    return z.NEVER;
  }
};
