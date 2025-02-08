import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SearchInput from "./search-input/SearchInput";
import NavItems from "./nav-items/NavItems";

const Header = () => {
  return (
    <header className={cn("bg-secondary-500")}>
      <div
        className={cn(
          "flex justify-between items-center mx-auto h-[98px] max-w-[1744px]"
        )}
      >
        <div className="flex items-center">
          <Link href="/" className="mr-[46px]">
            <Image src="/images/logo.svg" width={81} height={27} alt="IZAM" />
          </Link>
          <SearchInput />
        </div>
        <NavItems />
      </div>
    </header>
  );
};

export default Header;
