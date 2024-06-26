import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {cn} from "@/lib/utils";

interface IStatsCard {
  tvl: string;
  change24hr?: string;
  totalValue: string;
  percentageChange: string;
  change1week: string;
}

const StatsCard = ({
  tvl,
  change24hr,
  totalValue,
  percentageChange,
  change1week,
}: IStatsCard) => {
  return (
    <div className="flex-1  bg-white dark:bg-[#222325] dark:border dark:border-[#363638] p-4 rounded-lg shadow-lg">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium flex items-center gap-2">
          <div className="text-[#484856] dark:text-[#B7B7B7]">
            {tvl}
          </div>

          {change24hr && (
            <div className="flex items-center gap-2 border border-[#6C7685] rounded-md p-1">
              <span className="text-sm text-[#3FB68B] font-bold">
                {change24hr}
              </span>
              <span className="text-xs bg-[#E8ECFF] text-[#6C7685] p-1 rounded-sm">
                24h
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xl  lg:text-3xl font-bold text-[#484856]  dark:text-[#B7B7B7]">
          {totalValue}
        </div>

        <div className="flex justify-between items-center">
          <span
            className={cn("font-bold ", {
              "text-[#239564]":
                percentageChange.startsWith("+"),
              "text-[#FF3B30]":
                percentageChange.startsWith("-"),
            })}
          >
            {percentageChange}
          </span>
          <span className="text-sm text-[#484856]   dark:text-[#B7B7B7]">
            <p className="hidden xl:block">{change1week}</p>
            <p className="block xl:hidden"> In 1 week </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
