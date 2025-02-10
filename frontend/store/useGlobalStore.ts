import { create } from "zustand";

type GlobalStore = {
  showMobileProfileMenu: boolean;
  setShowMobileProfileMenu: (showMobileProfileMenu: boolean) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  showMobileProfileMenu: false,
  setShowMobileProfileMenu: (showMobileProfileMenu: boolean) =>
    set({ showMobileProfileMenu }),
}));
