import {
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  EyeOff,
} from "lucide-react";
import {Column} from "@tanstack/react-table";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "flex items-center space-x-2",
        className
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent hover:bg-zinc-100  hover:dark:bg-black/30 text-xs focus:outline-none"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-2 h-3 w-3" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-2 h-3 w-3" />
            ) : (
              <ArrowUpDown className="ml-2 h-3 w-3" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            onClick={() => column.toggleSorting(false)}
          >
            <ArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => column.toggleSorting(true)}
          >
            <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
