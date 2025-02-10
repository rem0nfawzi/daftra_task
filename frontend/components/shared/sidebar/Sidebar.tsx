"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SidebarItem from "./sidebar-item/SidebarItem";
import { useNavigationStore } from "@/store/useNavigationStore";
import ActionBtns from "./action-btns/ActionBtns";
import EditWrapper from "./edit-wrapper/EditWrapper";

const Sidebar = () => {
  const { sidebarItems, displaySidebarOnMobile, getSidebarItems } =
    useNavigationStore();
  const [isEditing, setIsEditing] = useState(false);
  const [localItems, setLocalItems] = useState(sidebarItems);

  useEffect(() => {
    getSidebarItems();
  }, [getSidebarItems]);
  return (
    <aside
      className={cn(
        "w-0 md:w-[440px] bg-white lg:block",
        !displaySidebarOnMobile && "hidden"
      )}
    >
      <div
        className={cn(
          "fixed top-0 bottom-0 left-[-30px] opacity-0 z-10 w-screen bg-white flex flex-col",
          "lg:top-[98px] lg:right-auto lg:w-[440px] lg:left-0 lg:opacity-100",
          displaySidebarOnMobile && "animate-sidebarMenuAnimation"
        )}
      >
        <ActionBtns
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          localItems={localItems}
          setLocalItems={setLocalItems}
        />
        <div className="px-3.5 mt-3.5 overflow-y-scroll">
          {!isEditing &&
            sidebarItems.map(
              (item) =>
                item.showItem && (
                  <SidebarItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    target={item.target}
                    isOpen={item.isOpen}
                    subItems={item.subItems}
                    showItem={item.showItem}
                  />
                )
            )}
          {isEditing && (
            <EditWrapper
              localItems={localItems}
              setLocalItems={setLocalItems}
              setIsEditing={setIsEditing}
            />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
