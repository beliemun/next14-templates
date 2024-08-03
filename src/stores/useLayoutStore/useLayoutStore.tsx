import { create } from "zustand";
import { LayoutProps, LayoutStore } from "./type";

const initialData: LayoutProps = {
  isCollapsed: false,
  isFullWidth: false,
};

const useLayoutStore = create<LayoutStore>((set, get) => ({
  ...initialData,
  setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
  setIsFullWidth: (isFullWidth) => set({ isFullWidth }),
}));

export default useLayoutStore;
