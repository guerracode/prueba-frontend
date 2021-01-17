import React from 'react';
import { AreaChart, Area } from 'recharts';

const ChartArea = ({ data }) => (
  <AreaChart
    className="areaChart"
    width={180}
    height={100}
    data={data}
    margin={{
      top: 5,
      right: 0,
      left: 0,
      bottom: 5,
    }}
  >
    <Area
      type="monotone"
      dataKey="percentage"
      stroke={data.color}
      fill={data.color}
    />
  </AreaChart>
);

export default ChartArea;
