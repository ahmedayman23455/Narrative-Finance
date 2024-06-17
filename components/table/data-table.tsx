"use client";
import React, {useEffect, useState} from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {DataTablePagination} from "./data-table-pagination";
import {Input} from "@/components/ui/input";
import {DataTableToolbar} from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchColumn: string;
  dbName: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchColumn,
  dbName,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] =
    React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);

  const [rowSelection, setRowSelection] = React.useState(
    {}
  );

  const [isMounted, setIsMounted] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  const selectedRows = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div className="space-y-4 ">
      <div className=" flex flex-col gap-4 w-full  lg:flex-row  items-center justify-between">
        {/* > tabs */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 w-full lg:w-max bg-white dark:bg-[#242424] dark:border dark:border-[#363638] shadow-md rounded-xl p-2">
          <div className="text-center lg:whitespace-nowrap lg:px-2  bg-primary py-2 text-white rounded-lg  px-2  lg:w-full cursor-pointer">
            Top Funds
          </div>
          <div className="text-center  lg:whitespace-nowrap lg:px-2 rounded-lg  py-2 px-2  lg:w-full cursor-pointer">
            Recents
          </div>
          <div className="text-center lg:whitespace-nowrap lg:px-2  rounded-lg py-2 px-2  lg:w-full cursor-pointer">
            Favourites
          </div>
          <div className="text-center lg:whitespace-nowrap lg:px-2  rounded-lg  py-2 px-2  lg:w-full cursor-pointer">
            All
          </div>
        </div>

        <DataTableToolbar
          table={table}
          serachColumn={searchColumn}
          selectedRows={selectedRows}
          dbName={dbName}
        />
      </div>

      <Table className="rounded-xl overflow-hidden ">
        <TableHeader className="text-xs  ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              // @ts-ignore
              // row.original.submitDate =row.original.submitDate.toLocaleString();

              return (
                <TableRow
                  key={row.id}
                  data-state={
                    row.getIsSelected() && "selected"
                  }
                  rowId={(row.original as {id: string}).id}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow onClick={(e) => e.stopPropagation()}>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DataTablePagination table={table} />
    </div>
  );
}
