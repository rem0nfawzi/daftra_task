import React from "react";
import Link from "next/link";
import Home from "../../icons/Home";

const NavMenu = () => {
  return (
    <nav className="py-5 px-[21px] border-b border-gray-300">
      <ul>
        <li>
          <Link
            href="/"
            className="flex items-center gap-2.5 mb-20 last-of-type:mb-0"
          >
            <Home width={18} height={24} fill="#5B5B5B" />
            <p className="text-base text-gray-600 font-medium">Home</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
