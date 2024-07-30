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
import {Check, Circle, CircleCheck} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import Timeline from "@/components/general/timeline";
import {columnsActivities} from "./_components/activites_columns";

interface Coin {
  name: string;
  percentage: number;
}

interface CoinProps {
  coin: Coin;
  isExpanded: boolean;
  onToggle: () => void;
}

const NarrativeToken2 = () => {
  const [redeemLoading, setRedeemLoading] = useState(false);
  const [redeemCompleted, setRedeemCompleted] = useState(false);
  const [depositUSDC, setDepositUSDC] = useState(false);
  const [despositUSDCCompleted, setDespositUSDCCompleted] = useState(false);

  const [depositToken, setDepositToken] = useState(false);
  const [depositTokenCompleted, setDepositCompleted] = useState(false);

  const [clicked, setIsClicked] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<null | Number>(null);

  const {fundId} = useParams();

  return (
    <div className={cn("relative h-full pt-10 px-4 pb-4 lg:pl-[264px] lg:pt-0 lg:pb-20")}>
      <div className="w-full relative">
        {/* header */}
        <div className="sticky mt-8 lg:mt-0 right-0 left-0 top-0 lg:py-4 flex items-center justify-between lg:z-[80] ">
          <h1 className="text-2xl  text-black dark:text-white font-semibold">
            <Link href="/dashboard/narrativeFunds"> Narrative Funds </Link> &gt;
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
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full my-8 gap-4 lg:gap-8 items-start">
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl lg:col-span-2 p-4  h-max pb-52 lg:pb-40 ">
                <SolanaChart badge={"Undefined"} />
              </div>

              <div className="flex flex-col  w-full lg:max-w-[468px] -mt-[2.2rem]">
                <div className="relative w-full lg:max-w-[468px]">
                  <div
                    className="relative  z-30 bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]
         rounded-xl mt-8"
                  >
                    <Tabs defaultValue="mintSmg" className="flex flex-col gap-4 w-full">
                      <div className="relative flex flex-col w-full  justify-between">
                        {/* > tabs */}

                        <div className=" z-10 flex flex-col gap-4 lg:flex-row items-center justify-between w-full px-4 pt-4">
                          <TabsList className="!w-full">
                            <TabsTrigger value="mintSmg">Mint SMG</TabsTrigger>
                            <TabsTrigger value="redeem">Redeem</TabsTrigger>
                          </TabsList>
                        </div>

                        <TabsContent value="mintSmg">
                          <Tabs
                            defaultValue="depositUSDC"
                            className="flex flex-col gap-4"
                          >
                            <div className="relative flex flex-col gap-4 w-full  justify-between">
                              {/* > tabs */}

                              <div className=" z-10 flex flex-col gap-4 lg:flex-row items-center justify-between w-full px-4">
                                <TabsList className="!w-full">
                                  <TabsTrigger value="depositUSDC">
                                    Deposit USDC
                                  </TabsTrigger>
                                  <TabsTrigger value="depositToken">
                                    Deposit Token
                                  </TabsTrigger>
                                </TabsList>
                              </div>

                              <TabsContent value="depositUSDC">
                                {!depositUSDC && !despositUSDCCompleted && (
                                  <>
                                    <div className="flex items-center justify-between px-4">
                                      <p>
                                        Balance:
                                        <span className="font-semibold">
                                          &nbsp; 3425.8 USDC
                                        </span>
                                      </p>
                                      MAX
                                    </div>

                                    <div className="mt-4 px-4">
                                      <label htmlFor="amount">Enter Amount</label>

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
                                    </div>

                                    <div className="flex items-center justify-between bg-primary text-white mt-8 px-4 py-2 rounded-bl-lg rounded-br-lg">
                                      <p>
                                        Minting
                                        <span className="font-semibold">
                                          &nbsp; ~4.596 SMG
                                        </span>
                                      </p>

                                      <Button
                                        onClick={() => depositUSDCHandler()}
                                        className="stroke-white text-white border-white rounded-sm flex items-center gap-2 py-1 px-2 border hover:opacity-90"
                                      >
                                        <p>Mint</p>
                                        <div className="flex-shrink-0">
                                          <ArrowRight />
                                        </div>
                                      </Button>
                                    </div>
                                  </>
                                )}

                                {depositUSDC && (
                                  <div className="flex flex-col px-4 gap-4 pb-4 ">
                                    <h3>Minting in progress</h3>
                                    <Progress value={70} className="w-full" />

                                    <div className="p-6">
                                      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <p>Desposit</p>
                                          <div className="flex flex-wrap gap-1 justify-end">
                                            <TokenBadge
                                              imageSrc="/assets/site/coins/coin1.png"
                                              tag="Msol"
                                              price="$15.000"
                                            />
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <LoadingSpinner className="text-gray-500" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Purchasing Tokens</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <LoadingSpinner className="text-gray-500" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Mint</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {despositUSDCCompleted && (
                                  <div className="flex flex-col px-4 gap-4 pb-4 ">
                                    <h3>Minting in progress</h3>

                                    <Progress value={70} className="w-full" />

                                    <div className="p-6">
                                      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <p>Desposit</p>
                                          <div className="flex flex-wrap gap-1 justify-end">
                                            <TokenBadge
                                              imageSrc="/assets/site/coins/coin1.png"
                                              tag="Msol"
                                              price="$15.000"
                                            />
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Purchasing Tokens</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Purchasing Tokens</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                      <Button
                                        className="w-full"
                                        onClick={() => claimHandler()}
                                      >
                                        Rebalance
                                      </Button>
                                      <Button className="w-full bg-blue-900 hover:bg-blue-900/90">
                                        Cancel Mint
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </TabsContent>

                              <TabsContent value="depositToken">
                                {!depositToken && !depositTokenCompleted && (
                                  <>
                                    <div className="flex items-center justify-between px-4">
                                      <p>
                                        Balance:
                                        <span className="font-semibold">
                                          &nbsp; 3425.8 USDC
                                        </span>
                                      </p>
                                      MAX
                                    </div>

                                    <div className="mt-4 px-4">
                                      <label htmlFor="amount">Enter Amount</label>

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
                                    </div>

                                    <div className="flex items-center justify-between bg-primary text-white mt-8 px-4 py-2 rounded-bl-lg rounded-br-lg">
                                      <p>
                                        Minting
                                        <span className="font-semibold">
                                          &nbsp; ~4.596 SMG
                                        </span>
                                      </p>

                                      <Button
                                        onClick={() => depositTokenHandler()}
                                        className="stroke-white text-white border-white rounded-sm flex items-center gap-2 py-1 px-2 border hover:opacity-90"
                                      >
                                        <p>Mint</p>
                                        <div className="flex-shrink-0">
                                          <ArrowRight />
                                        </div>
                                      </Button>
                                    </div>
                                  </>
                                )}

                                {depositToken && (
                                  <div className="flex flex-col px-4 gap-4 pb-4 ">
                                    <h3>Minting in progress</h3>
                                    <Progress value={70} className="w-full" />

                                    <div className="p-6">
                                      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <p>Desposit</p>
                                          <div className="flex flex-wrap gap-1 justify-end">
                                            <TokenBadge
                                              imageSrc="/assets/site/coins/coin1.png"
                                              tag="Msol"
                                              price="$15.000"
                                            />
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <LoadingSpinner className="text-gray-500" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Purchasing Tokens</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <LoadingSpinner className="text-gray-500" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Mint</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {depositTokenCompleted && (
                                  <div className="flex flex-col px-4 gap-4 pb-4 ">
                                    <h3>Minting in progress</h3>

                                    <Progress value={70} className="w-full" />

                                    <div className="p-6">
                                      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <p>Desposit</p>
                                          <div className="flex flex-wrap gap-1 justify-end">
                                            <TokenBadge
                                              imageSrc="/assets/site/coins/coin1.png"
                                              tag="Msol"
                                              price="$15.000"
                                            />
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Purchasing Tokens</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="grid gap-1 text-sm relative">
                                          <div className=" w-5 h-5 bg-green-500 rounded-full absolute -left-1 translate-x-[-29.5px] z-10 top-1  flex items-center justify-center shrink-0">
                                            <Check className="text-white w-4 h-4" />
                                          </div>
                                          <div className="flex items-start justify-between">
                                            <p>Mint</p>

                                            <div className="flex flex-wrap gap-1 justify-end">
                                              <TokenBadge
                                                imageSrc="/assets/site/coins/coin1.png"
                                                tag="Msol"
                                                price="$15.000"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                      <Button
                                        className="w-full"
                                        onClick={() => claimHandler()}
                                      >
                                        Rebalance
                                      </Button>
                                      <Button className="w-full bg-blue-900 hover:bg-blue-900/90">
                                        Cancel Mint
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </TabsContent>
                            </div>
                          </Tabs>
                        </TabsContent>

                        <TabsContent value="redeem">
                          <div className="flex flex-col px-4 gap-4 my-4">
                            {!redeemCompleted && <h3>Redeem Tokens</h3>}

                            {redeemLoading ? (
                              <div className="flex items-center justify-center">
                                <LoadingSpinner className="text-green-500 w-20 h-20" />
                              </div>
                            ) : (
                              !redeemCompleted && (
                                <p className="italic text-xs font-light">
                                  You are free to choode your preferred redeem method, you
                                  can choose to redeem them directly or convert them to
                                  USDC
                                </p>
                              )
                            )}

                            {redeemCompleted && (
                              <div className="flex  flex-col items-center justify-center gap-4">
                                <CircleCheck className="text-green-500 w-20 h-20" />
                                <p className="font-medium">Mint Complete!!</p>
                              </div>
                            )}

                            {!redeemCompleted && (
                              <div className="flex flex-col gap-4">
                                <h4 className="text-sm">Available Tokens</h4>
                                <div className="flex flex-wrap gap-1 items-end ">
                                  <TokenBadge
                                    imageSrc="/assets/site/coins/coin1.png"
                                    tag="Msol"
                                    price="$15.000"
                                  />
                                  <TokenBadge
                                    imageSrc="/assets/site/coins/coin1.png"
                                    tag="Msol"
                                    price="$15.000"
                                  />
                                  <TokenBadge
                                    imageSrc="/assets/site/coins/coin1.png"
                                    tag="Msol"
                                    price="$15.000"
                                  />
                                  <TokenBadge
                                    imageSrc="/assets/site/coins/coin1.png"
                                    tag="Msol"
                                    price="$15.000"
                                  />
                                  <TokenBadge
                                    imageSrc="/assets/site/coins/coin1.png"
                                    tag="Msol"
                                    price="$15.000"
                                  />
                                  <TokenBadge
                                    imageSrc="/assets/site/coins/coin1.png"
                                    tag="Msol"
                                    price="$15.000"
                                  />
                                </div>
                              </div>
                            )}

                            {redeemCompleted === false && redeemLoading === false && (
                              <div className="flex flex-col gap-2">
                                <Button className="w-full" onClick={() => claimHandler()}>
                                  Claim
                                </Button>
                                <Button className="w-full bg-blue-900 hover:bg-blue-900/90">
                                  Convert to USDC
                                </Button>
                              </div>
                            )}
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </div>

                  <div className="absolute z-20 rounded-xl  top-4 left-4 right-4 h-full bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]"></div>
                  <div className="absolute z-10 rounded-xl  top-8 left-8 right-8 h-full bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]"></div>
                </div>

                <h4 className="mt-12 text-base font-medium text-center">
                  Please enter desired amount above.
                </h4>
              </div>
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
      </div>
    </div>
  );
};

export default NarrativeToken2;
