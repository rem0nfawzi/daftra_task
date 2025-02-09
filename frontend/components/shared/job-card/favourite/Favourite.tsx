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
        "flex items-center justify-center absolute top-[30px] right-[41px] border border-gray-100 w-[55px] h-[55px] rounded-full transition",
        isFavourite ? "bg-primary-100 border-primary-500" : "hover:bg-gray-200"
      )}
    >
      <Heart
        width={22}
        height={22}
        fill={isFavourite ? "#3D8E41" : "#C4C3C3"}
      />
    </button>
  );
};

export default Favourite;
