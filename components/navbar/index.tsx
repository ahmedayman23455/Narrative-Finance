"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import {Button} from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Icon, Menu} from "lucide-react";
import {ModeToggle} from "../general/mode-toggle";
import {useTheme} from "next-themes";

const Navbar = () => {
  const {theme, setTheme} = useTheme();

  return (
    <div className="relative z-10 bg-card">
      <div className="max-w-[1164px] mx-auto px-4 py-6 flex items-center gap-4 justify-between text-foreground">
        <Image
          src={
            theme === "light"
              ? "/assets/logoLight.webp"
              : "/assets/logoDark.webp"
          }
          alt="Logo"
          width={200}
          height={200}
        />

        {/* <div className="hidden md:flex items-center gap-4 ">
          <Link
            href="#"
            className="text-base p-2  hover:text-primary rounded-md"
          >
            Why Narratives
          </Link>
          <Link
            href="#"
            className="text-sm p-2  hover:text-primary rounded-md"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-sm p-2  hover:text-primary rounded-md"
          >
            Products
          </Link>
        </div> */}

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="default"
            className="hidden md:block"
          >
            Launch App
          </Button>
          <ModeToggle />
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <SheetTrigger asChild>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Menu />
                  </Button>
                </div>
              </SheetTrigger>
            </div>
            <SheetContent side="left">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className=" flex flex-col items-left gap-4 ">
                <SheetClose asChild>
                  <Link
                    href="#"
                    className="text-base  w-max"
                  >
                    Why Narratives
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="#"
                    className="text-base  w-max"
                  >
                    Resources
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="#"
                    className="text-base  w-max"
                  >
                    Products
                  </Link>
                </SheetClose>

                <div className="flex items-center gap-4">
                  <Button variant="default">
                    Launch App
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
