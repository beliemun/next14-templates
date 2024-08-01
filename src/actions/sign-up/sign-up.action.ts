"use server";

import { z } from "zod";

const formScheme = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(8),
  confirm_passwor: z.string().min(8),
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
    return result.error.flatten();
  } else {
    return;
  }
};
