import { cn } from "@/lib/utils";
import React from "react";

interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <span className={cn("bg-gray-200 rounded-sm py-1 px-[18px] text-gray-600")}>
      {text}
    </span>
  );
};

export default Tag;
