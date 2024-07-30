"use client";
// components/SolanaChart.tsx
import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {useTheme} from "next-themes";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {ChartData, ChartOptions} from "chart.js";
import {cn} from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type TimeRange = "24hr" | "7D" | "1M" | "3M" | "1Y";

const timeRanges: Record<TimeRange, string> = {
  "24hr": "1",
  "7D": "7",
  "1M": "30",
  "3M": "90",
  "1Y": "365",
};

const SolanaChart = ({badge}: {badge: string}) => {
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [
      {
        label: "Solana Price",
        data: [],
        fill: false,
        backgroundColor: "#07C256",
        borderColor: "#07C256",
      },
    ],
  });
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [selectedRange, setSelectedRange] = useState<TimeRange>("7D");

  const {theme} = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.coingecko.com/api/v3/coins/solana/market_chart`,
          {
            params: {
              vs_currency: "usd",
              days: timeRanges[selectedRange],
            },
          }
        );

        const prices: [number, number][] = result.data.prices;
        const lastPrice = prices[prices.length - 1][1];

        setChartData({
          labels: prices.map((price: [number, number]) =>
            new Date(price[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Solana Price",
              data: prices.map((price: [number, number]) => price[1]),
              fill: false,
              backgroundColor: "#07C256",
              borderColor: "#07C256",
            },
          ],
        });
        setCurrentPrice(lastPrice);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [selectedRange]);

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: `Solana Price Chart (${selectedRange})`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
      }}
    >
      <div className="flex items-start  flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex items-center mb-5 gap-4 bg-[#F3F4F6] dark:bg-[#242424] w-max py-2 px-4 rounded-md ">
          {badge}
        </div>

        <div className="flex items-center gap-4 mb-5 py-1 bg-[#F3F4F6] dark:bg-[#242424] w-max  px-4 rounded-xl ">
          {Object.keys(timeRanges).map((range) => (
            <button
              key={range}
              className={cn(
                "w-max rounded-lg !border-none p-2 bg-transparent",

                {
                  " shadow-md bg-[#FCFCFC] text-[#252939] dark:!bg-[#1E1E1E] dark:text-white ":
                    selectedRange === range,
                },

                {
                  "!bg-[#FCFCFC] text-[#252939] ":
                    theme === "light" && selectedRange === range,
                },
                {
                  "!bg-[#1E1E1E] text-white ":
                    theme === "dark" && selectedRange === range,
                }
              )}
              onClick={() => setSelectedRange(range as TimeRange)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="text-2xl mb-3">
        <div className="flex items-center gap-2">
          <p className="font-bold text-2xl text-[#484856] ">
            ${currentPrice?.toFixed(2)}
          </p>

          <span className="font-bold text-[#FF6565] text-base">-2.5%</span>
        </div>
        <p className="text-sm text-[#484856] font-light letter-spacing-2">
          NOV, 28, 2023
        </p>
      </div>

      <Line data={chartData} options={options} />
    </div>
  );
};

export default SolanaChart;
