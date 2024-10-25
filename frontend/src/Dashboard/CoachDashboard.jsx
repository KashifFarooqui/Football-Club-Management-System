import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Users, Target, Clipboard, Calendar, CreditCard } from 'lucide-react';
import './coachdashboard.css'; 
import ManagePlayers from './CoachDashComponent/ManagePlayers';
import Strategy from './CoachDashComponent/Stategy';
import Salary from './CoachDashComponent/Salary';
import Traning from './CoachDashComponent/Traning';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate()

  const handleItemClick = (itemName, action) => {
    if (activeItem !== itemName) {
      setActiveItem(itemName); 
      if (action) {
        action();
      }
    }
  };

  const handleManageClick =()=>{
    navigate("/manageplayers")
  }
  const handleScheduleClick =()=>{
    navigate("/schedule")
  }
  const handleStrategyClick=()=>{
    navigate("/strategy")
  }
  const handleSalaryClick=()=>{
    navigate("/salary")
  }
  const handleTraningClick=()=>{
    navigate("/traning")
  }
  
  const sidebarItems = [
    { name: 'Manage Players', icon: Users,action:handleManageClick },
    { name: 'Team Strategy', icon: Target,action:handleStrategyClick },
    { name: 'Training Plans', icon: Clipboard , action:handleTraningClick},
    { name: 'Schedule', icon: Calendar ,action:handleScheduleClick},
    { name: 'Salary', icon: CreditCard,action:handleSalaryClick },
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
        onClick={() => handleItemClick(item.name, item.action)}
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
          return <ManagePlayers />
      case 'Team Strategy':
        return <Strategy />
      case 'Training Plans':
        return <Traning />
      case 'Schedule':
        return <Schedule />
      case 'Salary':
        return <div><h1>Salary</h1><p>Salary content goes here.</p></div>;
      default:
        return <Salary />
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
