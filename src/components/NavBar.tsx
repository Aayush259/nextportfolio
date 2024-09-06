import React from "react";
import { FloatingDock } from "./ui/FloatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconPhoneCall,
  IconInfoCircle,
  IconBrandCupra
} from "@tabler/icons-react";

export function NavBar() {
  const myLinks = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconBrandCupra className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Contact",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Aayush259_",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Aayush259",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={myLinks}
      />
    </div>
  );
}
