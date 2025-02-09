import { create } from "zustand";

export interface SidebarItem {
  id: number;
  text: string;
  url?: string;
  isOpen?: boolean;
  subItems?: {
    id: number;
    text: string;
    url: string;
  }[];
}

type NavigationStore = {
  sidebarItems: SidebarItem[];
  handleItemClick: (id: number) => void;
};

const initialSidebarItems: SidebarItem[] = [
  {
    id: 1,
    text: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    text: "Job Application",
    isOpen: false,
    subItems: [
      { id: 1, text: "John Doe", url: "/job/john-doe" },
      { id: 2, text: "James Bond", url: "/job/james-bond" },
    ],
  },
  {
    id: 3,
    text: "Qualifications",
    isOpen: false,
    subItems: [
      { id: 1, text: "John Doe", url: "/job/john-doe" },
      { id: 2, text: "James Bond", url: "/job/james-bond" },
    ],
  },
  {
    id: 4,
    text: "About",
    url: "/about",
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact",
  },
];

export const useNavigationStore = create<NavigationStore>((set) => ({
  sidebarItems: initialSidebarItems,

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
