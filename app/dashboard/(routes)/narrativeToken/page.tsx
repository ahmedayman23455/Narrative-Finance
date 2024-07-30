"use client";
import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

import StatsCard from "@/components/dashboard/stats-card";
import {DataTable} from "@/components/table/data-table";
import {columns} from "./_components/columns";
import {funds} from "@/data/demoFunds";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import VerifiedIcon from "@/components/icons/verified-icon";
import Image from "next/image";
import {Input} from "@/components/ui/input";

import ArrowRight from "@/components/icons/arrow-right";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SolanaChart from "@/components/dashboard/solana-chart";
import {Badge} from "@/components/ui/badge";
import TokenBadge from "@/components/dashboard/token-badge";
import {useParams} from "next/navigation";
import Link from "next/link";
import LoadingSpinner from "@/components/general/loading-spinner";
import {ArrowDown, Check, Circle, CircleCheck} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import Timeline from "@/components/general/timeline";
import {columnsActivities} from "./_components/activites_columns";
import {useTheme} from "next-themes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NarrativeTokenPage = () => {
  const {theme} = useTheme();

  return (
    <div className={cn("relative h-full pt-10 px-4 pb-4 lg:pl-[264px] lg:pt-0 lg:pb-20")}>
      <div className="w-full relative">
        {/* header */}
        <div className="sticky mt-8 lg:mt-0 right-0 left-0 top-0 lg:py-4 flex items-center justify-between lg:z-[80] ">
          <h1 className="text-2xl  text-black dark:text-white font-semibold">
            <Link href="/dashboard/narrativeFunds">
              Home &gt; <span className="font-normal"> Narratives Token</span>
            </Link>
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
            <Image
              src={
                theme === "dark"
                  ? "/assets/dashboard/sidebar/logoDark.png"
                  : "/assets/dashboard/sidebar/logoLight.png"
              }
              alt="logo"
              width={150}
              height={150}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full my-8 gap-4 lg:gap-8 items-start">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl lg:col-span-2 p-4  h-max pb-52 lg:pb-40 ">
              <SolanaChart badge="$NRTV" />
            </div>

            <div className="flex flex-col  w-full lg:max-w-[468px]">
              <div className="relative w-full lg:max-w-[468px] px-4 pb-4   bg-[#F8FAFE] dark:bg-[#1E1E1E] rounded-lg">
                <Tabs defaultValue="Swap" className="flex flex-col gap-4 w-full ">
                  <div className="relative flex flex-col w-full  justify-between">
                    <div className=" z-10 flex flex-row gap-4  items-center justify-between w-full px-4 mt-4 bg-[#F2F4F7] dark:!bg-[#242424] rounded-md ">
                      <TabsList className="!w-max  !bg-transparent !shadow-none !border-none !px-0">
                        <TabsTrigger value="Swap" className="max-w-[70px]" bgWhiteActive>
                          Swap
                        </TabsTrigger>
                        <TabsTrigger value="Send" className="max-w-[70px]">
                          Send
                        </TabsTrigger>
                        <TabsTrigger value="Buy" className="max-w-[70px]">
                          Buy
                        </TabsTrigger>
                      </TabsList>

                      <Image
                        src={
                          theme === "light"
                            ? "/assets/dashboard/setting.png"
                            : "/assets/dashboard/settingDark.png"
                        }
                        width={24}
                        height={24}
                        alt="settings"
                      />
                    </div>

                    <TabsContent value="Swap">
                      <>
                        <div className="relative flex flex-col gap-4">
                          <div className="p-4 bg-[#F2F4F7] dark:bg-[#242424] rounded-md">
                            <label htmlFor="amount" className="text-sm font-medium ">
                              You pay
                            </label>

                            <div className="flex items-end justify-between">
                              <div className="flex flex-col items-start justify-between">
                                <div className="relative text-3xl font-semibold">
                                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#6C7685]">
                                    $
                                  </span>

                                  <Input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    className="w-full pl-6 outline-none !bg-none !shadow-none text-3xl border-none !focus:outline-none"
                                  />
                                </div>

                                <p className=" text-sm font-medium ">$17.24085</p>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Select defaultValue="SOL">
                                  <SelectTrigger className="w-[130px] bg-[#DADEFF] text-[#484856] font-semibold text-base ">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="SOL">
                                      <div className="!flex items-center gap-2 w-full">
                                        <Image
                                          src="/assets/site/coins/coin35.png"
                                          width={24}
                                          height={24}
                                          alt="ETH"
                                        />
                                        <p>ETH</p>
                                      </div>
                                    </SelectItem>
                                  </SelectContent>
                                </Select>

                                <p className="whitespace-nowrap text-sm font-medium ">
                                  Balance: 0.007
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-[#F2F4F7] dark:bg-[#242424] rounded-md">
                            <label htmlFor="amount" className="text-sm font-medium ">
                              You receive
                            </label>

                            <div className="flex items-end justify-between">
                              <div className="flex flex-col items-start justify-between">
                                <div className="relative text-3xl font-semibold">
                                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#6C7685]">
                                    $
                                  </span>

                                  <Input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    className="w-full pl-6 outline-none !bg-none !shadow-none text-3xl border-none !focus:outline-none"
                                  />
                                </div>

                                <p className=" text-sm font-medium ">$17.24085</p>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Select defaultValue="NRTV">
                                  <SelectTrigger className="w-[130px] bg-[#DADEFF] text-[#484856] font-semibold text-base ">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="NRTV">
                                      <div className="!flex items-center gap-2 w-full">
                                        <Image
                                          src="/assets/site/coins/coin36.png"
                                          width={24}
                                          height={24}
                                          alt="NRTV"
                                        />
                                        <p>NRTV</p>
                                      </div>
                                    </SelectItem>
                                  </SelectContent>
                                </Select>

                                <p className="whitespace-nowrap text-sm font-medium ">
                                  Balance: 0.007
                                </p>
                              </div>
                            </div>
                          </div>

                          <Button
                            variant="default"
                            size="icon"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          >
                            <ArrowDown />
                          </Button>
                        </div>

                        <Button variant="default" size="lg" className="w-full mt-4">
                          Swap
                        </Button>
                      </>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>

              <div className="text-sm flex flex-col gap-2 mt-4">
                <div className="flex justify-between">
                  <p> Minimum received:</p>
                  <p>389240.05 SOL</p>
                </div>

                <div className="flex justify-between">
                  <p> Minimum received:</p>
                  <p className="text-[#239564]"> &gt;0.01</p>
                </div>

                <div className="flex justify-between">
                  <p>Liquidity Provider fee:</p>
                  <p> 0.00000456ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      F{/* stats */}
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
    </div>
  );
};

export default NarrativeTokenPage;
