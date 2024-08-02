"use server";

import { MIN_LENGTH_PASSWORD, MSG } from "@/lib/constants";
import client from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { comparePassword, mustExistEmail } from "@/validations/users";
import { redirect } from "next/navigation";

import { z } from "zod";

const formSchema = z
  .object({
    email: z.string({ message: MSG.REQUIRED }).toLowerCase().email(MSG.INVALIED_TPYE_EMAIL),
    password: z.string({ message: MSG.REQUIRED }).min(MIN_LENGTH_PASSWORD, MSG.MIN_LENGTH_PASSWORD),
  })
  .refine(mustExistEmail, { message: MSG.NOT_EXISTED_EMAIL, path: ["email"] })
  .refine(comparePassword, { message: MSG.WRONG_PASSWORD, path: ["password"] });

const signInAction = async (prevAction: any, formData: FormData) => {
  const ogigin = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const { error, data } = await formSchema.safeParseAsync(ogigin);
  if (error) {
    return error.flatten();
  } else {
    const session = await getSession();
    const user = await client.user.findUnique({
      where: {
        email: data.email,
      },
      select: {
        id: true,
      },
    });
    session.id = user!.id;
    session.save();
    redirect("/");
  }
};

export default signInAction;
