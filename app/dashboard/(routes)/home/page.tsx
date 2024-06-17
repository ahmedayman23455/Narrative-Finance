"use client";
import React from "react";
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import RightArrow from "@/components/icons/right-arrow";
import StarCircle from "@/components/icons/star-circle";
import ArrowRight from "@/components/icons/arrow-right";
import ShapeOne from "@/components/icons/shape-one";
import ShapeTwo from "@/components/icons/shape-two";
import Link from "next/link";
import StatsCard from "@/components/dashboard/stats-card";
import {DataTable} from "@/components/table/data-table";
import {columns} from "./_components/columns";
import {funds} from "@/data/demoFunds";

const HomePage = () => {
  const {theme} = useTheme();

  return (
    <div
      className={cn(
        "relative h-full pt-10 px-4 pb-4 lg:pl-[264px] lg:pt-0 lg:pb-20",
        {
          "bg-[#242424]": theme === "dark",
          "bg-[#E7F0FD]": theme === "light",
        }
      )}
    >
      <div className="w-full relative">
        {/* header */}
        <div className="sticky mt-8 lg:mt-0 right-0 left-0 top-0 lg:py-4 flex items-center justify-between lg:z-[80] ">
          <h1 className="text-2xl  text-black dark:text-white font-semibold">
            Home
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

        {/* banner  */}
        <div
          className="relative mt-4 p-6 lg:p-8 bg-primary text-white rounded-3xl 
          gap-8 lg:gap-4 overflow-hidden  border-white border-4 flex justify-between items-center"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg lg:text-2xl font-semibold">
                Cryptocurrency funds
              </h2>
              <Button className="lg:hidden relative z-10 bg-white text-[#484856] hover:bg-white hover:opacity-80">
                News
              </Button>
            </div>
            <p className="text-sm lg:text-base">
              Create on-chain funds or explore funds from
              the community.
            </p>

            <Button
              size="lg"
              className="w-max bg-white text-[#484856] hover:bg-white hover:opacity-80"
            >
              Create Funds
              <RightArrow />
            </Button>
          </div>

          <div className="relative z-10 bg-white p-4 w-max rounded-lg mr-12 hidden lg:block">
            <h4 className="text-base font-semibold text-[#475467]">
              Recent News
            </h4>

            <div className="flex flex-col gap-2 mt-2">
              <Link
                href="#"
                className="cursor-pointer hover:opacity-90 w-max bg-primary flex items-center rounded-lg px-3 gap-4 py-2"
              >
                <StarCircle />
                <div>Introducing private funds</div>
                <ArrowRight />
              </Link>

              <Link
                href="#"
                className="cursor-pointer hover:opacity-90 w-max bg-primary flex items-center rounded-lg px-3 gap-4 py-2"
              >
                <StarCircle />
                <div>
                  Lido is sunsetting stSOL on solana we...
                </div>
                <ArrowRight />
              </Link>
            </div>
          </div>

          <ShapeOne className="absolute -right-12 top-0 lg:h-[250px] lg:w-[250px]" />
          <ShapeTwo className="absolute -bottom-36 left-64 h-[400px] w-[400px] hidden lg:block" />
        </div>

        {/* stats */}
        <div className="relative">
          <div
            className="relative p-4 z-30 bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]
         rounded-xl mt-8"
          >
            <div className="flex flex-wrap items-center gap-4 relative z-30">
              <StatsCard />
              <StatsCard />
              <StatsCard />
              <StatsCard />
            </div>
          </div>

          <div className="absolute z-20 rounded-xl  top-4 left-4 right-4 h-full bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]"></div>
          <div className="absolute z-10 rounded-xl  top-8 left-8 right-8 h-full bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]"></div>
        </div>

        {/* table */}
        <div
          className=" relative p-4 bg-[#F8FAFE] dark:bg-[#1E1E1E] shadow-lg dark:shadow-none dark:border-[0.5px] dark:border-[#363638]
         rounded-2xl mt-16"
        >
          <DataTable
            columns={columns}
            data={funds}
            searchColumn="name"
            dbName="review"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
