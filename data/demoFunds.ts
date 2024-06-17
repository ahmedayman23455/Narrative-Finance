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

export const funds: Ifund[] = [
  {
    id: "1",
    name: "Solana my guy",
    image: "/assets/site/coins/coin1.png",
    tag: "SMG",
    price: 480.9,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin29.png",
      "/assets/site/coins/coin30.png",
      "/assets/site/coins/coin1.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
    ],

    chart: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
  },
  {
    id: "2",
    name: "Solana PG",
    image: "/assets/site/coins/coin28.png",
    tag: "SMG",
    price: 480.9,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin29.png",
      "/assets/site/coins/coin30.png",
      "/assets/site/coins/coin1.png",
    ],
    chart: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
  },
  {
    id: "3",
    name: "Solana my guy",
    image: "/assets/site/coins/coin1.png",
    tag: "SMG",
    price: 480.9,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin29.png",
      "/assets/site/coins/coin30.png",
      "/assets/site/coins/coin1.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
    ],
    chart: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
  },
  {
    id: "4",
    name: "Solana my guy",
    image: "/assets/site/coins/coin1.png",
    tag: "SMG",
    price: 480.9,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin29.png",
      "/assets/site/coins/coin30.png",
      "/assets/site/coins/coin1.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin3.png",
    ],

    chart: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
  },
];
