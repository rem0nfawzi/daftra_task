import React from "react";
import { cn } from "@/lib/utils";
import Heart from "../../icons/Heart";

interface FavouriteProps {
  isFavourite: boolean;
}
const Favourite = ({ isFavourite }: FavouriteProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center absolute top-[11px] right-[12px] border border-gray-100 w-[25px] h-[25px] rounded-full transition",
        isFavourite ? "bg-primary-100 border-primary-500" : "hover:bg-gray-200",
        "md:top-[30px] md:right-[41px] md:w-[55px] md:h-[55px]"
      )}
    >
      <Heart
        width={22}
        height={22}
        fill={isFavourite ? "#3D8E41" : "#C4C3C3"}
        className={cn("w-[10px] h-[10px]", "md:w-[22px] md:h-[22px]")}
      />
    </button>
  );
};

export default Favourite;
