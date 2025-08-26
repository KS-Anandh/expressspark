import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const EmployeeLogin = () => {
  const [userId, setUserId] = useState();
  const [userPassword, setUserPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9800/user/login", {
        userId: userId,
        userPassword: userPassword,    
      });
      if (response.data && response.data.user) {
        localStorage.setItem("userId", response.data.user._id);
        alert("Login successful!");
        navigate("/EmployeeAttendance");
      } else {
        alert("Invalid login response");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/EmployeeAttendance");
    }
  }, []);
  return (
    <div className="EmployeeLogin">
      <div className="login-card">
        <h2>Employee Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Employee ID"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default EmployeeLogin;
