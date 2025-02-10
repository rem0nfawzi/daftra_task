import React from "react";
import CustomSwitch from "@/components/shared/switch/Switch";
import { cn } from "@/lib/utils";

const AlertsBanner = () => {
  return (
    <div
      className={cn(
        "flex-1 bg-primary-500 px-4 py-2.5 rounded-sm flex items-end justify-between gap-4 mb-[11px]",
        "md:px-10 md:py-6 md:items-center md:mb-6"
      )}
    >
      <div>
        <p
          className={cn(
            "text-xs text-white font-bold leading-3 mb-3",
            "md:text-lg"
          )}
        >
          UI Designer in Egypt
        </p>
        <p className="text-xs text-white leading-3">70 job positions</p>
      </div>
      <div className="flex items-center gap-2">
        <p className={cn("hidden text-xs text-white", "md:block")}>Set alert</p>
        <CustomSwitch />
      </div>
    </div>
  );
};

export default AlertsBanner;
