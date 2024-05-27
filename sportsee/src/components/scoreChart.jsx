import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ScoreChart = ({ score }) => {
  const data = [
    { name: "score", value: score },
    { name: "rest", value: 1 - score },
  ];

  return (
    <div className="score-chart">
      <h3 className="score-title">Score</h3>
      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="70%"
            outerRadius="80%"
            startAngle={90}
            endAngle={450}
            paddingAngle={5}
            cornerRadius={50}
          >
            {" "}
            {/* correspond a la jauge */}
            <Cell key="score" fill="#FF0000" />
            <Cell key="rest" fill="transparent" stroke="transparent" />
          </Pie>
          <circle cx="50%" cy="50%" r="33%" fill="#FFF" />{" "}
          {/* Cercle blanc au centre */}
        </PieChart>
      </ResponsiveContainer>
      <div className="score-info">
        <p className="score-value">{`${(score * 100).toFixed(0)}%`}</p>
        <p className="score-text">de votre objectif</p>
      </div>
    </div>
  );
};

export default ScoreChart;
