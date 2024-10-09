import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';

// Placeholder components for the different pages
const Tickets = () => <h2>Tickets Page</h2>;
const Cart = () => <h2>Cart Page</h2>;
const UserDetails = () => <h2>User Details Page</h2>;

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<h2>Welcome to the Football Management System</h2>} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user-details" element={<UserDetails />} />
          </Routes>
          <Outlet />
        </main>
      </div>
    </Router>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/tickets">Tickets</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/user-details">User Details</Link></li>
          <li><button onClick={() => console.log('Logout clicked')}>Logout</button></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Dashboard;

const styles = `
  .dashboard {
    display: flex;
    height: 100vh;
  }

  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    margin-bottom: 10px;
  }

  .sidebar a {
    text-decoration: none;
    color: #333;
  }

  .sidebar button {
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
  }

  .main-content {
    flex-grow: 1;
    padding: 20px;
  }
`;

// Inject the CSS into the document
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);