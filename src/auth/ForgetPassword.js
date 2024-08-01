import React, { useState } from 'react';
import axios from '../js/axiosConfig';
import '../css/ForgetPassword.css';
import logo from '../images/logo/logo.jpeg';
import formImage from '../images/auth.jpeg';


const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/forget-password', { email })
      .then(() => {
        setMessage('Password reset link sent to your email.');
      })
      .catch(() => {
        setError('Failed to send password reset link. Please try again.');
      });
  };

  return (
    <div className="forget-password-container">
      <img src={logo} alt="App Logo" className="app-logo" />
      <form onSubmit={handleSubmit}>
        <img src={formImage} alt="Form Image" className="form-image" />
        <h2>Forget Password</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>}
        <button type="submit">Send Reset Link</button>
        <div className="links">
          <a href="/signin">Sign In</a> | <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
