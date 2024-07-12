import React from 'react';
import './WeatherCard.css';

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <h2>Current Weather</h2>
      <p>27°C</p>
      <p>Cloudy</p>
    </div>
  );
};

export default WeatherCard;
