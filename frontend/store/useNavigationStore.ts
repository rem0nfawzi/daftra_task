import { create } from "zustand";
import { initialSidebarItems } from "./initialSidebarItems";
import apiClient from "@/lib/api";

interface ResItemType {
  id: number;
  title: string;
  target?: string;
  children?: Array<ResItemType>;
}
type GetNavItemsRes = Array<ResItemType>;

export interface SidebarBaseItem {
  id: number;
  title: string;
  target?: string;
  showItem: boolean;
}
export interface SidebarMainItem extends SidebarBaseItem {
  isOpen?: boolean;
  subItems?: SidebarBaseItem[];
}

type NavigationStore = {
  sidebarItems: SidebarMainItem[];
  displaySidebarOnMobile: boolean;
  setDisplaySidebarOnMobile: (displaySidebarOnMobile: boolean) => void;
  handleItemClick: (id: number) => void;
  saveItems: (newItems: SidebarMainItem[]) => Promise<void>;
  getSidebarItems: () => Promise<void>;
  reportAnalytics: ({
    id,
    from,
    to,
  }: {
    id: number;
    from: number;
    to: number;
  }) => Promise<void>;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  sidebarItems: initialSidebarItems,
  displaySidebarOnMobile: false,
  getSidebarItems: async () => {
    try {
      const itemsRes = await apiClient.get<GetNavItemsRes>({
        endpoint: "/nav",
      });
      if (itemsRes.status === 200) {
        const normalizedData = itemsRes.data.map((item) => ({
          ...item,
          showItem: true,
          isOpen: false,
          subItems: item.children?.map((subItem) => ({
            ...subItem,
            showItem: true,
          })),
        }));
        set({ sidebarItems: normalizedData });
      }
    } catch (error) {
      console.error("Error fetching sidebar items:", error);
    }
  },
  reportAnalytics: async ({
    id,
    from,
    to,
  }: {
    id: number;
    from: number;
    to: number;
  }) => {
    try {
      const analyticsRes = await apiClient.post<{ success: boolean }>({
        endpoint: "/track",
        data: { id, from, to },
      });
      if (analyticsRes.status === 200 && analyticsRes.data.success) {
        console.log("Analytics reported successfully");
      }
    } catch (error) {
      console.error("Error reporting analytics:", error);
    }
  },
  setDisplaySidebarOnMobile: (displaySidebarOnMobile: boolean) =>
    set({ displaySidebarOnMobile }),
  saveItems: async (newItems: SidebarMainItem[]) => {
    set({ sidebarItems: newItems });
    const normalizedData = newItems.map((item) => ({
      id: item.id,
      title: item.title,
      target: item.target,
      children: item.subItems?.map((subItem) => ({
        id: subItem.id,
        title: subItem.title,
        target: subItem.target,
      })),
    }));
    try {
      const saveRes = await apiClient.post<GetNavItemsRes>({
        endpoint: "/nav",
        data: normalizedData,
      });
      if (saveRes.status === 200 || saveRes.status === 204) {
        console.log("Sidebar items saved successfully");
      }
    } catch (error) {
      console.error("Error saving sidebar items:", error);
    }
  },
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
