import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import './styles/BottomBar.css';

function BottomBar({ setSection }) {
  return (
    <div className="bottom-bar">
      <FontAwesomeIcon icon={faEllipsisH} className="bottom-bar-icon" onClick={() => setSection('more')} />
      <FontAwesomeIcon icon={faHome} className="bottom-bar-icon" onClick={() => setSection('home')} />
      <FontAwesomeIcon icon={faBell} className="bottom-bar-icon" onClick={() => setSection('notifications')} />
    </div>
  );
}

export default BottomBar;
