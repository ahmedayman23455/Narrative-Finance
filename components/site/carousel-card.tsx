"use client";
import React, {useEffect, useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "../ui/button";
import CircularProgress from "@mui/joy/CircularProgress";
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";
import {light} from "@mui/material/styles/createPalette";
import {useRouter} from "next/navigation";

const CarouselCard = ({
  vectorColor,
  title,
  badge,
  images,
  price,
  tvl,
  link,
}: {
  vectorColor: "red" | "blue";
  title: string;
  badge: string;

  images: string[];
  price: string;
  tvl: string;
  link: string;
}) => {
  const {theme} = useTheme();
  const router = useRouter();

  return (
    <div data-aos="zoom-in" className="relative   ">
      <Card className="relative z-50 bg-transparent  border border-white bg-white dark:border-[#787878] dark:bg-[#1E1E22]">
        <CardHeader className="relative overflow-clip h-24 h-max border-b border rounded-tl-xl  rounded-tr-xl bg-white border-b-white carouselCardHeaderShadow dark:bg-[#242424] dark:border-b-[#787878] ">
          <CardTitle className="text-lg text-primary-foreground flex items-center gap-2 relative z-2">
            <Image
              width={60}
              height={60}
              src="/assets/site/logoIcon.png"
              alt="card icon"
            />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-[#484856] dark:text-white">
                  {title}
                </h3>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.98055 0.242476C6.47165 0.0778769 5.92075 0.0999506 5.42665 0.304739C4.93255 0.509526 4.52756 0.883633 4.2843 1.35998L3.6798 2.54198C3.60797 2.6827 3.49353 2.79714 3.3528 2.86898L2.17005 3.47348C1.69371 3.71673 1.3196 4.12172 1.11482 4.61582C0.910027 5.10993 0.887954 5.66082 1.05255 6.16973L1.46205 7.43348C1.51067 7.58364 1.51067 7.74531 1.46205 7.89548L1.0533 9.15923C0.888704 9.66813 0.910777 10.219 1.11557 10.7131C1.32035 11.2072 1.69446 11.6122 2.1708 11.8555L3.3528 12.46C3.49353 12.5318 3.60797 12.6463 3.6798 12.787L4.2843 13.9697C4.52756 14.4461 4.93255 14.8202 5.42665 15.025C5.92075 15.2298 6.47165 15.2518 6.98055 15.0872L8.2443 14.6777C8.39447 14.6291 8.55614 14.6291 8.7063 14.6777L9.97005 15.0865C10.4789 15.2511 11.0297 15.2292 11.5238 15.0245C12.0179 14.8199 12.4229 14.4459 12.6663 13.9697L13.2708 12.787C13.3426 12.6463 13.4571 12.5318 13.5978 12.46L14.7806 11.8562C15.2571 11.6129 15.6313 11.2078 15.8361 10.7136C16.0409 10.2193 16.0629 9.66823 15.8981 9.15923L15.4886 7.89548C15.4399 7.74531 15.4399 7.58364 15.4886 7.43348L15.8973 6.16973C16.062 5.66091 16.04 5.11008 15.8354 4.61599C15.6307 4.1219 15.2568 3.71686 14.7806 3.47348L13.5978 2.86898C13.4571 2.79714 13.3426 2.6827 13.2708 2.54198L12.6671 1.35923C12.4238 0.882719 12.0187 0.508495 11.5244 0.303695C11.0301 0.0988962 10.4791 0.0769255 9.97005 0.241725L8.7063 0.651225C8.55614 0.699839 8.39447 0.699839 8.2443 0.651225L6.98055 0.242476ZM4.5453 7.48223L5.6058 6.42173L7.7268 8.54348L11.9696 4.30073L13.0308 5.36123L7.7268 10.6637L4.5453 7.48223Z"
                    fill="blue"
                  />
                </svg>
              </div>

              <div className="px-2 rounded-[2px] text-foreground text-xs w-max  bg-[#E4E7EC] text-[#484856] dark:bg-[#1E1E22]">
                {badge}
              </div>
            </div>
          </CardTitle>

          {vectorColor === "red" ? (
            <Image
              src="/assets/site/vectorRed1.png"
              width={120}
              height={120}
              alt="vector"
              className="absolute top-0 right-0 bottom-0 z-2"
            />
          ) : (
            <Image
              src="/assets/site/vectorBlue1.png"
              width={120}
              height={120}
              alt="vector"
              className="absolute top-0 right-0 bottom-0 z-2"
            />
          )}
        </CardHeader>

        <CardContent className={cn("mt-4 ")}>
          <div className="flex items-start gap-2 ">
            <div className="flex flex-col gap-4 flex-1 w-full">
              <Card className="bg-transparent border-none p-0 shadow-none">
                <CardHeader className="flex flex-row items-center p-0 justify-between space-y-0 pb-2">
                  <CardTitle
                    className={
                      "text-xs font-medium text-[#414C5E] dark:text-[#E6E9FF]"
                    }
                  >
                    Price
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="font-semibold text-md md:text-xl text-[#484856] dark:text-white">
                    {price}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-none p-0 shadow-none">
                <CardHeader className="flex flex-row items-center p-0 justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs font-medium text-[#414C5E] dark:text-[#E6E9FF]">
                    composition
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center  p-0">
                  {images
                    .slice(
                      0,
                      images.length > 3 ? 3 : images.length
                    )
                    .map((coin, index) => (
                      <Image
                        alt={title}
                        key={index}
                        className="rounded-full"
                        src={coin}
                        width={32}
                        height={32}
                      />
                    ))}
                  {images.length > 3 && (
                    <span className="inline-flex items-center justify-center h-8 w-8 shrink-0 rounded-full bg-[#1D9BF0] text-white text-sm">
                      +{images.length - 3}
                    </span>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-transparent border-none p-0 shadow-none">
                <CardContent className="flex items-center  p-0">
                  <div className="relative h-24 w-24">
                    {theme === "light" ? (
                      <Image
                        src="/assets/site/lightpercentage.png"
                        layout="fill"
                        objectFit="contain"
                        alt="percentage image"
                        priority={true}
                      />
                    ) : (
                      <Image
                        src="/assets/site/darkpercentage.png"
                        layout="fill"
                        objectFit="contain"
                        alt="percentage image"
                        priority={true}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-8 flex-1 w-full">
              <Card className="bg-transparent border-none p-0 shadow-none">
                <CardHeader className="flex flex-row items-center p-0 justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs font-medium text-[#414C5E] dark:text-[#E6E9FF]">
                    TVL
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="font-semibold text-md md:text-xl text-[#484856] dark:text-white">
                    {tvl}
                  </div>
                </CardContent>
              </Card>

              {theme === "light" ? (
                <Image
                  width={120}
                  height={120}
                  src="/assets/site/lightstats.png"
                  alt="light stats"
                  priority={true}
                />
              ) : (
                <Image
                  width={120}
                  height={120}
                  src="/assets/site/darkstats.png"
                  alt="dark stats"
                  priority={true}
                />
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            className="w-full"
            size="lg"
            onClick={() => router.push(link)}
          >
            See Details
          </Button>
        </CardFooter>
      </Card>

      {theme === "light" ? (
        <Image
          src="/assets/site/lightglass.png"
          layout="fill"
          alt="class square"
          className="absolute -z-30 !top-[3%] !left-[3%] w-full h-full"
          data-aos="zoom-in"
        />
      ) : (
        <Image
          src="/assets/site/darkglass.png"
          layout="fill"
          alt="class square"
          className="absolute -z-5 !top-[3%] !left-[3%] w-full h-full"
          data-aos="zoom-in"
        />
      )}
    </div>
  );
};

export default CarouselCard;
