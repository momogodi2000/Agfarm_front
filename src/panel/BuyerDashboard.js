import React from 'react';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const BuyerDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Buyer Dashboard</h1>
      <p>Welcome, [Username]</p>
      <Logout />
    </div>
  );
};

export default BuyerDashboard;
