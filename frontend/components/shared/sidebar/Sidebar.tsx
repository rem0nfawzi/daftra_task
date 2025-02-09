"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";
import Settings from "../icons/Settings";
import SidebarItem from "./sidebar-item/SidebarItem";
import { useRouter } from "next/navigation";

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
const Sidebar = () => {
  const router = useRouter();
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);
  const handleClick = useCallback((id: number, url?: string) => {
    if (url) router.push(url);
    else
      setSidebarItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isOpen: !item.isOpen } : item
        )
      );
  }, []);
  return (
    <aside className={cn("w-[440px] bg-white")}>
      <div
        className={cn("fixed left-0 top-[98px] bottom-0 w-[440px] bg-white")}
      >
        <div className="flex items-center justify-between px-[42px] py-[34px] border-b border-gray-100">
          <p className="text-2xl text-gray-500 font-medium capitalize">Menu</p>
          <button>
            <Settings width={30} height={30} />
          </button>
        </div>
        <div className="px-3.5 mt-3.5 overflow-y-auto">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              id={item.id}
              text={item.text}
              url={item.url}
              isOpen={item.isOpen}
              subItems={item.subItems}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
