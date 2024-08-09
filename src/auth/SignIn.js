import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../js/axiosConfig";
import "../css/SignIn.css";
import logo from "../images/logo/logo.jpeg";
import formImage from "../images/auth.jpeg";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    axios
      .post("/api/signin/", { username, password })
      .then((response) => {
        const role = response.data.role?.toLowerCase();
        console.log(role);
        console.log("login successfully");
        if (role === "farmer") navigate("/farmer-dashboard");
        else if (role === "buyer") navigate("/buyer-dashboard");
        else if (role === "administrator") navigate("/admin-dashboard");
        else if (role === "Financial Institutions")navigate("/financial-dashboard");
        else if (role === "government") navigate("/government-dashboard");
        else if (role === "Logistics Provider") navigate("/logistics-dashboard");
      })
      .catch(() => {
        setError("Invalid credentials. Please try again.");
      });
  };

  return (
    <div className="signin-container">
      <img src={logo} alt="App Logo" className="app-logo" />
      <form onSubmit={handleSubmit}>
        <img src={formImage} alt="Form Image" className="form-image" />
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign In</button>
        <div className="links">
          <a href="/signup">Sign Up</a> |{" "}
          <a href="/forget-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
