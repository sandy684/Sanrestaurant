import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [confirmedItems, setConfirmedItems] = useState([]);
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };
  const confirmOrder = () => {
    setConfirmedItems([...cart]);
    setCart([]);
  };
  const placeOrder = () => {
    setConfirmedItems([]); 
    setCart([]);        
  };
  return (
    <CartContext.Provider value={{ cart, confirmedItems, addToCart, confirmOrder, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
