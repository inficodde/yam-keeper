import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import PastDays from './components/PastDays';
import Storage from './components/Storage';
import OverviewChart from './components/OverviewChart';
import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';

function App() {
  const [section, setSection] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderSection = () => {
    switch (section) {
      case 'home':
        return (
          <>
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
          </>
        );
      case 'more':
        return <div>More section content</div>;
      case 'notifications':
        return <div>Notifications section content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className={`content ${isMobile ? 'mobile' : 'desktop'}`}>
        {renderSection()}
      </div>
      {!isMobile && <Sidebar setSection={setSection} />}
      {isMobile && <BottomBar setSection={setSection} />}
    </div>
  );
}

export default App;
