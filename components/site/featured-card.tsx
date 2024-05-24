import React from "react";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from "../ui/card";

import Image from "next/image";

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
  return (
    <Card className="relative overflow-hidden h-[420px]" data-aos="fade-up">
      <CardHeader>
        <div className="mb-2 h-16 w-16 bg-primary rounded-full flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={35}
            height={35}
          />
        </div>
        <CardTitle className="text-foreground text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-muted-foreground">
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
  );
};

export default FeaturedCard;
