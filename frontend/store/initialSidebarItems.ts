import { SidebarMainItem } from "./useNavigationStore";

export const initialSidebarItems: SidebarMainItem[] = [
  {
    id: 1,
    text: "Dashboard",
    url: "/",
    showItem: true,
  },
  {
    id: 2,
    text: "Job Application",
    isOpen: false,
    showItem: true,
    subItems: [
      { id: 1, text: "John Doe", url: "/", showItem: true },
      { id: 2, text: "James Bond", url: "/", showItem: true },
    ],
  },
  {
    id: 3,
    text: "Qualifications",
    isOpen: false,
    showItem: true,
    subItems: [
      { id: 1, text: "John Doe", url: "/", showItem: true },
      { id: 2, text: "James Bond", url: "/", showItem: true },
    ],
  },
  {
    id: 4,
    text: "About",
    url: "/",
    showItem: true,
  },
  {
    id: 5,
    text: "Contact",
    url: "/",
    showItem: true,
  },
];
