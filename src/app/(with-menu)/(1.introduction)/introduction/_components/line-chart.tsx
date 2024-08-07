"use client";

import React from "react";
import { Line } from "@nivo/line";
import { Ads, Apple, InterestGoogle, MacaronGoogle, Total } from "./data";
import useGetHTMLDivSize from "@/hooks/useGetHTMLDivSize";
import { cn } from "@/lib/utils";

interface LineChardProps {
  className?: string;
}

const LineChart = ({ className }: LineChardProps) => {
  const { size, ref } = useGetHTMLDivSize();
  const data = [
    {
      id: "합계",
      data: Total,
    },
    {
      id: "광고수익",
      data: Ads,
    },
    {
      id: "마카롱(애플)",
      data: Apple,
    },
    {
      id: "마카롱(구글)",
      data: MacaronGoogle,
    },
    {
      id: "관심있어요(구글)",
      data: InterestGoogle,
    },
  ];
  return (
    <div ref={ref} className={cn("w-full h-72 md:h-96", className)}>
      <Line
        width={size.width}
        height={size.height}
        curve="monotoneX"
        data={data}
        enablePointLabel={true}
        pointSize={8}
        pointLabelYOffset={-10}
        pointBorderWidth={1}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        margin={{ top: 20, right: 20, bottom: 80, left: 30 }}
        colors={["#eb3b5a", "#1abc9c80", "#3498db80", "#eb3b5a80", "#f7b73180"]}
        axisLeft={null}
        yFormat=">-.3s"
        axisBottom={{
          tickSize: 0,
          tickPadding: 15,
          tickRotation: 0,
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 30,
            translateY: 0,
            itemsSpacing: 30,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: -110,
            itemOpacity: 1,
            symbolSize: 14,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
