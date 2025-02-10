import { cn } from "@/lib/utils";
import React from "react";

interface TextProps {
  text: string;
  isEditingText: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  showItem?: boolean;
}
const Text = ({ text, isEditingText, onChange, showItem }: TextProps) => {
  return (
    <>
      {isEditingText ? (
        <input
          className={cn("text-base text-gray-800", "md:text-xl")}
          type="text"
          value={text}
          onChange={onChange}
        />
      ) : (
        <p
          className={cn(
            "text-base text-gray-800",
            "md:text-xl",
            !showItem && "text-gray-400"
          )}
        >
          {text}
        </p>
      )}
    </>
  );
};

export default Text;
