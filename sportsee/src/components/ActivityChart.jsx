import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kcal`}</p>
      </div>
    );
  }
  return null;
};

const ActivityChart = ({ sessions }) => {
  const formattedSessions = sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <p className="title-activity">Activité quotidienne</p>
      <BarChart
        data={formattedSessions}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <XAxis dataKey="day" tickLine={false} />
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          ticks={[25, 50, 75, 100]}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          yAxisId="calories"
          orientation="left"
          axisLine={false}
          tick={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          formatter={(value, entry, index) => {
            if (value === "kilogram") return "Poids (kg)";
            if (value === "calories") return "Calories brûlées (kCal)";
            return value;
          }}
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={7}
          wrapperStyle={{ top: 0, right: 20, fontSize: 14 }}
        />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282D30"
          barSize={9}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          barSize={9}
          radius={[10, 10, 0, 0]}
        />
        <ReferenceLine
          y={25}
          stroke="rgba(0, 0, 0, 0.1)"
          strokeDasharray="3 3"
          yAxisId="kilogram"
        />
        <ReferenceLine
          y={50}
          stroke="rgba(0, 0, 0, 0.1)"
          strokeDasharray="3 3"
          yAxisId="kilogram"
        />
        <ReferenceLine
          y={75}
          stroke="rgba(0, 0, 0, 0.1)"
          strokeDasharray="3 3"
          yAxisId="kilogram"
        />
        <ReferenceLine
          y={100}
          stroke="rgba(0, 0, 0, 0.1)"
          strokeDasharray="3 3"
          yAxisId="kilogram"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
