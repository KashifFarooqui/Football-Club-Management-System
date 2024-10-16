import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Dashboard from  "../Dashboard/Dashboard"

import './Header.css';

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const[isCoachLoggedIn, setIsCoachLoggedIn] = useState(false) // Track login status
  const navigate = useNavigate();



  useEffect(() => {
    const token = localStorage.getItem('usertoken');
    setIsUserLoggedIn(!!token);  // Update state based on token presence
  
    const ctoken = localStorage.getItem('coachtoken');
    setIsCoachLoggedIn(!!ctoken);  // Update state based on coach token presence
  }, []);

 

  const handleUserLogout = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem('usertoken'); // clear any auth token
    navigate('/'); 
    window.location.reload()
    
  };

  const handleCoachLogout = () => {
    setIsCoachLoggedIn(false)
     console.log("coach, dashboard");
     localStorage.removeItem('coachtoken');
     navigate("/");
     window.location.reload() 
     };
  
  const handleGoBack =()=>{
    navigate(-1)
  }

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/images/RM.png" alt="Logo" />
        </div>

        {!isCoachLoggedIn ? (

        <>
        <nav className="navbar" id="navbar">
          <ul>
            <li><Link to="/" className="active">HOME</Link></li>
            <li><Link to="/news">NEWS</Link></li>
            <li><Link to="/honors">TROPHIES</Link></li>
            <li><Link to="/watch">WATCH</Link></li>
            <li><Link to="/mens">MEN'S TEAM</Link></li>
            <li><Link to="/women">WOMEN'S TEAM</Link></li>
            <li><Link to="/schedule">SCHEDULE</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
          </ul>
        </nav>

        <div className="actions">
          {!isUserLoggedIn ? (
            <>
              <Link to="/login" className="login">LOGIN</Link>
              <Link to="/register" className="register">REGISTER</Link>
            </>
          ) : (
            <>
              <Dashboard />
              <button onClick={handleUserLogout} className="logout-button">Logout</button>
            </>
          )}
          </div>

          </>
          ):(
            <>
            <div className="coach-text">
            <h2>Welocme To Real Madrid</h2>
            <div className='butns'>
             
                  <button onClick={handleCoachLogout} className="logout-button">Logout</button>
                  <div className="go-back-button" onClick={handleGoBack}>
                    <ArrowLeft
                      variant="outline"
                      color="black"
                      style={{ fontSize: "24px", marginRight: "10px" }}
                    />
                    <span>Go Back</span>
                  </div>
                </div>
              </div>
            </>
          )}
        
      </div>
      <hr />
    </header>
  );
};

export default Header;
