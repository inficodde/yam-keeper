import React from 'react';
import './App.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import PastDays from './components/PastDays';
import Storage from './components/Storage';
import OverviewChart from './components/OverviewChart';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="left-column">
          <WeatherCard />
          <Temperature />
          <Humidity />
        </div>
        <div className="right-column">
          <PastDays />
          <Storage />
        </div>
      </div>
      <div className="bottom-row">
        <OverviewChart />
      </div>
    </div>
  );
}

export default App;
