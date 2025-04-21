import React from "react";
import FoodCard from "./FoodCard";

const FoodSection = ({ category }) => {
  const foodItems = Array.from({ length: 10 }, (_, i) => ({
    name: `${category} Dish ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 50,
    id: `${category}-${i + 1}`
  }));

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>{category} Cuisine</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {foodItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
