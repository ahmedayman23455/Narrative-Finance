"use client";

import {X} from "lucide-react";
import {Row, Table} from "@tanstack/react-table";

import {Button} from "@/components/ui/button";

import {Input} from "@/components/ui/input";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchColumn: string;
}

export function DataTableToolbar<TData>({
  table,
  searchColumn,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between w-full lg:w-max lg:ml-auto  ">
      <div className="flex flex-1 items-center space-x-2  w-full lg:w-[321px]">
        <Input
          isSearchInput
          placeholder={`Enter ${searchColumn}`}
          value={
            (table
              .getColumn(searchColumn)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(searchColumn)
              ?.setFilterValue(event.target.value)
          }
          className="w-full rounded-xl bg-white border-none dark:bg-[#242424] dark:border dark:border-[#363638]"
        />
      </div>
    </div>
  );
}
