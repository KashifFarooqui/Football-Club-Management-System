import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [registerType, setRegisterType] = useState('user');
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
      [name]: value // Dynamically update the field
    }));
  };

  const handleRegisterTypeChange = (e) => {
    setRegisterType(e.target.value);
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to the home page or wherever you need
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Correctly prevent default action

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
        <div className="register-type">
          <label>
            <input
              type="radio"
              value="coach"
              checked={registerType === 'coach'}
              onChange={handleRegisterTypeChange}
            />
            Coach Register
          </label>

          <label>
            <input
              type="radio"
              value="user"
              checked={registerType === 'user'}
              onChange={handleRegisterTypeChange}
            />
            User Register
          </label>

          <label>
            <input
              type="radio"
              value="player"
              checked={registerType === 'player'}
              onChange={handleRegisterTypeChange}
            />
            Player Register
          </label>
        </div>

        <form className="register-form" onSubmit={handleRegister}>
          {registerType === "coach" && (
            <div className="form-group">
              <label htmlFor="username">Coach ID:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter Your Coach ID"
                onChange={handleChange}
              />
            </div>
          )}

          {registerType === "player" && (
            <div className="form-group">
              <label htmlFor="username">Player ID:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter Your Player ID"
                onChange={handleChange}
              />
            </div>
          )}

          {registerType === "user" && (
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
          )}

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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password" // Changed to password type
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
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
