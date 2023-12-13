import React, { useState } from 'react';
import './crud.css';
import './index.css' 
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8070/login-user', {
      name: name,
      email: mail,
      password: password
    }).then(res => {
      console.log('Got the Response: ', res.data.status);
      if (res.data.status === "ok") {
        alert("Login successful");
        sessionStorage.setItem("name", name);
        navigate("/home");
      } else {
        alert("Invalid Details");
      }
    }).catch((e) => {
      console.log('Error occurred in viewUser.js', e);
      alert("Invalid Details");
    })
  }

  return (
    <div className='front'>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handlesubmit}>
          <h3>Login</h3>
          <div className="mb-3">
            <label>Name </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email Address </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password  </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <center>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </center>
          </div>
          <p className="forgot-password text-right">
            <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
