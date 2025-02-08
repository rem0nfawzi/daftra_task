import React from "react";
import Link from "next/link";
import { NavItemProps } from "../NavItems";

const Item = ({ type, icon, label, url }: NavItemProps) => {
  if (type === "button")
    return (
      <button className="text-lg flex flex-col items-center justify-between">
        {icon}
        {label}
      </button>
    );
  return (
    <Link href={url ?? "/"} className="text-lg flex flex-col items-center">
      {icon}
      {label}
    </Link>
  );
};

export default Item;
