"use server";

import {
  MAX_LENGTH_USERNAME,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_USERNAME,
  MSG,
} from "@/lib/constants";
import { validatePassword, validateUserName } from "@/lib/validations";
import { z } from "zod";

const formScheme = z
  .object({
    username: z
      .string({ message: MSG.REQUIRED })
      .min(MIN_LENGTH_USERNAME, MSG.MIN_LENGTH_USERNAME)
      .max(MAX_LENGTH_USERNAME, MSG.MAX_LENGTH_USERNAME)
      .toLowerCase()
      .trim()
      .refine(validateUserName, MSG.CAN_NOT_USE_USERNAME),
    email: z.string({ message: MSG.REQUIRED }).toLowerCase().email(MSG.INVALIED_TPYE_EMAIL),
    password: z.string({ message: MSG.REQUIRED }).min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
    confirm_password: z
      .string({ message: MSG.REQUIRED })
      .min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
  })
  .refine(validatePassword, {
    message: MSG.NOT_MATCH_PASSWORD,
    path: ["confirm_password"],
  });

export const singUpAction = async (prevAction: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formScheme.safeParse(data);
  if (result.error) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    return;
  }
};
