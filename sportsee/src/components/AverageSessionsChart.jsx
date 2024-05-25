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

  const handleMouseMove = (state) => {
    if (state.isTooltipActive) {
      setActiveIndex(state.activeTooltipIndex);
    } else {
      setActiveIndex(null);
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
        onMouseLeave={() => setActiveIndex(null)}
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
          tick={{ dy: 25, fontSize: 14 }} // Ajuster le positionnement et la taille de la police
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
            x={(activeIndex / (sessions.length - 1)) * 100 + "%"}
            y="0"
            width={(1 - activeIndex / (sessions.length - 1)) * 100 + "%"}
            height="100%"
            fill="rgba(0, 0, 0, 0.1)"
            style={{ pointerEvents: "none" }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionsChart;
