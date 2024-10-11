import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Users, Target, Clipboard, Calendar, CreditCard, LogOut } from 'lucide-react';
import './coachdashboard.css'; 

const Sidebar = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate()

  // const handleLogout = () => {
  //   console.log("coach, dashboard");
  //   localStorage.removeItem('coachtoken');
  //   navigate("/"); 
  // };

  
  const sidebarItems = [
    { name: 'Manage Players', icon: Users },
    { name: 'Team Strategy', icon: Target },
    { name: 'Training Plans', icon: Clipboard },
    { name: 'Schedule', icon: Calendar },
    { name: 'Salary', icon: CreditCard },
    //{ name: 'Logout', icon: LogOut, action :handleLogout }, 
  ];

  return (
    <aside className="fa-sidebar">
      <div className="fa-sidebar-header">
        <h2>Coach Dashboard</h2>
      </div>
      <nav className="fa-sidebar-nav">
     {sidebarItems.map((item) => (
        <button
        key={item.name}
        className={`fa-sidebar-item ${activeItem === item.name ? 'active' : ''}`}
        onClick={() => {
            setActiveItem(item.name);
            if (item.action) {
            item.action(); // Trigger the action if it exists (for logout)
                }
            }}
        >
      <item.icon className="fa-sidebar-icon" />
      <span>{item.name}</span>
    </button>
  ))}
</nav>

    </aside>
  );
}

function MainContent({ activeItem }) {
  const renderContent = () => {
    switch (activeItem) {
      case 'Manage Players':
        return <div><h1>Manage Players</h1><p>Player management content goes here.</p></div>;
      case 'Team Strategy':
        return <div><h1>Team Strategy</h1><p>Strategy content goes here.</p></div>;
      case 'Training Plans':
        return <div><h1>Training Plans</h1><p>Training plans content goes here.</p></div>;
      case 'Schedule':
        return <div><h1>Schedule</h1><p>Schedule content goes here.</p></div>;
      case 'Salary':
        return <div><h1>Salary</h1><p>Salary content goes here.</p></div>;
      default:
        return <div><h1>Welcome to the Dashboard</h1><p>Select an option from the sidebar.</p></div>;
    }
  };

  return <main className="fa-main-content">{renderContent()}</main>;
}

const CoachDashboard = () => {
  const [activeItem, setActiveItem] = useState('Manage Players');

  return (
    <div className="fa-dashboard">
      <Sidebar className="fa-active" activeItem={activeItem} setActiveItem={setActiveItem} />
      <MainContent activeItem={activeItem} />
    </div>
  );
};

export default CoachDashboard;
