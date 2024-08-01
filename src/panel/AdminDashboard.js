import React from 'react';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, [Username]</p>
      <Logout />
    </div>
  );
};

export default AdminDashboard;
