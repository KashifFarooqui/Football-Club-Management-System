import React, { useState, useEffect, useRef } from "react";
import { Menu, User, Ticket, ShoppingCart, LogOut, History, Info, Heart } from "lucide-react";

import "./dashboard.css"

export default function Dashboard () {
  
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const username = localStorage.getItem('username')

  

  const menuItems = [
    { icon: User, label: "View Profile" },
    { icon: Ticket, label: "My Tickets" },
    { icon: ShoppingCart, label: "Cart" },
    { icon: History, label: "History" },
    { icon: Info, label: "Info" },
    { icon: Heart, label: "Values" }
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