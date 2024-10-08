import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to the home page
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const userDetails = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    try {
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails)
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully");
        navigate('/login');
      } else {
        console.log('Error registering user:', data.message);
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
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
            <label htmlFor="password">Create a Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder='Create a Strong Password'
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password" 
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder='Confirm Password'
              onChange={handleChange}
            />
          </div>
          <div className="signup-message">
            <p>
              Already a member? <Link to="/login">Sign In</Link>
            </p>
          </div>
          <div className="form-actions">
            <button type="submit" className="register-button">Register</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
