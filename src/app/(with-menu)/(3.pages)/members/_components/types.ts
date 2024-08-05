import { ColorType } from "@/lib/colors";
import { Role } from "@prisma/client";

export interface DataType {
  key: number;
  username: string;
  email: string;
  createdAt: string;
  role: {
    type: string;
    color: ColorType;
  };
  deletable: boolean;
}
