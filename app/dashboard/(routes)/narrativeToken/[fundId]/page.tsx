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

interface Coin {
  name: string;
  percentage: number;
}

interface CoinProps {
  coin: Coin;
  isExpanded: boolean;
  onToggle: () => void;
}

const coins2: Coin[] = [
  {name: "Solana", percentage: 45},
  {name: "Bitcoin", percentage: 35},
  {name: "Ethereum", percentage: 15},
  {name: "Cardano", percentage: 5},
];

const FundPage = () => {
  const {fundId} = useParams();
  const {theme} = useTheme();
  const [expandedCoin2, setExpandedCoin2] = useState<string | null>(coins2[0].name);

  const selectedFund = funds.find((fund) => fund.id === fundId);

  if (!selectedFund) {
    // Return the notFound object if the FAQ does not exist
    return {notFound: true};
  }

  const handleToggle2 = (coinName: string) => {
    setExpandedCoin2(expandedCoin2 === coinName ? null : coinName);
  };

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
              <SolanaChart />
            </div>

            <div className="flex flex-col  w-full lg:max-w-[468px]">
              <div className="relative w-full lg:max-w-[468px] px-4 pb-4   bg-[#F8FAFE] dark:bg-[#1E1E1E] rounded-lg">
                <Tabs defaultValue="Swap" className="flex flex-col gap-4 w-full ">
                  <div className="relative flex flex-col w-full  justify-between">
                    {/* > tabs */}

                    <div className=" z-10 flex flex-row gap-4  items-center justify-between w-full px-4 mt-4 bg-[#F2F4F7] dark:!bg-[#242424] rounded-md ">
                      <TabsList className="!w-max  !bg-transparent !shadow-none !border-none !px-0">
                        <TabsTrigger value="Swap" className="max-w-[70px]">
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
                                  <SelectTrigger className="w-[110px] bg-[#DADEFF] text-[#484856] font-semibold text-base ">
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
                                <Select defaultValue="SOL">
                                  <SelectTrigger className="w-[110px] bg-[#DADEFF] text-[#484856] font-semibold text-base ">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="SOL">
                                      <div className="!flex items-center gap-2 w-full">
                                        <Image
                                          src="/assets/site/coins/coin1.png"
                                          width={16}
                                          height={16}
                                          alt="SOL"
                                        />
                                        <p>SOL</p>
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

      <div
        className=" min-h-[500px] relative p-4 bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]
rounded-2xl mt-16"
      >
        <Tabs defaultValue="composition" className="flex flex-col gap-4">
          <div className="relative flex flex-col gap-4 w-full  justify-between">
            {/* > tabs */}

            <div className="lg:absolute lg:top-0 lg:left-0 lg:w-max z-10 flex flex-col gap-4 lg:flex-row items-center justify-between w-full">
              <TabsList>
                <TabsTrigger value="composition">Composition</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="composition">
              <DataTable
                columns={columns}
                data={selectedFund.composition}
                className="custom-table"
                searchColumn="name"
              >
                {/* coins 2 */}

                <div className="max-sm:w-full max-sm:overflow-auto">
                  <div className="flex flex-row gap-1 max-sm:overflow-auto max-sm:w-[500px]">
                    {coins2.map((coin) => (
                      <Coin2
                        key={coin.name}
                        coin={coin}
                        isExpanded={expandedCoin2 === coin.name}
                        onToggle={() => handleToggle2(coin.name)}
                      />
                    ))}
                  </div>
                </div>
              </DataTable>
            </TabsContent>

            <TabsContent value="activity">
              <DataTable
                columns={columnsActivities}
                data={selectedFund.activities}
                className="custom-table"
                searchColumn="holder"
              />
            </TabsContent>

            <TabsContent value="about">
              <div className="lg:mt-16 flex flex-col gap-4">
                <h4 className="text-xl font-semibold">Overview</h4>
                <p>
                  The DeFi Pulse Index is a capitalization-weighted index that tracks the
                  performance of decentralized financial (DeFi) assets across Ethereum. It
                  combines the features of an ERC-20 token and a traditional structured
                  product to create a 21st century digital upgrade to structured products.
                </p>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full flex flex-col gap-4"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Methodology</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus in veritatis consequuntur quis voluptate quam animi
                      veniam dolore, quia delectus. Inventore soluta iste earum, non ab
                      temporibus? Ipsa exercitationem commodi neque ad veniam, tempore
                      assumenda? Asperiores dignissimos delectus sint accusantium.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Maintenance</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                      architecto eaque excepturi adipisci, numquam minima eligendi
                      distinctio odio repellat, rerum perferendis tempora porro labore
                      neque ducimus doloribus consequatur sequi expedita.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Fees</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi
                      obcaecati sit eaque quibusdam dolor vel ab molestias nisi culpa?
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Risk</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis, exercitationem quo quas quae explicabo itaque facere
                      ipsam aut ipsum ducimus vero qui reiciendis nulla excepturi!
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

const Coin2: React.FC<CoinProps> = ({coin, isExpanded, onToggle}) => {
  const widthClass = `!w-[${coin.percentage + "%"}]`;

  return (
    <div
      className={cn(
        `p-3 border bg-[#E1E7F2] h-[70px] lg:h-[91px] cursor-pointer rounded-md text-center transition-all duration-300 flex
         items-center justify-center `,
        {"!bg-[#B2BBFf] ": isExpanded}
        // {widthClass: !isExpanded}
      )}
      style={{
        width: !isExpanded ? coin.percentage + "%" : coin.percentage + 30 + "%",
      }}
      onClick={() => {
        if (!isExpanded) {
          onToggle();
        }
      }}
    >
      {isExpanded && (
        <>
          <div className="bg-white text-[#1E1E1E] flex flex-col items-center py-2 px-2 lg:px-7 rounded-sm w-max">
            <p className="text-[#1E1E1E] text-xs lg:text-base">{coin.name}</p>
            <p className="text-[#1E1E1E] text-base lg:text-3xl  font-medium">
              {coin.percentage}%
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FundPage;
