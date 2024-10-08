import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
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
    </footer>
  );
};

export default Footer;
