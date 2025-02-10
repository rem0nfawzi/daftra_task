"use client";
import React from "react";
import Image from "next/image";
import Bars from "../../icons/Bars";
import { useGlobalStore } from "@/store/useGlobalStore";

const MobileProfilebtn = () => {
  const { setShowMobileProfileMenu } = useGlobalStore();
  return (
    <button
      className="relative lg:hidden order-1"
      onClick={() => setShowMobileProfileMenu(true)}
    >
      <Image
        src="/images/user_img.svg"
        width={45}
        height={45}
        alt="User name"
      />
      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-300">
        <Bars width={14} height={14} />
      </span>
    </button>
  );
};

export default MobileProfilebtn;
