import { cn } from "@/lib/utils";
import React from "react";

interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <span
      className={cn(
        "bg-gray-200 rounded-sm py-0.5 px-2 text-xs text-gray-600",
        "md:text-base md:py-1 md:px-[18px]"
      )}
    >
      {text}
    </span>
  );
};

export default Tag;
