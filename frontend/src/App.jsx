import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
import CoachLogin from "./Auth/CoacLogin/coachLogin";
import CoachRegister from "./Auth/CoacLogin/CoachRegister";
import Dashboard from "./Dashboard/Dashboard";
import CoachDashboard from "./Dashboard/CoachDashboard";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isCoachLoggedIn, setIsCoachLoggedIn] = useState(false);


  useEffect(() => {
    const userToken = localStorage.getItem("usertoken");
    const coachToken = localStorage.getItem("coachtoken");
    console.log("User Token:", userToken);  
    console.log("Coach Token:", coachToken); 

    if (userToken) {
      setIsUserLoggedIn(true);
    }

    if (coachToken) {
      setIsCoachLoggedIn(true);
      }
    }, []);
  
  const handleUserLogout = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem('usertoken'); 
  };
  const handleCoachLogout = () => {
    setIsCoachLoggedIn(false);
    localStorage.removeItem('coachtoken'); 
  };
  return (
    <Router>
      <div className="App">
      <Header 
          
          isCoachLoggedIn={isCoachLoggedIn} 
          onUserLogout={handleUserLogout}
          onCoachLogout={handleCoachLogout} 
        />
        <Routes>
          {/* Public Routes */}
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
          <Route path="/login" element={isUserLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/coachlogin" element={isCoachLoggedIn ? <Navigate to="/coachdashboard" /> : <CoachLogin />} />
          <Route path="/coachregister" element={<CoachRegister />} />
          <Route path="/register" element= { <Register />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coachdashboard" element={<CoachDashboard />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;