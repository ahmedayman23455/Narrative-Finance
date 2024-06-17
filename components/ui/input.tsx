import * as React from "react";

import {cn} from "@/lib/utils";
import {Search} from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isSearchInput?: boolean;
}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({className, type, isSearchInput, ...props}, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          " flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          {
            "pl-10 placeholder:text-base placeholder:text-[##484856]":
              isSearchInput,
          },
          className
        )}
        ref={ref}
        {...props}
      />

      {isSearchInput && (
        <Search
          className="absolute left-2 top-1/2 -translate-y-1/2 text-[#7D849A]"
          width={24}
          height={24}
        />
      )}
    </div>
  );
});
Input.displayName = "Input";

export {Input};
