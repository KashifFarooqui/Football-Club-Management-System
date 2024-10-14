import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value 
    }));
  };

  const handleCancel = () => {
    navigate('/'); 
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 
    const userDetails = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    console.log(userDetails);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/users/login', userDetails);

      if (response.data.success) {
        localStorage.setItem('usertoken', response.data.token);
        localStorage.setItem('username', userDetails.username);
        localStorage.setItem('useremail', userDetails.email);
        localStorage.setItem('useraddress', userDetails.address);
        navigate('/');
        window.location.reload()
        console.log(userDetails);
  
        
      }
    } catch (error) {
      console.error('Error Logging user:', error.response?.data?.message || error.message);
      alert('Error Logging user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // New functionality for "Login as Coach"
  const handleCoachLogin = () => {
    navigate('/coachlogin');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form className="register-form" onSubmit={handleLogin}>
        <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter Your Name"
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
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
          </div>

          <div className="signup-message">
            <p>
              Don't have an account? <Link to="/register">Create one...</Link>
            </p>
          </div>

          <div className="form-actions">
            <button type="submit" className="register-button">
              {loading ? (
                <span>
                  <Loader2 className=" text-2xl flex item-center gap-1 animate-spin" /> "Please wait"
                </span>
              ) : (
                "Login"
              )}
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

        <div className="coach-login" onClick={handleCoachLogin}>
          <a href="#">Login as Coach</a>
        </div>

      </div>
    </div>
  );
};

export default Login;
