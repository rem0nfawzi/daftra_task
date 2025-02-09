"use client";
import { cn } from "@/lib/utils";
import React, { FC, useCallback } from "react";
import ArrowBottom from "../../icons/ArrowBottom";
import {
  SidebarItem as SidebarItemType,
  useNavigationStore,
} from "@/store/useNavigationStore";
import { useRouter } from "next/navigation";

const SidebarItem: FC<SidebarItemType> = ({
  id,
  text,
  isOpen,
  url,
  subItems,
}) => {
  const router = useRouter();
  const { handleItemClick } = useNavigationStore();
  const handleClick = useCallback(
    (id: number, url?: string) => {
      if (url) router.push(url);
      else handleItemClick(id);
    },
    [handleItemClick, router]
  );
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
          {subItems.map(
            (item) =>
              item.showItem && (
                <button
                  key={item.id}
                  className={cn(
                    "text-gray-500 text-xl py-3 mx-6 px-6 rounded-sm text-left mb-3.5 transition hover:bg-gray-200"
                  )}
                >
                  {item.text}
                </button>
              )
          )}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
