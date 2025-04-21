import React from "react";
import { useCart } from "../context/CartContext";

const FoodCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div style={{
      border: "1px solid green", padding: "10px", width: "150px", borderRadius: "8px"
    }}>
      <h4>{item.name}</h4>
      <p>Rs.{item.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
