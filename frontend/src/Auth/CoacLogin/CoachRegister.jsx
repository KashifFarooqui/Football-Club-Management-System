import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const CoachRegister = () => {
  const [formData, setFormData] = useState({
    coachname:'',
    coachid: '',
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
    e.preventDefault(); 

    const coachDetails = {
    coachname:formData.coachname,
      coachid: formData.coachid,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/coach/register', coachDetails);

      if (response.status === 201) {
        alert("Coach registered successfully");
        navigate('/');
      }
    } catch (error) {
      console.error('Error registering coach:', error.response?.data?.message || error.message);
      alert('Error registering coach. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Coach Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group">
            <label htmlFor="coachname">Coachname:</label>
            <input
              type="text"
              id="coachname"
              name="coachname"
              required
              placeholder="Enter Your Name:"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coachid">CoachID:</label>
            <input
              type="text"
              id="coachid"
              name="coachid"
              required
              placeholder="Enter Your CoachID:"
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
              Already registered? <Link to="/coachlogin">Log In</Link>
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

export default CoachRegister;
