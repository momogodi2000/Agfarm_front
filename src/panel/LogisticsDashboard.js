import React from 'react';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const LogisticsDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Logistics Dashboard</h1>
      <p>Welcome, [Username]</p>
      <Logout />
    </div>
  );
};

export default LogisticsDashboard;
