"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavItemProps } from "../NavItems";
import ArrowBottom from "@/components/shared/icons/ArrowBottom";
import ProfileMenu from "../../profile-menu/ProfileMenu";
import { cn } from "@/lib/utils";

const Item = ({ type, icon, label, url, isProfileButton }: NavItemProps) => {
  const [showMenu, setShowMenu] = useState(false);
  if (type === "button")
    return (
      <div className={cn("relative")}>
        <button
          className="text-lg flex flex-col items-center justify-between"
          onClick={() => {
            if (isProfileButton) setShowMenu((prev) => !prev);
          }}
        >
          {icon}
          <div className="flex items-center gap-1">
            {label}
            {isProfileButton && (
              <ArrowBottom width={16} height={16} fill="#fff" />
            )}
          </div>
        </button>
        {isProfileButton && showMenu && (
          <ProfileMenu setShowMenu={setShowMenu} />
        )}
      </div>
    );
  return (
    <Link
      href={url ?? "/"}
      className={cn("text-lg flex-col items-center hidden", "lg:flex")}
    >
      {icon}
      {label}
    </Link>
  );
};

export default Item;
