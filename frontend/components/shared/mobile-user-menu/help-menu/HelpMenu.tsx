import Link from "next/link";
import React from "react";

const HelpMenu = () => {
  return (
    <ul className="px-[21px] pt-[15px] pb-[27px] border-b border-gray-300">
      <li>
        <Link href="/" className="text-lg text-gray-600 font-medium">
          Settings and privacy
        </Link>
      </li>
    </ul>
  );
};

export default HelpMenu;
