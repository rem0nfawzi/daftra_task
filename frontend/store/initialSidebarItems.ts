import { SidebarMainItem } from "./useNavigationStore";

export const initialSidebarItems: SidebarMainItem[] = [
  {
    id: 1,
    title: "Dashboard",
    target: "/",
    showItem: true,
  },
  {
    id: 2,
    title: "Job Application",
    isOpen: false,
    showItem: true,
    subItems: [
      { id: 1, title: "John Doe", target: "/", showItem: true },
      { id: 2, title: "James Bond", target: "/", showItem: true },
    ],
  },
  {
    id: 3,
    title: "Qualifications",
    isOpen: false,
    showItem: true,
    subItems: [
      { id: 1, title: "John Doe", target: "/", showItem: true },
      { id: 2, title: "James Bond", target: "/", showItem: true },
    ],
  },
  {
    id: 4,
    title: "About",
    target: "/",
    showItem: true,
  },
  {
    id: 5,
    title: "Contact",
    target: "/",
    showItem: true,
  },
];
