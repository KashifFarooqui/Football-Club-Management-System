import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Mainbody";
import News from "./Pages/News/News";
import Schedule from "./Pages/Schedule/Schedule";
import Shop from "./Pages/Shop/Shop";
import Interview from "./Pages/Interview/Interview";
import Watch from "./Pages/Watch/Watch";
import Mens from "./Pages/Team/Mens";
import Values from "./Pages/Values/Values";
import Women from "./Pages/Team/Women";
import History from "./Pages/History/History"
import Sponsors from "./Pages/Sponsor/Sponsors";
import Honors from "./Pages/Honors/Honors";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Signup/Register";
import Ticket from "./Pages/Ticket/Ticket";
import CoachLogin from "./Auth/CoacLogin/coachLogin";
import CoachRegister from "./Auth/CoacLogin/CoachRegister";
import Dashboard from "./Dashboard/Dashboard";
import CoachDashboard from "./Dashboard/CoachDashboard";
import ManagePlayers from "./Dashboard/CoachDashComponent/ManagePlayers";
import Profile from "./Dashboard/UserDashComponent/Profile";
import CartPage from "./Pages/Cart/CartPage";
import Sucess from "./Checkout/sucess";
import Cancel from "./Checkout/cancel";
import CheckoutButton from "./Checkout/CheckoutButton";


// const ProtectedRoute = ({ children, isLoggedIn}) => {
//   return isLoggedIn ? children : <Navigate to ='/login'/>
// }

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
      <CartProvider>
      <Header 
          isUserLoggedIn={isUserLoggedIn}
          isCoachLoggedIn={isCoachLoggedIn} 
          onUserLogout={handleUserLogout}
          onCoachLogout={handleCoachLogout} 
        />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/ticket" element={<Ticket />} />
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
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coachdashboard" element={isCoachLoggedIn ? <CoachDashboard /> : <Navigate to="/coachlogin" />} />
          <Route path="/profile" element={isUserLoggedIn ? <Profile /> : <Navigate to="/login" /> } />
          <Route path="/manageplayers" element={isCoachLoggedIn ? <ManagePlayers /> : <Navigate to ="/coachlogin" /> } />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/create-checkout-session" element={<CheckoutButton />} />
          //protectedRoutes
          {/* <Route path="/profile" element = {
            <ProtectedRoute isLoggedIn={isUserLoggedIn}>
            <Profile />
            </ProtectedRoute>
          } /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        </CartProvider>
      </div>
    </Router>
  );
}
export default App;