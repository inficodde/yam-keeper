import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './styles/OverviewChart.css';

const OverviewChart = () => {
  const [chartType, setChartType] = useState('temperature');
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const renderChart = () => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: chartType === 'temperature' ? 'Temperature (°C)' : 'Humidity (%)',
            data: chartType === 'temperature' ? [22, 21, 23, 24, 25, 24, 23] : [60, 62, 61, 63, 65, 64, 66],
            borderColor: chartType === 'temperature' ? '#FF6384' : '#36A2EB',
            backgroundColor: chartType === 'temperature' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Days of the Week',
              color: '#ffffff',
            },
            ticks: {
              color: '#ffffff',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: chartType === 'temperature' ? 'Temperature (°C)' : 'Humidity (%)',
              color: '#ffffff',
            },
            ticks: {
              color: '#ffffff',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: '#ffffff',
            },
          },
        },
      },
    });
  };

  useEffect(() => {
    renderChart();
  }, [chartType]);

  return (
    <div className="overview-chart">
      <div className="chart-switch">
        <button
          className={`switch-button ${chartType === 'temperature' ? 'active' : ''}`}
          onClick={() => setChartType('temperature')}
        >
          Temperature
        </button>
        <button
          className={`switch-button ${chartType === 'humidity' ? 'active' : ''}`}
          onClick={() => setChartType('humidity')}
        >
          Humidity
        </button>
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default OverviewChart;
