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

interface IFundParamter {
  name: string;
  image: string;
  price?: number;
  currentWeight: number;
  targetWeight: number;
  percentage1: number;
  percentage2: number;
}

export const funds: Ifund[] = [
  {
    id: "1",
    name: "Solana Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-Sol",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin1.png",
      "/assets/site/coins/coin2.png",
      "/assets/site/coins/coin3.png",
      "/assets/site/coins/coin1.png",
      "/assets/site/coins/coin2.png",
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
    name: "AI Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-AI",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin4.png",
      "/assets/site/coins/coin5.png",
      "/assets/site/coins/coin6.png",
      "/assets/site/coins/coin4.png",
      "/assets/site/coins/coin5.png",
      "/assets/site/coins/coin6.png",
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
    name: "MEME Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-MEME",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin7.png",
      "/assets/site/coins/coin8.png",
      "/assets/site/coins/coin9.png",
      "/assets/site/coins/coin7.png",
      "/assets/site/coins/coin8.png",
      "/assets/site/coins/coin9.png",
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
    name: "EVM Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-EVM",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin10.png",
      "/assets/site/coins/coin11.png",
      "/assets/site/coins/coin12.png",
      "/assets/site/coins/coin10.png",
      "/assets/site/coins/coin11.png",
      "/assets/site/coins/coin12.png",
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
    id: "5",
    name: "DeFi Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-Defi",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin13.png",
      "/assets/site/coins/coin14.png",
      "/assets/site/coins/coin15.png",
      "/assets/site/coins/coin13.png",
      "/assets/site/coins/coin14.png",
      "/assets/site/coins/coin15.png",
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
    id: "6",
    name: "DePin Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-DePin",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin16.png",
      "/assets/site/coins/coin17.png",
      "/assets/site/coins/coin18.png",
      "/assets/site/coins/coin16.png",
      "/assets/site/coins/coin17.png",
      "/assets/site/coins/coin18.png",
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
    id: "7",
    name: "GameFi Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-GameFi",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin19.png",
      "/assets/site/coins/coin20.png",
      "/assets/site/coins/coin21.png",
      "/assets/site/coins/coin19.png",
      "/assets/site/coins/coin20.png",
      "/assets/site/coins/coin21.png",
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
    id: "8",
    name: "RWA Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-RWA",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin22.png",
      "/assets/site/coins/coin23.png",
      "/assets/site/coins/coin24.png",
      "/assets/site/coins/coin22.png",
      "/assets/site/coins/coin23.png",
      "/assets/site/coins/coin24.png",
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
    id: "9",
    name: "BRC20 Narrative",
    image: "/assets/site/logoIcon.png",
    tag: "$N-BRC20",
    price: 500,
    tvl: 760000,
    D3O: 75,
    alltime: 180,
    composition: [
      "/assets/site/coins/coin25.png",
      "/assets/site/coins/coin26.png",
      "/assets/site/coins/coin27.png",
      "/assets/site/coins/coin25.png",
      "/assets/site/coins/coin26.png",
      "/assets/site/coins/coin27.png",
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

export const fundsParamters: IFundParamter[] = [
  {
    name: "USDC",
    image: "/assets/site/coins/coin31.png",
    price: 50,
    currentWeight: 0,
    targetWeight: 0,
    percentage1: 0.46663,
    percentage2: 0.47,
  },
  {
    name: "My Staked SOL (mSOL)",
    image: "/assets/site/coins/coin32.png",
    price: 88.3,
    currentWeight: 0,
    targetWeight: 0,
    percentage1: 0.46663,
    percentage2: 0.47,
  },
  {
    name: "Doli Staked SOL",
    image: "/assets/site/coins/coin33.png",
    price: 23.4,
    currentWeight: 0,
    targetWeight: 0,
    percentage1: 0.46663,
    percentage2: 0.47,
  },
  {
    name: "Jojo Staked SOL",
    image: "/assets/site/coins/coin34.png",
    price: 90.55,
    currentWeight: 0,
    targetWeight: 0,
    percentage1: 0.46663,
    percentage2: 0.47,
  },
];
