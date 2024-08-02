import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

import StatsCard from "@/components/dashboard/stats-card";

import {funds} from "@/data/demoFunds";
import VerifiedIcon from "@/components/icons/verified-icon";
import Image from "next/image";
import SolanaChart from "@/components/dashboard/solana-chart";
import Link from "next/link";
import FundContent from "@/components/fund/FundContent";
import UserTransactionss from "@/components/fund/UserTransactions";

interface Coin {
  name: string;
  percentage: number;
}

interface CoinProps {
  coin: Coin;
  isExpanded: boolean;
  onToggle: () => void;
}

const coins: Coin[] = [
  {name: "Solana", percentage: 45},
  {name: "Bitcoin", percentage: 35},
  {name: "Ethereum", percentage: 15},
  {name: "Cardano", percentage: 5},
];

const FundPage = ({params}: {params: {fundId: string}}) => {
  const {fundId} = params;

  const selectedFund = funds.find((fund) => fund.id === fundId);

  return (
    <div className={cn("relative h-full pt-10 px-4 pb-4 lg:pl-[264px] lg:pt-0 lg:pb-20")}>
      <div className="w-full relative">
        {/* header */}
        <div className="sticky mt-8 lg:mt-0 right-0 left-0 top-0 lg:py-4 flex items-center justify-between lg:z-[80] ">
          <h1 className="text-2xl  text-black dark:text-white font-semibold">
            <Link href="/dashboard/narrativeFunds"> Narrative Funds </Link> &gt;
            <span className="font-normal">&nbsp; {selectedFund?.name}</span>
          </h1>

          <div className=" items-center gap-4 hidden lg:flex">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 rounded-md">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm truncate w-[106px]">
                Ahmed Ayma nAyma nAymanAyman Ayman Ayman
              </p>
            </div>

            <Button size="sm">Disconnect</Button>
          </div>
        </div>

        {/* Analytics  */}
        <div>
          <div className="flex items-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              {selectedFund?.image && (
                <Image
                  src={selectedFund.image}
                  alt={selectedFund.name}
                  width={42}
                  height={42}
                />
              )}

              <div className="flex flex-col ">
                <p className="whitespace-nowrap flex items-center gap-2">
                  {selectedFund?.name}
                  <VerifiedIcon />
                </p>

                <p className="text-xs bg-[#E4E7EC] text-[#484856] w-max font-medium px-1 rounded-sm">
                  {selectedFund?.tag}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4>Composition</h4>

              {selectedFund?.composition && (
                <div className="flex items-center">
                  {selectedFund?.composition
                    .slice(
                      0,
                      selectedFund?.composition.length > 3
                        ? 3
                        : selectedFund?.composition.length
                    )
                    .map((coin, index) => (
                      <Image
                        alt={selectedFund?.name}
                        key={index}
                        className="rounded-full"
                        src={coin.image}
                        width={32}
                        height={32}
                      />
                    ))}
                  {selectedFund?.composition?.length > 3 && (
                    <span className="inline-flex items-center justify-center h-8 w-8 shrink-0 rounded-full bg-[#1D9BF0] text-white text-sm">
                      +{selectedFund?.composition?.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full my-8 gap-4 lg:gap-8 items-start">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl lg:col-span-2 p-4  h-max pb-52 lg:pb-40 ">
              <SolanaChart badge={selectedFund?.tag || "Undefined"} />
            </div>

            <UserTransactionss />
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="relative">
        <div
          className="relative p-4 z-30 bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]
         rounded-xl mt-8"
        >
          <div className="flex  flex-wrap gap-4 relative z-30">
            <StatsCard
              tvl="AUM"
              totalValue="$2,279,507"
              percentageChange="+7.5%"
              change1week="Over the last 1 week"
            />
            <StatsCard
              tvl="Circulating supply"
              totalValue="$2,279,507"
              percentageChange="-7.5%"
              change1week="Over the last 1 week"
            />

            <StatsCard
              tvl="Total Volume"
              totalValue="$54,679,507.09"
              percentageChange="+7.5%"
              change1week="Over the last 1 week"
            />

            <StatsCard
              tvl="Fund Liquidity"
              totalValue="$18,679,507.09"
              percentageChange="+7.5%"
              change1week="Over the last 1 week"
            />
          </div>
        </div>

        <div className="absolute z-20 rounded-xl  top-4 left-4 right-4 h-full bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]"></div>
        <div className="absolute z-10 rounded-xl  top-8 left-8 right-8 h-full bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]"></div>
      </div>

      {/* table */}
      <FundContent />
    </div>
  );
};

export default FundPage;
