import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [loginType, setLoginType] = useState('user');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

  const handleCancel = () => {
    const from = location.state?.from || '/';
    navigate(from);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = { email: formData.email, password: formData.password }; // Send email and password
      if (loginType !== 'user') {
        userData.username = formData.username; // Add username if not a regular user
      }
      
      const response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      
      const data = await response.json();

      if (response.ok) {
        console.log("User Logged In Successfully");
        alert(`User: ${formData.username} Logged In Successfully`);
        navigate('/news'); // Redirect after successful login
      } else {
        console.log('Login failed:', data.message);
        setErrorMessage(data.message); // Display error message
      }
    } catch (error) {
      console.error('Logging failed:', error);
      setErrorMessage(error.message); // Display error message
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        <div className="login-type">
          <label>
            <input
              type="radio"
              value="coach"
              checked={loginType === 'coach'}
              onChange={handleLoginTypeChange}
            />
            Coach Login
          </label>

          <label>
            <input
              type="radio"
              value="user"
              checked={loginType === 'user'}
              onChange={handleLoginTypeChange}
            />
            User Login
          </label>

          <label>
            <input
              type="radio"
              value="player"
              checked={loginType === 'player'}
              onChange={handleLoginTypeChange}
            />
            Player Login
          </label>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          {loginType === "coach" && (
            <div className="form-group">
              <label htmlFor="username">Coach ID:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                required 
                placeholder='Enter Your Coach ID' 
                onChange={handleChange} 
              />
            </div>
          )}
          {loginType === "player" && (
            <div className="form-group">
              <label htmlFor="username">Player ID:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                required 
                placeholder='Enter Your Player ID' 
                onChange={handleChange} 
              />
            </div>
          )}
          {loginType === "user" && (
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                required 
                placeholder='Enter Your Username' 
                onChange={handleChange} 
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder='Enter Your Email' 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" // Change to "password"
              id="password" 
              name="password" 
              required 
              placeholder='Enter Your Password' 
              onChange={handleChange} 
            />
          </div>
          <div className="signup-message">
            <p>
              Didn’t have an account?
              <Link to="/register"> Sign Up</Link>
            </p>
          </div>
          <div className="form-actions">
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
