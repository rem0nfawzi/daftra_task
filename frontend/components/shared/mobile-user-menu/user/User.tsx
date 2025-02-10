import Image from "next/image";
import React from "react";
import ArrowBottom from "../../icons/ArrowBottom";

const User = () => {
  return (
    <div className="flex items-center gap-[17px] py-[23px] px-[21px] border-b border-gray-300">
      <Image
        src="/images/user_img.svg"
        width={45}
        height={45}
        alt="User name"
      />
      <div>
        <p className="text-lg font-medium text-gray-900">Ahmed Amaar</p>
        <p className="text-sm text-gray-600">UX UI designer</p>
      </div>
      <button className="ml-auto">
        <ArrowBottom
          width={24}
          height={13}
          className="-rotate-90"
          fill="#C4C3C3"
        />
      </button>
    </div>
  );
};

export default User;
