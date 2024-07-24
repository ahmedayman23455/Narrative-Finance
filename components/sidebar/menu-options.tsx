"use client";

import React, {useState, useEffect, useMemo} from "react";
import {LogOut, Menu} from "lucide-react";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {cn} from "@/lib/utils";
import {sidebarLinks, socialMediaLinks} from "@/data/sidebarLinks";
import {ModeToggle} from "../general/mode-toggle";
import HomeIcon from "../icons/home-icon";
import LogoutIcon from "../icons/logout-icon";
import DocumentationIcon from "../icons/documentation-icon";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";

const MenuOptions = ({defaultOpen}: {defaultOpen?: boolean}) => {
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const {theme} = useTheme();
  const openState = useMemo(() => (defaultOpen ? {open: true} : {}), [defaultOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <Sheet modal={!defaultOpen} {...openState}>
      <div className="fixed top-0 right-0 left-0 z-[50]  p-4 lg:!hidden flex items-center justify-between  bg-background">
        <div className="flex items-center gap-4">
          <SheetTrigger asChild className=" ">
            <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
              <Menu
                className={cn("w-6 h-6", {
                  "text-[#252939]": theme === "light",
                  "text-white": theme === "dark",
                })}
              />
            </Button>
          </SheetTrigger>

          <Image
            src={
              theme === "dark"
                ? "/assets/dashboard/sidebar/logoDark.png"
                : "/assets/dashboard/sidebar/logoLight.png"
            }
            alt="logo"
            width={130}
            height={130}
          />
        </div>

        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm truncate w-[106px]">
            Ahmed Ayma nAyma nAymanAyman Ayman Ayman
          </p>
        </div>
      </div>

      <SheetContent
        showX={!defaultOpen}
        side="left"
        className={cn(
          " backdrop-blur-xl fixed top-0 border-r-[1px] p-4 overflow-y-auto",
          {
            "hidden lg:inline-block z-0 w-[240px] shadow-none ": defaultOpen,
            "inline-block lg:hidden z-[400] ": !defaultOpen,
            "bg-[#1E1E1E]": theme === "dark",
            "bg-white": theme === "light",
          }
        )}
      >
        <div className="flex flex-col gap-4 h-full">
          <SheetHeader className="text-left mb-4">
            <Link href="/">
              <Image
                src={
                  theme === "dark"
                    ? "/assets/dashboard/sidebar/logoDark.png"
                    : "/assets/dashboard/sidebar/logoLight.png"
                }
                alt="logo"
                width={150}
                height={150}
              />
            </Link>
          </SheetHeader>

          <div className="flex flex-col">
            {sidebarLinks.map((item, index) => {
              const isActive =
                (pathName.includes(item.link) && item.link.length > 1) ||
                pathName === item.link;
              return (
                <Link
                  href={item.link}
                  key={index}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-lg text-sm text-[#252939] dark:text-white",
                    {
                      "bg-primary text-white": isActive,
                    },
                    {
                      "hover:bg-secondary/10": !isActive,
                    }
                  )}
                >
                  <div className="flex items-center gap-2  ">
                    <item.icon active={isActive} />
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <ModeToggle />

          <button className="flex gap-2 items-center py-2 px-2 text-sm border border-primary cursor-pointer hover:opacity-80">
            <LogoutIcon />
            Logout
          </button>

          <div className="flex flex-col gap-4 mt-auto mb-12">
            <div className="flex  justify-between">
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className="border border-[#B8C3FF] rounded-md p-[6px]"
                >
                  <link.icon />
                </Link>
              ))}
            </div>

            <button className="flex gap-2 items-center py-2 px-2 text-sm  rounded-md border border-[#B8C3FF]  cursor-pointer hover:opacity-80">
              <DocumentationIcon />
              Documentation
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuOptions;
