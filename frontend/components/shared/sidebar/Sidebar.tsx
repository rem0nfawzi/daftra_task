"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SidebarItem from "./sidebar-item/SidebarItem";
import { useNavigationStore } from "@/store/useNavigationStore";
import SidebarItemEdit from "./sidebar-item-edit/SidebarItemEdit";
import ActionBtns from "./action-btns/ActionBtns";

const Sidebar = () => {
  const { sidebarItems } = useNavigationStore();
  const [isEditing, setIsEditing] = useState(false);
  const [localItems, setLocalItems] = useState(sidebarItems);

  return (
    <aside className={cn("w-[440px] bg-white")}>
      <div
        className={cn("fixed left-0 top-[98px] bottom-0 w-[440px] bg-white")}
      >
        <ActionBtns
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          localItems={localItems}
          setLocalItems={setLocalItems}
        />
        <div className="px-3.5 mt-3.5 overflow-y-auto">
          {!isEditing &&
            sidebarItems.map(
              (item) =>
                item.showItem && (
                  <SidebarItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    url={item.url}
                    isOpen={item.isOpen}
                    subItems={item.subItems}
                    showItem={item.showItem}
                  />
                )
            )}

          {isEditing &&
            localItems.map((item) => (
              <SidebarItemEdit
                key={item.id}
                item={item}
                setLocalItems={setLocalItems}
              />
            ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
