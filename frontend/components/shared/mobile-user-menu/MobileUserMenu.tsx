"use client";
import React from "react";
import { cn } from "@/lib/utils";
import User from "./user/User";
import NavMenu from "./nav-menu/NavMenu";
import HelpMenu from "./help-menu/HelpMenu";
import { Drawer } from "@mui/material";
import { useGlobalStore } from "@/store/useGlobalStore";

const MobileUserMenu = () => {
  const { showMobileProfileMenu, setShowMobileProfileMenu } = useGlobalStore();
  return (
    <Drawer
      open={showMobileProfileMenu}
      onClose={() => setShowMobileProfileMenu(false)}
    >
      <aside className={cn("w-[285px] bg-white")}>
        <User />
        <NavMenu />
        <HelpMenu />
        <button className="text-red-600 font-medium mx-[21px] pt-3">
          Logout
        </button>
      </aside>
    </Drawer>
  );
};

export default MobileUserMenu;
