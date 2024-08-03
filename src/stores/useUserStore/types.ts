import { User } from "@prisma/client";

export interface UserProps {
  user?: User | null;
}

export interface UserStore extends UserProps {
  setUser: (user: User | null) => void;
}
