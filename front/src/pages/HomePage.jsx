import React from "react";
import FoodSection from "../components/FoodSection";
import RightSidebar from "../components/RightSidebar";

const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 3, padding: "20px" }}>
        <FoodSection category="Indian" />
        <FoodSection category="Chinese" />
        <FoodSection category="Japanese" />
      </div>
      <div style={{ flex: 1, padding: "20px", borderLeft: "1px solid green" }}>
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
