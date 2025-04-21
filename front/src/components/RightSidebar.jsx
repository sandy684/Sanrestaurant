import React from "react";
import Cart from "./Cart";
import Billing from "./Billing";

const RightSidebar = () => {
  return (
    <div>
      <Cart />
      <hr />
      <Billing />
    </div>
  );
};

export default RightSidebar;
