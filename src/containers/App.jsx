import React from 'react';
import Metrics from '../components/Metrics';
import Data from '../models/data';

import '../styles/containers/App.css';

const App = () => (
  <main className="chartsContainer">
    {Data.map((value) => (
      <Metrics data={value} key={value.type} />
    ))}
  </main>
);

export default App;
