import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
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
    e.preventDefault(); // Prevent default action

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userDetails = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/users/register', userDetails);

      if (response.status === 201) {
        alert("User registered successfully");
        navigate('/login');
      }
    } catch (error) {
      console.error('Error registering user:', error.response?.data?.message || error.message);
      alert('Error registering user. Please try again.');
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
              placeholder="Enter Your Username"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Your Email"
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
              placeholder="Create a Strong Password"
              onChange={handleChange}
            />
          </div>

          <div className="signup-message">
            <p>
              Already a member? <Link to="/login">Sign In</Link>
            </p>
          </div>

          <div className="form-actions">
            <button type="submit" className="register-button">
              Register
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
