import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Mainbody";
import News from "./components/News";
import Schedule from "./components/Schedule";
import Shop from "./components/Shop";
import Interview from "./components/Interview";
import Watch from "./components/Watch";
import Mens from "./components/Mens";
import Values from "./components/Values";
import Women from "./components/Women";
import History from "./components/History";
import Sponsors from "./components/Sponsors";
import Honors from "./components/Honors";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Signup/Register";
import Ticket from "./components/Ticket";
// import Dashboard from "./Dashboard/Dashboard";
// import MyTickets from "./Dashboard/DashComponent/MyTickets";  // Corrected the typo
// import Cart from "./Dashboard/DashComponent/Cart";
// import Profile from './Dashboard/DashComponent/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/values" element={<Values />} />
          <Route path="/women" element={<Women />} />
          <Route path="/history" element={<History />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/honors" element={<Honors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ticket" element={<Ticket />} />
          {/* Nested routes for the dashboard */}
          {/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="cart" element={<Cart />} />
            <Route path="my-tickets" element={<MyTickets />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
