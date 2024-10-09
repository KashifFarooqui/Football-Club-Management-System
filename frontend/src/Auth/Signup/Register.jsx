import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [registerType, setRegisterType] = useState("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
    if (name === "email") setEmail(value);
  };

  const handleRegisterTypeChange = (e) => {
    setRegisterType(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const registrationData = {
      username,
      email,
      password,
      registerType,
    };

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        registrationData,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        console.log("Registering with data: ", registrationData);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  const handleCancel = () => {
    navigate("/");
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
              checked={registerType === "coach"}
              onChange={handleRegisterTypeChange}
            />
            Coach Register
          </label>
          <label>
            <input
              type="radio"
              value="user"
              checked={registerType === "user"}
              onChange={handleRegisterTypeChange}
            />
            User Register
          </label>
          <label>
            <input
              type="radio"
              value="player"
              checked={registerType === "player"}
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
              type="password"
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
