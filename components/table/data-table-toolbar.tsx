"use client";

import {X} from "lucide-react";
import {Row, Table} from "@tanstack/react-table";

import {Button} from "@/components/ui/button";

import {Input} from "@/components/ui/input";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  serachColumn: string;
  selectedRows: any[];
  dbName: string;
}

export function DataTableToolbar<TData>({
  table,
  serachColumn,
  selectedRows,
  dbName,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between w-full lg:w-max  ">
      <div className="flex flex-1 items-center space-x-2  w-full lg:w-[321px]">
        <Input
          isSearchInput
          placeholder={`Enter ${serachColumn}`}
          value={
            (table
              .getColumn(serachColumn)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(serachColumn)
              ?.setFilterValue(event.target.value)
          }
          className="w-full rounded-xl bg-white border-none dark:bg-[#242424] dark:border dark:border-[#363638]"
        />
      </div>
    </div>
  );
}
