import React, {useState, useEffect} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Footer = () => {
  const[isCoachLoggedIn, setIsCoachLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('coachtoken')
    if(token){
      setIsCoachLoggedIn(true)
    } else {
      setIsCoachLoggedIn(false)
    }
  },[])

  
  return (
    <footer className="footer">
      <hr />
      {!isCoachLoggedIn ? (
      <>
      <div className="cont">
        <div className="row">
          <div className="col-md-3">
            <h3>Football</h3>
            <ul>
              <li><Link to="/mens">Men's Team</Link></li>
              <li><Link to="/women">Women's Team</Link></li>
              <li><Link to="/history">History</Link></li>
            </ul>
          </div>
        
          <div className="col-md-3">
            <h3>The Club</h3>
            <ul>
              <li><Link to="/interview">Interviews</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/values">Values</Link></li>
              <li><Link to="/honors">Honors</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
            <ul>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/schedule">Matches</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Follow Us</h3>
              <ul>
                <li><Link to="https://www.facebook.com/RealMadrid/">Facebook</Link></li>
                <li><Link to="https://x.com/realmadrid">Twitter</Link></li>
              <li><Link to="https://www.instagram.com/realmadrid/">Instagram</Link></li>
            </ul>
          </div>

        </div>
      </div>
      </>
      ):(
        <>
         <hr />
        <div className='coach-txt'>
          <h2>Thankyou For Joining Real Madrid</h2>
        </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
