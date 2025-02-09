import { create } from "zustand";
import { initialSidebarItems } from "./initialSidebarItems";

export interface SidebarBaseItem {
  id: number;
  text: string;
  url?: string;
  showItem: boolean;
}
export interface SidebarMainItem extends SidebarBaseItem {
  isOpen?: boolean;
  subItems?: SidebarBaseItem[];
}

type NavigationStore = {
  sidebarItems: SidebarMainItem[];
  handleItemClick: (id: number) => void;
  saveItems: (newItems: SidebarMainItem[]) => void;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  sidebarItems: initialSidebarItems,

  saveItems: (newItems: SidebarMainItem[]) => set({ sidebarItems: newItems }),
  handleItemClick: (id: number) => {
    set((state) => {
      return {
        sidebarItems: state.sidebarItems.map((item) =>
          item.id === id ? { ...item, isOpen: !item.isOpen } : item
        ),
      };
    });
  },
}));
