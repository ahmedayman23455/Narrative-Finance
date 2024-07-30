"use client";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {ColumnDef} from "@tanstack/react-table";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {Progress} from "@/components/ui/progress";

interface IFundParamter {
  name: string;
  image: string;
  price?: number;
  currentWeight: number;
  targetWeight: number;
  percentage1: number;
  percentage2: number;
}

export const columns: ColumnDef<IFundParamter>[] = [
  {
    accessorKey: "name",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Assets"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center gap-2">
          <Avatar className="w-11 h-11 rounded-md">
            {row.original.image && (
              <AvatarImage
                className="object-cover"
                src={row.original.image}
              />
            )}

            {!row.original.image && (
              <AvatarFallback>
                {row.original.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex flex-col ">
            <p className="whitespace-nowrap flex items-center gap-2">
              {row.getValue("name")}
            </p>

            <p className="text-xs  text-[#9EA3B5] dark:text-[#777777] w-max  px-1 rounded-sm font-normal">
              ${row.original.price}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "currentWeight",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Weights"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex flex-col gap-2 w-[490px]">
          <div className="flex items-center justify-between gap-40 w-full">
            <div className="flex flex-col  items-start gap-1 w-max font-normal">
              <p>Current weight</p>
              <p className="text-xs  text-[#9EA3B5] dark:text-[#777777]">
                0%
              </p>
            </div>

            <div className="flex flex-col  items-start gap-1 w-max font-normal">
              <p>Target weight</p>
              <p className="text-xs  text-[#9EA3B5] dark:text-[#777777]">
                0%
              </p>
            </div>
          </div>

          <Progress value={70} className="w-full" />
        </div>
      );
    },
  },

  {
    accessorKey: "percentage1",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Balances"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex flex-col  items-end gap-1 w-max font-normal">
          <p>{row.getValue("percentage1")}</p>
          <p className="text-xs  text-[#9EA3B5] dark:text-[#777777]">
            {row.original.percentage2}
          </p>
        </div>
      );
    },
  },
];
