import { create } from "zustand";
import { SignedInUserProps, SingedInUserStore } from "./types";

const initialData: SignedInUserProps = {
  signedInUser: undefined,
};

const useSignedInUserStore = create<SingedInUserStore>((set) => ({
  ...initialData,
  setSignedInUser: (signedInUser) => set({ signedInUser }),
}));

export default useSignedInUserStore;
