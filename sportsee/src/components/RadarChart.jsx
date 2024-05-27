import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ performanceData }) => {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <RadarChart
        cx="49%"
        cy="50%"
        outerRadius="80%"
        data={performanceData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fill: "#FFFFFF" }} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
