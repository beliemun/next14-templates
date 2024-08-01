"use server";

import {
  MAX_LENGTH_USERNAME,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_USERNAME,
  MSG,
} from "@/lib/constants";
import { z } from "zod";

const fobiddenNames = ["admin", "Brian"];
const validateUserName = (username: string) => !fobiddenNames.includes(username);
const validatePassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => {
  console.log(password, confirm_password);
  return password === confirm_password;
};

const formScheme = z
  .object({
    username: z
      .string()
      .min(MIN_LENGTH_USERNAME, MSG.MIN_LENGTH_USERNAME)
      .max(MAX_LENGTH_USERNAME, MSG.MAX_LENGTH_USERNAME)
      .toLowerCase()
      .trim()
      .refine(validateUserName, MSG.CAN_NOT_USE_USERNAME),
    email: z.string().toLowerCase().email(MSG.INVALIED_TPYE_EMAIL),
    password: z.string().min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
    confirm_password: z.string().min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
  })
  .refine(validatePassword, {
    message: MSG.NOT_MATCH_PASSWORD,
    path: ["confirm_password"],
  });

export const singUpAction = async (prevAction: any, formData: FormData) => {
  console.log(formData);
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formScheme.safeParse(data);
  console.log(result);
  if (result.error) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    return;
  }
};
