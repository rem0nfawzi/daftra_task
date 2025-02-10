"use client";
import { cn } from "@/lib/utils";
import React, { FC, useCallback } from "react";
import ArrowBottom from "../../icons/ArrowBottom";
import {
  SidebarMainItem as SidebarItemType,
  useNavigationStore,
} from "@/store/useNavigationStore";
import { useRouter } from "next/navigation";

const SidebarItem: FC<SidebarItemType> = ({
  id,
  title,
  isOpen,
  target,
  subItems,
}) => {
  const router = useRouter();
  const { handleItemClick } = useNavigationStore();
  const handleClick = useCallback(
    (id: number, url?: string) => {
      if ((!subItems || subItems.length === 0) && url) router.push(url);
      else handleItemClick(id);
    },
    [handleItemClick, router, subItems]
  );
  return (
    <>
      <button
        className={cn(
          "w-full bg-gray-200 px-[25px] py-[16px] rounded-sm text-gray-500 text-sm font-medium mb-3 flex items-center justify-between",
          isOpen && "mb-0",
          "md:px-[30px] md:py-[19px] md:text-2xl md:mb-3.5"
        )}
        onClick={() => handleClick(id, target)}
      >
        {title}
        {!!subItems?.length && (
          <ArrowBottom
            width={24}
            height={12}
            className={cn("transition", isOpen && "rotate-180")}
          />
        )}
      </button>
      {subItems && isOpen && (
        <div className={cn("flex flex-col gap-0", "md:gap-3.5")}>
          {subItems.map(
            (item) =>
              item.showItem && (
                <button
                  key={item.id}
                  className={cn(
                    "text-gray-500 text-sm px-[25px] py-[16px] mx-6 rounded-sm text-left mb-1 transition hover:bg-gray-200",
                    "md:text-xl md:px-[30px] md:py-[19px] md:mb-3.5 "
                  )}
                >
                  {item.title}
                </button>
              )
          )}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
