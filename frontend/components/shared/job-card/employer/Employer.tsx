import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface EmployerProps {
  image: string;
  title: string;
  location: string;
}
const Employer = ({ image, title, location }: EmployerProps) => {
  return (
    <div
      className={cn(
        "flex gap-[7.5px] mb-2 px-[17px]",
        "md:px[41px] md:gap-[22px] md:mb-[18px]"
      )}
    >
      <Image
        src={image}
        width={70}
        height={70}
        alt="Name"
        className={cn("w-[32px] h-[32px]", "md:w-[70px] md:h-[70]")}
      />
      <div className="flex flex-col justify-between">
        <h3 className={cn("text-sm text-gray-500 font-medium", "md:text-2xl")}>
          {title}
        </h3>
        <p className={cn("text-xs text-primary-500 font-bold", "md:text-lg")}>
          {location}
        </p>
      </div>
    </div>
  );
};

export default Employer;
