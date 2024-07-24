"use client";

import * as React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname, useRouter} from "next/navigation";
import {useTheme} from "next-themes";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({className, ...props}, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn(
          "border-collapse w-full caption-bottom text-sm table_separate_rows border-none",
          className
        )}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b ", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0 text-[13px]   ", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

interface ITableRowProps {
  id: string;
}
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    rowId?: string;
    existRedirection?: boolean;
  }
>(({className, rowId, existRedirection, ...props}, ref) => {
  const router = useRouter();

  return (
    <tr
      onClick={(e) => {
        if (existRedirection) {
          router.push(`narrativeFunds/${rowId}`);
        }
      }}
      ref={ref}
      className={cn(
        "test_solution overflow-hidden rounded-2xl  shadow-sm  border-b transition-colors  data-[state=selected]:bg-muted  ",
        className,
        {"cursor-pointer": "existRedirection"}
      )}
      {...props}
    />
  );
});

TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10  px-4  text-left align-middle font-medium  bg-white dark:bg-[#242424]   text-[#414C5E] dark:text-[#E8ECFF] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] first:rounded-tl-xl   first:rounded-bl-xl last:rounded-tr-xl   last:rounded-br-xl ",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => {
  const {theme} = useTheme();
  return (
    <td
      ref={ref}
      className={cn(
        ` py-4 px-4 font-semibold text-sm  bg-white
      dark:bg-[#1E1E1E] text-[#484856] dark:text-[#FFFFFF] 
      align-middle [&:has([role=checkbox])]:pr-0  dark:!border-t-4 dark:!border-b-4 dark:first:!border-l-4 dark:last:!border-r-4
      [&>[role=checkbox]]:translate-y-[2px]   first:dark:border-l last:dark:border-r 
      dark:border-[#363638] first:rounded-tl-2xl   first:rounded-bl-2xl last:rounded-tr-2xl   last:rounded-br-2xl `,
        {
          "dark:first:border-l dark:last:border-r ": theme === "dark",
        },
        className
      )}
      {...props}
    />
  );
});

TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({className, ...props}, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
