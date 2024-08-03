import { create } from "zustand";
import { UserProps, UserStore } from "./types";

const initialData: UserProps = {
  user: undefined,
};

const useUserStore = create<UserStore>((set) => ({
  ...initialData,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
