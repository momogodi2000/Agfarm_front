import React from 'react';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const FinancialDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Financial Dashboard</h1>
      <p>Welcome, [Username]</p>
      <Logout />
    </div>
  );
};

export default FinancialDashboard;
