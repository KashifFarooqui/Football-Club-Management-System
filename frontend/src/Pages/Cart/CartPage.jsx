import React, { useContext } from "react";
import CartContext from "../../context/cartContext";
import { ShoppingCart } from "lucide-react";
import "./cartpage.css";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="shopping-cart">
        
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item, index) => (
              <div className="cart-item" key={item._id || index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: {item.price} €</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total Price: {getTotalPrice()} €</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
