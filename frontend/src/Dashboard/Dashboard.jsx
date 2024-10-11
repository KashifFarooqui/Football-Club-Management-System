import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Menu, User, Ticket, ShoppingCart,ShoppingBasket,TrophyIcon, History,CalendarRange, Info, Heart } from "lucide-react";

import "./dashboard.css"

export default function Dashboard () {
  
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const toggleSidebar = () => setIsOpen(!isOpen);
  const username = localStorage.getItem('username')

  const handleHistoryClick = () => {
    navigate('/history')
  }
  const handleValuesClick = () => {
    navigate('/values')
  }
  const handleInfoClick = () => {
    navigate('/values')
  }
  const handleShopClick = () => {
    navigate('/shop')
  }
  const handleHonorClick = () => {
    navigate('/honors')
  }
  const handleScheduleClick = () => {
    navigate('/schedule')
  }
  const handleProfileClick = () => {
    navigate('/profile')
  }

  const menuItems = [
    { icon: User, label: "View Profile", action:handleProfileClick },
    { icon: Ticket, label: "My Tickets" },
    { icon: ShoppingBasket, label: "Cart"},
    { icon: ShoppingCart, label: "Shop", action:handleShopClick },
    { icon: CalendarRange, label: "Upcoming Matches", action:handleScheduleClick },
    { icon: TrophyIcon, label: "Trophies", action:handleHonorClick },
    { icon: History, label: "History", action:handleHistoryClick },
    { icon: Info, label: "Info", action:handleInfoClick},
    { icon: Heart, label: "Values", action:handleValuesClick }
  ];

 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleSidebar} className="menu-button">
        <Menu className="menu-icon"/>
        <span className="sr-only">Toggle menu</span>
      </button>
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <h2>Hello, {username ? username : "Guest"}</h2>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="menu-item"
              onClick={() => {
                if (item.action) {
                  item.action(); // Execute the action (e.g., for logout)
                }
              }}
            >
              <item.icon className="menu-icon" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};