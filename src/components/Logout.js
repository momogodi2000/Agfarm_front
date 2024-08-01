import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (localStorage, cookies, etc.)
    navigate('/signin');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
