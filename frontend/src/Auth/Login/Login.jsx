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
  const [loading, setLoading] = useState(false)
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

  const handleRegister = async (e) => {
    e.preventDefault(); 
    const userDetails = {
      email: formData.email,
      password: formData.password,
    };

    console.log(userDetails);
    

    try {
      setLoading(true)
      const response = await axios.post('http://localhost:8000/api/users/login',
        userDetails);

      if (response.data.success) {
        alert("User Logged in successfully");
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error Logging user:', error.response?.data?.message || error.message);
      alert('Error Logginig user. Please try again.');
    } finally {
      setLoading(false)
    } 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form className="register-form" onSubmit={handleRegister}>
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
              Don't have an account ?<Link to="/login">create one...</Link>
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
      </div>
    </div>
  );
};

export default Login;
