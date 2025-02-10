import ArrowBottom from "@/components/shared/icons/ArrowBottom";
import { cn } from "@/lib/utils";
import React from "react";

const Sorting = () => {
  return (
    <div className={cn("hidden mb-9", "md:flex md:justify-end")}>
      <div className="flex">
        <p className="text-gray-500 mr-4">Sorting by: </p>
        <button className="text-primary-300 flex items-center">
          Top match <ArrowBottom width={24} height={12} fill="#48A74C" />
        </button>
      </div>
    </div>
  );
};

export default Sorting;
