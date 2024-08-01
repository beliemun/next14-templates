"use server";

import { MIN_LENGTH_PASSWORD, MSG } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().toLowerCase().email(MSG.INVALIED_TPYE_EMAIL),
  password: z.string().min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
});

const signInAction = async (prevAction: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (result.error) {
    return result.error.flatten();
  } else {
  }
};

export default signInAction;
