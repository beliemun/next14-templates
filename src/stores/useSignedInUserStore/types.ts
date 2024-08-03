import { User } from "@prisma/client";

export interface SignedInUserProps {
  signedInUser?: User | null;
}

export interface SingedInUserStore extends SignedInUserProps {
  setSignedInUser: (signedInUser: User | null) => void;
}
