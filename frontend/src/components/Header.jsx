import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="menu-icon" id="menu-icon">
        <span className="animate" style={{ "--i": 2 }}>
          <i className="fa fa-bars"></i>
        </span>
      </div>
      <div className="container">
        <div className="logo">
          <img src="/images/RM.png" alt="Chelsea FC" />
        </div>
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
          <a href="/login" className="login">LOGIN </a>
          <a href="/register" className="register">REGISTER</a>
        </div>
     </div>
     <hr />
    </header>
 );
};

export default Header;
