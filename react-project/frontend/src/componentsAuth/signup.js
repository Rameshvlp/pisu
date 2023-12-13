import React, { useState } from 'react';
import './crud.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      alert("Password should contain at least 8 characters including one uppercase, one lowercase, one special character, and one number");
      return;
    }

    Axios.post('http://localhost:8070/addUser', {
      name: name,
      email: email,
      password: password
    }).then(res => {
      console.log('Got the Response : ', res.data);
      alert("Registration Successful");
      navigate("/");
    }).catch((e) => {
      console.log('Error occurred in insert.js', e);
      alert("Something went wrong");
    });
  };

  return (
    <div className='front'>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handlesubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br /><br />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Enter your E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="mb-3">
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br /><br />
          <div className="d-grid">
            <center>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </center>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
