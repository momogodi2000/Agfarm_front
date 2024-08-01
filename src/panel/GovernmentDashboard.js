import React from 'react';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const GovernmentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Government Dashboard</h1>
      <p>Welcome, [Username]</p>
      <Logout />
    </div>
  );
};

export default GovernmentDashboard;
