import React, { Fragment, ReactElement } from "react";
import Item from "./item/Item";
import Home from "../../icons/Home";
import { Divider } from "@mui/material";
import Bag from "../../icons/Bag";
import Users from "../../icons/Users";
import Bell from "../../icons/Bell";
import Image from "next/image";
import Message from "../../icons/Message";

export interface NavItemProps {
  type: "link" | "button";
  icon: ReactElement;
  label: string;
  url?: string;
  hasDivider?: boolean;
  isProfileButton?: boolean;
}

const items: NavItemProps[] = [
  {
    type: "link",
    icon: <Home width={30} height={36} />,
    label: "Home",
    url: "/",
  },
  {
    type: "link",
    icon: <Bag width={30} height={36} />,
    label: "Jobs",
    url: "/jobs",
  },
  {
    type: "link",
    icon: <Users width={30} height={36} />,
    label: "Employers",
    url: "/emplyers",
    hasDivider: true,
  },
  {
    type: "button",
    icon: <Bell width={30} height={36} />,
    label: "Notifications",
  },
  {
    type: "button",
    icon: <Message width={30} height={36} />,
    label: "Messages",
  },
  {
    type: "button",
    icon: (
      <Image
        src="/images/user_img.svg"
        width={36}
        height={36}
        alt="User name"
      />
    ),
    isProfileButton: true,
    label: "Profile",
  },
];
const NavItems = () => {
  return (
    <nav className="gap-[58px] hidden lg:flex">
      {items.map((item) => (
        <Fragment key={item.label}>
          <Item
            type={item.type}
            icon={item.icon}
            label={item.label}
            url={item.url}
            isProfileButton={item.isProfileButton}
          />
          {item.hasDivider && (
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                backgroundColor: "#D6D6D6",
              }}
            />
          )}
        </Fragment>
      ))}
    </nav>
  );
};

export default NavItems;
