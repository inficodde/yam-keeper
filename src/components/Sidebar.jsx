import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import './styles/Sidebar.css';

function Sidebar({ setSection }) {
  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={faEllipsisH} className="sidebar-icon" onClick={() => setSection('more')} />
      <FontAwesomeIcon icon={faHome} className="sidebar-icon" onClick={() => setSection('home')} />
      <FontAwesomeIcon icon={faBell} className="sidebar-icon" onClick={() => setSection('notifications')} />
    </div>
  );
}

export default Sidebar;
