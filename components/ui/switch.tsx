"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import {cn} from "@/lib/utils";
import Image from "next/image";
import {useTheme} from "next-themes";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({className, ...props}, ref) => {
  const {theme, setTheme} = useTheme();

  return (
    <SwitchPrimitives.Root
      className={cn(
        "relative peer inline-flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ",
        theme === "light" ? "mode-toggle-bg-light" : "mode-toggle-bg-dark",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none absolute -z-1 block h-8 w-8 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0",
          theme === "light" ? "mode-toggle-circle-light" : "mode-toggle-circle-dark "
        )}
      />

      {theme === "light" && (
        <>
          <Image
            src="/assets/site/mode/darksun.png"
            width={20}
            height={20}
            alt="Dark Sun"
            className="absolute top-[6px] left-[6px] z-10"
          />

          <Image
            src="/assets/site/mode/darkmoon.png"
            width={20}
            height={20}
            alt="Dark Moon"
            className="absolute top-[6px] right-[3px] z-10"
          />
        </>
      )}

      {theme === "dark" && (
        <>
          <Image
            src="/assets/site/mode/lightsun.png"
            width={20}
            height={20}
            alt="Light Sun"
            className="absolute top-[6px] left-[6px] z-10"
          />

          <Image
            src="/assets/site/mode/lightmoon.png"
            width={20}
            height={20}
            alt="Light Moon"
            className="absolute top-[6px] right-[3px] z-10"
          />
        </>
      )}
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export {Switch};
