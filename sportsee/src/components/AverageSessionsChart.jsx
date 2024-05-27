import React, { useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

const AverageSessionsChart = ({ sessions }) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const [activeIndex, setActiveIndex] = useState(null);
  const [xPosition, setXPosition] = useState(0);

  const handleMouseMove = (state) => {
    if (state.isTooltipActive) {
      setActiveIndex(state.activeTooltipIndex);
      const activeDotElement = document.querySelector(
        `.recharts-active-dot circle`
      );
      if (activeDotElement) {
        setXPosition(activeDotElement.getAttribute("cx"));
      }
    } else {
      setActiveIndex(null);
      setXPosition(0);
    }
  };

  const formattedSessions = sessions.map((session) => ({
    day: days[session.day - 1],
    sessionLength: session.sessionLength,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <p className="text-session">Durée moyenne des sessions</p>
      <LineChart
        data={formattedSessions}
        margin={{ top: 90, right: 20, bottom: 35, left: 20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setActiveIndex(null);
          setXPosition(0);
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          tickLine={false}
          axisLine={false}
          tick={{ dy: 25, fontSize: 14 }}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#colorGradient)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 4,
            fill: "#FFF",
            strokeWidth: 8,
            stroke: "rgba(255, 255, 255, 0.2)",
          }}
        />
        {activeIndex !== null && (
          <rect
            x={activeIndex === 0 ? 0 : xPosition}
            y="0"
            width={activeIndex === 0 ? "100%" : `calc(100% - ${xPosition}px)`}
            height="100%"
            fill="rgba(0, 0, 0, 0.4)"
            style={{ pointerEvents: "none" }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionsChart;
