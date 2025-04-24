import React from "react";
import { useCart } from "../context/CartContext";
import axios from "../api/axios";
const Billing = () => {
  const { confirmedItems, placeOrder } = useCart();

  const total = confirmedItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    if (confirmedItems.length === 0) {
      alert("No items to order.");
      return;
    }

    try {
      const response = await axios.post("/orders", {
        items: confirmedItems,
      });

      console.log("Order response:", response.data);
      alert("Order placed successfully!");
      placeOrder();
    } catch (err) {
      console.error("Failed to place order:", err);
      alert("Something went wrong placing the order.");
    }
    

  };

  return (
    <div style={{padding: '20px', border: '1px solid grey', marginTop: "20px" }}>
      <h3>Billing</h3>
      {confirmedItems.length === 0 ? (
        <p>No order confirmed yet.</p>
      ) : (
        <>
          <ul>
            {confirmedItems.map((item, index) => (
              <li key={index}>
                {item.name} - Rs.{item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> Rs.{total}</p>
          <button onClick={handlePlaceOrder}>
            Place the Order
          </button>
        </>
      )}
    </div>
  );
};

export default Billing;
