/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const ChartPie = ({ data }) => (
  <PieChart className="pieChart" width={200} height={200}>
    <Pie
      data={data}
      dataKey="percentage"
      innerRadius={90}
      outerRadius={100}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
  </PieChart>
);

export default ChartPie;
