import React, { useContext } from "react";
import { OrderHistoryContext } from "../../context/OrderHistoryContext"
import './orderHistory.css';

const OrderHistory = () => {
  const { orderHistory } = useContext(OrderHistoryContext); 

  return (
    <div className="order-history">
      <h1>Your Order History</h1>
      {orderHistory.length > 0 ? (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index}>
              <h3>Order ID: {order.id}</h3>
              <p>Date: {new Date(order.timestamp).toLocaleString()}</p>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    <p>{item.name} (x{item.quantity}) - ${item.price}</p>
                  </li>
                ))}
              </ul>
              <p>Total: ${order.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <>
        <div className="empty-cart-message">
        <p>No orders found.</p>
        <a href="/shop">Make Orders!</a>
        </div>
        </>
      )}
    </div>
  );
};

export default OrderHistory;
