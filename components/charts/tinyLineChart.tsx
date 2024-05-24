import * as React from "react";
import {ChartContainer} from "@mui/x-charts/ChartContainer";
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 9800, 3908, 4800];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
];

export default function TinyLineChart() {
  return (
    <ChartContainer
      width={400}
      height={300} 
      className="w-full h-full"
      series={[{type: "line", data: pData}]}
      xAxis={[{scaleType: "point", data: xLabels}]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: "#8884d8",
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: "#8884d8",
          scale: "0.6",
          fill: "#fff",
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
  );
}
