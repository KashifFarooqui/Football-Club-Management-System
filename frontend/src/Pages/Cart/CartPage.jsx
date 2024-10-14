import React, { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import CheckoutButton from "../../Checkout/CheckoutButton.jsx";
import "./cartpage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateToCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  };

  const handleSizeChange = (item, newSize) => {
    updateToCart(item._id, item.quantity, newSize);
  };

  return (
    <div className="shopping-cart">
      <h1 className="cart-header">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item, index) => (
              <div className="cart-item" key={item._id || index}>
                <div className="cart-item-left">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h2 className="cart-item-name">{item.name}</h2>
                    <p className="cart-item-price">Price: {item.price} €</p>
                   
                    <div className="size-selector">
                      <label htmlFor={`size-${item._id}`}>Size:</label>
                      <select className="size-box"
                        id={`size-${item._id}`}
                        value={item.size}
                        onChange={(e) => handleSizeChange(item, e.target.value)}
                      >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="cart-item-right">
                  <div className="quantity-controls">
                    <button
                      className="decrease-quantity"
                      onClick={() => updateToCart(item._id, item.quantity - 1, item.size)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="increase-quantity"
                      onClick={() => updateToCart(item._id, item.quantity + 1, item.size)}
                      disabled={item.quantity >= 10}
                    >
                      <Plus />
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item._id)}
                    variant="destructive"
                    aria-label="Remove Item"
                  >
                    <Trash2 />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total Price: {getTotalPrice()} €</h2>
            <CheckoutButton />
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
