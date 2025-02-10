"use client";
import React from "react";
import Bars from "@/components/shared/icons/Bars";
import { cn } from "@/lib/utils";
import { useNavigationStore } from "@/store/useNavigationStore";

const MobileSidebarBtn = () => {
  const { setDisplaySidebarOnMobile } = useNavigationStore();
  return (
    <button
      className={cn(
        "w-[57px] h-[57px] flex items-center justify-center rounded-sm bg-white border border-gray-300",
        "md:hidden"
      )}
      onClick={() => setDisplaySidebarOnMobile(true)}
    >
      <Bars width={24} height={24} />
    </button>
  );
};

export default MobileSidebarBtn;
