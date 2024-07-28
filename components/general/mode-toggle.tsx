"use client";

import React, {useEffect} from "react";

import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MoonIcon, SunIcon} from "lucide-react";
import {Switch} from "../ui/switch";
import Image from "next/image";

export function ModeToggle() {
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const switchHandler = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className="relative">
      <Switch onClick={switchHandler} />
    </div>
  );
}
