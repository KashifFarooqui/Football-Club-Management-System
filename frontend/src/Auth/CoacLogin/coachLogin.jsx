import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./coachlogin.css";
import { Loader2 } from "lucide-react";

const coachLogin = () => {
  const [formData, setFormData] = useState({
    coachid: '',
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

  const handleRegister = async (e) => {
    e.preventDefault(); 
    const coachDetails = {
      coachid: formData.coachid,
      password: formData.password,
    };

    console.log(coachDetails);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/coach/login', coachDetails);

      if (response.data.success) {
        
        localStorage.setItem('coachtoken', response.data.token); 
        navigate('/coachdashboard');
        window.location.reload()
      }
    } catch (error) {
      console.error('Error Logging user:', error.response?.data?.message || error.message);
      alert('Error Logging coach. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Coach Login</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label >Coach Id:</label>
            <input
              type="text"
              id="coachid"
              name="coachid"
              required
              placeholder="Enter Your Coachid"
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
              New Coach? <Link to="/coachregister">Register</Link>
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

export default coachLogin;
