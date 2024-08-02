"use server";

import {
  MAX_LENGTH_USERNAME,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_USERNAME,
  MSG,
} from "@/lib/constants";
import client from "@/lib/prisma";
import {
  mustNotExistEmail,
  mustNotExistUserName,
  validatePassword,
  validateUserName,
} from "@/validations/users";
import { z } from "zod";
import bcrypt from "bcrypt";
import { signUserIn } from "@/lib/session";
import { redirect } from "next/navigation";

// superRefine은 커스텀 검증만 생략하며, 개별 검증은 적용되지 않는다. (개별 검증의 실행이 superRefine보다 먼저 실행된다.)
const formScheme = z
  .object({
    username: z
      .string({ message: MSG.REQUIRED })
      .min(MIN_LENGTH_USERNAME, MSG.MIN_LENGTH_USERNAME)
      .max(MAX_LENGTH_USERNAME, MSG.MAX_LENGTH_USERNAME)
      .toLowerCase()
      .trim()
      .superRefine(validateUserName),
    email: z.string({ message: MSG.REQUIRED }).toLowerCase().email(MSG.INVALIED_TPYE_EMAIL),
    password: z.string({ message: MSG.REQUIRED }).min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
    confirm_password: z
      .string({ message: MSG.REQUIRED })
      .min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
  })
  .superRefine(validatePassword)
  .superRefine(mustNotExistUserName)
  .superRefine(mustNotExistEmail);

export const singUpAction = async (prevAction: any, formData: FormData) => {
  const origin = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const { error, data } = await formScheme.safeParseAsync(origin);
  if (error) {
    return error.flatten();
  } else {
    const hassPassword = await bcrypt.hash(data.password, 12);
    const user = await client.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hassPassword,
      },
      select: {
        id: true,
      },
    });
    redirect("/sign-in?greeting=true");
  }
};
