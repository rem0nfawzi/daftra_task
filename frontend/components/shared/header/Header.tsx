import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SearchInput from "./search-input/SearchInput";
import NavItems from "./nav-items/NavItems";
import MobileProfilebtn from "./mobile-profile-btn/MobileProfilebtn";
import MobileUserMenu from "../mobile-user-menu/MobileUserMenu";

const Header = () => {
  return (
    <>
      <header className={cn("bg-secondary-500 sticky top-0 z-10 px-4")}>
        <div
          className={cn(
            "flex justify-between gap-4 items-center mx-auto h-[86px] max-w-[1744px]",
            "lg:h-[98px]"
          )}
        >
          <div className="flex items-center order-2 lg:order-none">
            <Link href="/" className="lg:mr-[46px]">
              <Image src="/images/logo.svg" width={81} height={27} alt="IZAM" />
            </Link>
            <SearchInput />
          </div>
          <MobileProfilebtn />
          <NavItems />
        </div>
      </header>
      <MobileUserMenu />
    </>
  );
};

export default Header;
