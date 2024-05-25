import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const PerformanceChart = ({ performanceData }) => {
  return (
      <ResponsiveContainer width="100%" height={180}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF' }}/>
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
  );
};

export default PerformanceChart;
