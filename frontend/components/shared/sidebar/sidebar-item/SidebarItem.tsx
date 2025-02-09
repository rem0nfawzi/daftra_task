"use client";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import ArrowBottom from "../../icons/ArrowBottom";
import { SidebarItem as SidebarItemType } from "../Sidebar";

interface SidebarItemProps extends SidebarItemType {
  handleClick: (id: number, url?: string) => void;
}
const SidebarItem: FC<SidebarItemProps> = ({
  id,
  text,
  isOpen,
  url,
  subItems,
  handleClick,
}) => {
  return (
    <>
      <button
        className={cn(
          "w-full bg-gray-200 px-[30px] py-[19px] rounded-sm text-gray-500 text-2xl font-medium mb-3.5 flex items-center justify-between"
        )}
        onClick={() => handleClick(id, url)}
      >
        {text}
        {!!subItems?.length && (
          <ArrowBottom
            width={24}
            height={12}
            className={cn("transition", isOpen && "rotate-180")}
          />
        )}
      </button>
      {subItems && isOpen && (
        <div className="flex flex-col gap-3.5">
          {subItems.map((item) => (
            <button
              key={item.id}
              className={cn(
                "text-gray-500 text-xl py-3 mx-6 px-6 rounded-sm text-left mb-3.5 transition hover:bg-gray-200"
              )}
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
