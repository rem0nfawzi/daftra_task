"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Settings from "../icons/Settings";
import SidebarItem from "./sidebar-item/SidebarItem";
import Check from "../icons/Check";
import Exit from "../icons/Exit";
import { useNavigationStore } from "@/store/useNavigationStore";

const Sidebar = () => {
  const { sidebarItems } = useNavigationStore();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <aside className={cn("w-[440px] bg-white")}>
      <div
        className={cn("fixed left-0 top-[98px] bottom-0 w-[440px] bg-white")}
      >
        <div className="flex items-center justify-between px-[42px] py-[34px] border-b border-gray-100">
          <p className="text-2xl text-gray-500 font-medium capitalize">Menu</p>
          {!isEditing && (
            <button onClick={() => setIsEditing(true)}>
              <Settings width={30} height={30} />
            </button>
          )}
          {isEditing && (
            <div className="flex gap-2">
              <button>
                <Check width={43} height={43} />
              </button>
              <button>
                <Exit width={43} height={43} />
              </button>
            </div>
          )}
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
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
