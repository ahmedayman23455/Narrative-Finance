"use client";
import React, {useState} from "react";
import {cn} from "@/lib/utils";

import {DataTable} from "@/components/table/data-table";

import {funds} from "@/data/demoFunds";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {useParams} from "next/navigation";

import UserTransactions from "@/components/fund/UserTransactions";
import {columnsActivities} from "@/app/dashboard/(routes)/narrativeToken/_components/activites_columns";
import {columns} from "@/app/dashboard/(routes)/narrativeFunds/[fundId]/_components/columns";

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

const FundContent = () => {
  const [expandedCoin2, setExpandedCoin2] = useState<string | null>(coins[0].name);

  const handleToggle2 = (coinName: string) => {
    setExpandedCoin2(expandedCoin2 === coinName ? null : coinName);
  };

  const {fundId} = useParams();

  const selectedFund = funds.find((fund) => fund.id === fundId);

  return (
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
              data={selectedFund!.composition}
              className="custom-table"
              searchColumn="name"
            >
              {/* coins 2 */}

              <div className="max-sm:w-full max-sm:overflow-auto">
                <div className="flex flex-row gap-1 max-sm:overflow-auto max-sm:w-[500px]">
                  {coins.map((coin) => (
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
              data={selectedFund!.activities}
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

              <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Methodology</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                    in veritatis consequuntur quis voluptate quam animi veniam dolore,
                    quia delectus. Inventore soluta iste earum, non ab temporibus? Ipsa
                    exercitationem commodi neque ad veniam, tempore assumenda? Asperiores
                    dignissimos delectus sint accusantium.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Maintenance</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    architecto eaque excepturi adipisci, numquam minima eligendi
                    distinctio odio repellat, rerum perferendis tempora porro labore neque
                    ducimus doloribus consequatur sequi expedita.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
                    exercitationem quo quas quae explicabo itaque facere ipsam aut ipsum
                    ducimus vero qui reiciendis nulla excepturi!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </div>
      </Tabs>
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

export default FundContent;
