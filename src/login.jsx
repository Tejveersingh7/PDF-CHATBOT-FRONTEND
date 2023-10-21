import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {


      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/dashboard/*')
      } else {
        alert('ENTER THE VALID CREDENTIALS')
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }





  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="box">
      <h1 style={{marginBottom:'50px'}}>Login </h1>

      <form onSubmit={handleSubmit} >
        <label>
          <p>Username:</p>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </label>
        <label style={{display:'block', width:'100%'}}>
          <p>Password:</p>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
