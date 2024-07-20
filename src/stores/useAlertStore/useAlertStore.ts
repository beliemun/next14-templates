import { create } from "zustand";
import { AlertProps, AlertStore } from "./types";

const initialData: AlertProps = {
  visible: false,
  title: undefined,
  message: undefined,
  actions: [{ lable: "닫기", style: "outline" }],
};

const useAlertStore = create<AlertStore>((set, get) => ({
  ...initialData,
  show: ({ title, message, ...rest }) => set({ visible: true, title, message, ...rest }),
  onDismiss: () => set({ ...initialData }),
}));

export default useAlertStore;
