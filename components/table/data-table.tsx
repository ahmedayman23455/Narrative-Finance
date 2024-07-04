"use client";
import React, {Children, useEffect, useState} from "react";

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
import {DataTableToolbar} from "./data-table-toolbar";
import {cn} from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchColumn: string;
  existRedirection?: boolean;
  notShowToolbar?: boolean;
  notShowThead?: boolean;
  notShowTbody?: boolean;
  notShowPagination?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchColumn,
  existRedirection,
  notShowToolbar,
  notShowTbody,
  notShowThead,
  notShowPagination,
  className,
  children,
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div className="space-y-4 ">
      <div className="relative flex flex-col gap-4 w-full  justify-between">
        {!notShowToolbar && (
          <div className="flex flex-col gap-4 lg:flex-row items-left justify-between w-full">
            <DataTableToolbar
              table={table}
              searchColumn={searchColumn}
            />
          </div>
        )}

        {children}

        <Table
          className={cn(
            "rounded-xl overflow-hidden w-full",
            className
          )}
        >
          {!notShowThead && (
            <TableHeader className="text-xs  ">
              {table
                .getHeaderGroups()
                .map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef
                                  .header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
            </TableHeader>
          )}

          {!notShowTbody && (
            <TableBody className="">
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
                      rowId={
                        (row.original as {id: string}).id
                      }
                      existRedirection={existRedirection}
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
                <TableRow
                  onClick={(e) => e.stopPropagation()}
                >
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>

      {!notShowPagination && (
        <DataTablePagination table={table} />
      )}
    </div>
  );
}
