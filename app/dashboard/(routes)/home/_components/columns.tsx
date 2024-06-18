"use client";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {ColumnDef} from "@tanstack/react-table";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StarIcon from "@/components/icons/star-icon";
import VerifiedIcon from "@/components/icons/verified-icon";

interface Ifund {
  id: string;
  name: string;
  image: string;
  tag?: string;
  price: number;
  tvl: number;
  D3O: number;
  alltime: number;
  composition: string[];
  chart: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

export const columns: ColumnDef<Ifund>[] = [
  {
    accessorKey: "id",
    header: ({column}) => {
      return (
        <DataTableColumnHeader column={column} title="Id" />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center gap-2">
          <p>{row.getValue("id")}</p>
          <StarIcon />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Name"
        />
      );
    },
    cell: ({row}) => {
      console.log("🚀 ~ row:", row);
      return (
        <div className="flex items-center gap-2">
          <Avatar className="w-11 h-11 rounded-md">
            {row.original.image && (
              <AvatarImage
                className="object-cover"
                src={row.original.image}
              />
            )}

            {!row.original.image && (
              <AvatarFallback>
                {row.original.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex flex-col ">
            <p className="whitespace-nowrap flex items-center gap-2">
              {row.getValue("name")}
              <VerifiedIcon />
            </p>

            <p className="text-xs bg-[#E4E7EC] text-[#484856] w-max font-medium px-1 rounded-sm">
              {row.original.tag}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "price",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Price"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center gap-2">
          <p>${row.getValue("price")}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "tvl",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="TVL"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center gap-2">
          <p>${row.getValue("tvl")}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "D3O",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="3OD"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center gap-2">
          <Badge variant="custom">
            {row.getValue("D3O")}%{" "}
          </Badge>
        </div>
      );
    },
  },

  {
    accessorKey: "alltime",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Alltime"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center gap-2">
          <Badge variant="custom">
            {row.getValue("alltime")}%{" "}
          </Badge>
        </div>
      );
    },
  },

  {
    accessorKey: "composition",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Composition"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center">
          {row.original.composition
            .slice(
              0,
              row.original.composition.length > 3
                ? 3
                : row.original.composition.length
            )
            .map((coin, index) => (
              <Image
                alt={row.original.name}
                key={index}
                className="rounded-full"
                src={coin}
                width={32}
                height={32}
              />
            ))}
          {row.original.composition.length > 3 && (
            <span className="inline-flex items-center justify-center h-8 w-8 shrink-0 rounded-full bg-[#1D9BF0] text-white text-sm">
              +{row.original.composition.length - 3}
            </span>
          )}
        </div>
      );
    },
  },

  {
    accessorKey: "stats",
    header: ({column}) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Stats"
        />
      );
    },
    cell: ({row}) => {
      return (
        <div className="flex items-center gap-2">
          <AreaChart
            width={150}
            height={50}
            data={row.original.chart}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#54CC8B"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#54CC8B"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              // stroke="#54CC8B"
              // fill="#54CC8B"

              fill="url(#colorUv)" //Add the id 'colorUv' which is used in linearGradient
            />
          </AreaChart>
        </div>
      );
    },
  },
];
