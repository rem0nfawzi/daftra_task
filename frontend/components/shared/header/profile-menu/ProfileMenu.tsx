import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface ProfileMenuProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfileMenu = ({ setShowMenu }: ProfileMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setShowMenu]);
  return (
    <div
      className="absolute top-full right-0 bg-white rounded-[11px] border border-gray-400 w-[316px]"
      ref={ref}
    >
      <div className="flex items-center gap-[17px] p-6 border-b border-gray-300">
        <Image
          src="/images/user_img.svg"
          width={70}
          height={70}
          alt="User name"
        />
        <div>
          <p className="text-lg font-medium text-gray-900">Ahmed Amaar</p>
          <p className="text-sm text-gray-600">UX UI designer</p>
        </div>
      </div>

      <nav className="p-6">
        <Link
          href="/"
          className="block text-lg text-gray-600 font-medium mb-[11px]"
        >
          Setting and privacy
        </Link>
        <Link
          href="/"
          className="block text-lg text-gray-600 font-medium mb-[11px]"
        >
          Language
        </Link>
        <Link
          href="/"
          className="block text-lg text-gray-600 font-medium mb-[11px]"
        >
          Help
        </Link>
      </nav>
      <div className="p-6 border-t border-gray-300">
        <button className="text-lg font-medium text-red-600">Logout</button>
      </div>
    </div>
  );
};

export default ProfileMenu;
