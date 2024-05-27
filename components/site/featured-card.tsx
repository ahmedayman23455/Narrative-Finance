"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from "../ui/card";

import Image from "next/image";
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";

interface IFeatureCardPros {
  title: string;
  description: string;
  icon: string;
  vectorColor: "red" | "blue";
}

const FeaturedCard = ({
  title,
  description,
  icon,
  vectorColor,
}: IFeatureCardPros) => {
  const {theme} = useTheme();
  return (
    <div className="relative overflow-visible">
      <Card
        className={` relative min-h-[370px] md:min-h-[400px] z-10 overflow-clip ${
          theme === "light"
            ? "!bg-white"
            : "!bg-['#1E1E22']"
        } `}
        data-aos="fade-up"
      >
        <CardHeader className="pb-2">
          <div className="mb-2 h-16 w-16 bg-primary rounded-full flex items-center justify-center">
            <Image
              src={icon}
              alt={title}
              width={35}
              height={35}
            />
          </div>
          <CardTitle
            className={cn(
              "text-xl font-semibold",
              theme === "light"
                ? "text-[#252C4E]"
                : "text-white"
            )}
          >
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent
          className={cn("text-sm md:text-base",
            theme === "light"
              ? "text-[#545978]"
              : "text-white"
          )}
        >
          {description}
        </CardContent>

        {vectorColor === "red" && (
          <Image
            src="/assets/vectorRed2.png"
            alt="image"
            width={200}
            height={200}
            className="absolute top-0 right-0"
          />
        )}

        {vectorColor === "blue" && (
          <Image
            src="/assets/vectorBlue2.png"
            alt="image"
            width={200}
            height={200}
            className="absolute -bottom-2 left-0"
          />
        )}
      </Card>

      <Image
        src="/assets/glassSquare.png"
        layout="fill"
        alt="class square"
        className="absolute -z-5 !top-[3%] !left-[3%] w-full h-full"
        data-aos="fade-up"
      />
    </div>
  );
};

export default FeaturedCard;
