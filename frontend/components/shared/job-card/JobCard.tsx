import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Heart from "../icons/Heart";
import Location from "../icons/Location";

const JobCard = () => {
  return (
    <div className={cn("relative bg-white rounded-[5px] px-[41px] py-[35px]")}>
      <button
        className={cn(
          "flex items-center justify-center absolute top-[30px] right-[41px] border border-gray-100 w-[55px] h-[55px] rounded-full transition hover:bg-gray-200"
        )}
      >
        <Heart width={22} height={22} />
      </button>
      <div className="flex gap-[22px] mb-[18px]">
        <Image src="/images/brand.svg" width={70} height={70} alt="Name" />
        <div className="flex flex-col justify-between">
          <h3 className="text-2xl text-gray-500 font-medium">
            Senior UI/UX Designer
          </h3>
          <p className="text-lg text-primary-500 font-bold">Egypt</p>
        </div>
      </div>
      <div className="flex gap-3 mb-[18px]">
        <div className="flex items-center gap-1.5">
          <Location width={17} height={17} />
          <p className="text-md text-gray-600">Cairo, Egypt</p>
        </div>
        <div className="flex items-center gap-1.5">
          <Location width={17} height={17} />
          <p className="text-md text-gray-600">Cairo, Egypt</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
