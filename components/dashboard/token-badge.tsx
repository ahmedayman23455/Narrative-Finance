import Image from "next/image";
import React from "react";
import {Badge} from "@/components/ui/badge";

const TokenBadge = ({
  imageSrc,
  tag,
  price,
}: {
  imageSrc: string;
  tag: string;
  price: string;
}) => {
  return (
    <div className="flex items-center border-[0.5px] border-[#102599] gap-2 p-1 w-max rounded-lg">
      <Image
        src={imageSrc}
        width={12}
        height={12}
        alt="image"
      />
      <p className="text-xs">{tag}</p>

      <Badge className="bg-[#E8ECFF]  rounded-full text-[#484856] hover:bg-[#E8Ecff]/90 px-1">
        {price}
      </Badge>
    </div>
  );
};

export default TokenBadge;
