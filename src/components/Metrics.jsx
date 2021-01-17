import React from 'react';

import ChartArea from './ChartArea';
import ChartPie from './ChartPie';
import '../styles/components/Metrics.css';

const Metrics = ({ data }) => (
  <div className="chartPie-container">
    <div className="charts-container">
      <div className="charts-texts">
        <h3>{data.type}</h3>
        <p>{data.total}</p>
      </div>
      <ChartArea data={data.data} />
      <ChartPie data={data.data} />
    </div>
    <div className="texts-container">
      <div className="texts-tablet">
        <h3 style={{ color: `${data.data[0].color}` }}>
          {data.data[0].platform}
        </h3>
        <div className="texts-numbers">
          <p className="percentage">{`${data.data[0].percentage}%`}</p>
          <p className="number">{data.data[0].number}</p>
        </div>
      </div>
      <div className="texts-smartphone">
        <h3 style={{ color: `${data.data[1].color}` }}>
          {data.data[1].platform}
        </h3>
        <div className="texts-numbers">
          <p className="percentage">{`${data.data[1].percentage}%`}</p>
          <p className="number">{data.data[1].number}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Metrics;
