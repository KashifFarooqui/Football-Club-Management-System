
import React, { createContext, useState, useContext } from "react";

export const OrderHistoryContext = createContext();

export const OrderHistoryProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  const addToOrderHistory = (order) => {
    setOrderHistory((prevHistory) => [...prevHistory, order]);
  };

  return (
    <OrderHistoryContext.Provider value={{ orderHistory, addToOrderHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};


export const useOrderHistory = () => useContext(OrderHistoryContext);
