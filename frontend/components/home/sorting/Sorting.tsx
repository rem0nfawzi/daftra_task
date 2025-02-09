import ArrowBottom from "@/components/shared/icons/ArrowBottom";
import React from "react";

const Sorting = () => {
  return (
    <div className="flex justify-end mb-9">
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
