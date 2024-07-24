"use client";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {ColumnDef} from "@tanstack/react-table";

import Image from "next/image";
import BurnIcon from "@/components/icons/burn-icon";
import WithdrawIcon from "@/components/icons/withdraw-icon";
import MintIcon from "@/components/icons/mint-icon";

interface IFundActivity {
  time: string;
  action: string;
  resultAction: string;
  usdc: string;
  holder: string;
  badge: string;
}

export const columnsActivities: ColumnDef<IFundActivity>[] =
  [
    {
      accessorKey: "time",
      header: ({column}) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Time"
          />
        );
      },
      cell: ({row}) => {
        return (
          <div className="flex items-center gap-2">
            <div className="flex flex-col ">
              <p className="whitespace-nowrap flex items-center gap-2">
                {row.original.action === "Burn" && (
                  <span className="w-2 h-2 bg-[#EF6766] rounded-full"></span>
                )}
                {row.original.action === "Withdraw" && (
                  <span className="w-2 h-2 bg-[#1A3EFF] rounded-full"></span>
                )}
                {row.original.action === "Mint" && (
                  <span className="w-2 h-2 bg-[#07C256] rounded-full"></span>
                )}

                {row.getValue("time")}
              </p>
            </div>
          </div>
        );
      },
    },

    {
      accessorKey: "action",
      header: ({column}) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Action"
          />
        );
      },
      cell: ({row}) => {
        return (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 ">
              {row.original.action === "Burn" && (
                <BurnIcon />
              )}
              {row.original.action === "Withdraw" && (
                <WithdrawIcon />
              )}
              {row.original.action === "Mint" && (
                <MintIcon />
              )}

              <p className="whitespace-nowrap flex items-center gap-2">
                {row.getValue("action")}
              </p>
            </div>
          </div>
        );
      },
    },

    {
      accessorKey: "result",
      header: ({column}) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Result"
          />
        );
      },
      cell: ({row}) => {
        return (
          <div className="flex items-center gap-2 mr-16 lg:mr-32 xl:mr-64">
            <div className="flex items-center gap-2">
              <p className="whitespace-nowrap flex items-center gap-2">
                {row.original.action}
              </p>

              <Image
                src="/assets/site/coins/coin31.png"
                alt="coin"
                width={28}
                height={28}
              />

              <p className="whitespace-nowrap flex items-center gap-2">
                {row.original.usdc}
              </p>

              <div className="bg-[#6C7685]  text-white px-2 py-1 rounded-sm">
                {row.original.badge}
              </div>
            </div>
          </div>
        );
      },
    },

    {
      accessorKey: "holder",
      header: ({column}) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Holder"
          />
        );
      },
      cell: ({row}) => {
        return (
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap flex items-center gap-2 text-ellipsis">
              {row.getValue("holder")}
            </p>
          </div>
        );
      },
    },
  ];
