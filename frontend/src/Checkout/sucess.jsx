import React, { useEffect, useContext } from "react";
import CartContext from "../context/cartContext";

const Success = () => {
  
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    
    clearCart();
  }, [clearCart]); 

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Payment Successful</h1>
      <p>THANK YOU for your purchase</p>
      <a href="/">HOME</a>
    </div>
  );
};

export default Success;
