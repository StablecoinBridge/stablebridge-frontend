import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CurrencyIcon from "@/components/analytics/CurrencyIcon";

// Define the data structure for chart data
interface ChartData {
  date: string;
  EURA: number;
  USDA: number;
}

// Data filter types
type TimeFilter = "1D" | "1W" | "1M" | "6M" | "YTD" | "ALL";

// Chart coin filter types
type CoinFilter = "ALL" | "EURA" | "USDA";

interface StablecoinChartProps {
  data: ChartData[];
}

// Generate better mock data that looks more like the reference image
const generateBetterMockData = () => {
  const data = [];
  const months = [
    "Nov 2024",
    "Dec 2024",
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
  ];

  // Starting values that match the reference image Y-axis
  const euraValue = 18.28;
  const usdaValue = 27.42;

  // Add initial point
  data.push({
    date: months[0],
    EURA: euraValue,
    USDA: usdaValue,
  });

  // General trend with small fluctuations
  const euraPoints = [19.1, 20.5, 19.8, 20.3, 21.2];
  const usdaPoints = [28.9, 27.3, 26.5, 27.8, 29.1];

  for (let i = 0; i < 5; i++) {
    data.push({
      date: months[i + 1],
      EURA: euraPoints[i],
      USDA: usdaPoints[i],
    });
  }

  return data;
};

const StablecoinChart: React.FC<StablecoinChartProps> = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("6M");
  const [coinFilter, setCoinFilter] = useState<CoinFilter>("ALL");

  // Use our enhanced mock data
  const data = generateBetterMockData();

  // Y-axis value formatter
  const formatYAxis = (value: number) => {
    return `${value.toFixed(2)}m€`;
  };

  return (
    <div className="bg-purple-100 rounded-lg p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2">
          <button
            className={`px-3 py-1.5 rounded-full text-sm ${
              coinFilter === "ALL"
                ? "bg-purple-700 text-white"
                : "bg-purple-800 text-gray-400"
            }`}
            onClick={() => setCoinFilter("ALL")}
          >
            All
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 ${
              coinFilter === "EURA"
                ? "bg-purple-700 text-white"
                : "bg-purple-800 text-gray-400"
            }`}
            onClick={() => setCoinFilter("EURA")}
          >
            <CurrencyIcon currency="EURA" size="sm" />
            EURA
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 ${
              coinFilter === "USDA"
                ? "bg-purple-700 text-white"
                : "bg-purple-800 text-gray-400"
            }`}
            onClick={() => setCoinFilter("USDA")}
          >
            <CurrencyIcon currency="USDA" size="sm" />
            USDA
          </button>
        </div>
        <div className="flex gap-2">
          {(["1D", "1W", "1M", "6M", "YTD", "ALL"] as TimeFilter[]).map(
            (filter) => (
              <button
                key={filter}
                className={`px-4 py-1.5 rounded-full text-sm ${
                  timeFilter === filter
                    ? "bg-purple-700 text-white"
                    : "bg-purple-800 text-gray-400 hover:bg-purple-700 hover:text-gray-200"
                }`}
                onClick={() => setTimeFilter(filter)}
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      <div className="h-[300px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 5, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorEURA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B3A394" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#B3A394" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorUSDA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F87171" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F87171" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717A", fontSize: 12 }}
            />
            <YAxis
              orientation="left"
              domain={[0, 36.56]}
              ticks={[0, 9.14, 18.28, 27.42, 36.56]}
              tickFormatter={formatYAxis}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717A", fontSize: 12 }}
            />
            {/* Remove CartesianGrid for a cleaner look like in the reference image */}
            {coinFilter === "ALL" || coinFilter === "EURA" ? (
              <Area
                type="monotone"
                dataKey="EURA"
                stroke="#B3A394"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorEURA)"
              />
            ) : null}
            {coinFilter === "ALL" || coinFilter === "USDA" ? (
              <Area
                type="monotone"
                dataKey="USDA"
                stroke="#F87171"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorUSDA)"
              />
            ) : null}
            <Tooltip
              contentStyle={{
                backgroundColor: "#6e11b0",
                borderColor: "#4A5568",
                borderRadius: "0.375rem",
                color: "white",
              }}
              labelStyle={{ color: "white" }}
              formatter={(value: number) => [`${value.toFixed(2)}m€`, ""]}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Legend at bottom */}
      <div className="flex justify-center gap-6 mb-4">
        {coinFilter === "ALL" || coinFilter === "EURA" ? (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#B3A394]"></div>
            <span className="text-gray-300 text-sm">EURA</span>
          </div>
        ) : null}
        {coinFilter === "ALL" || coinFilter === "USDA" ? (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#F87171]"></div>
            <span className="text-gray-300 text-sm">USDA</span>
          </div>
        ) : null}
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-white">
          Stablecoin Market Cap
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Value of circulating Angle stablecoins over time.
        </p>
      </div>
    </div>
  );
};

export default StablecoinChart;
