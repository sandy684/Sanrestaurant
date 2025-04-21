import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, confirmOrder } = useCart();

  return (
    <div  style={{ padding: '20px', border: '1px solid grey' }}>
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - Rs.{item.price}
              </li>
            ))}
          </ul>
          <button onClick={confirmOrder}>Confirm Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;
