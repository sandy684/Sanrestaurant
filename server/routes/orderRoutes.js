const express = require("express");
const app= express();
const Order = require("../models/Order");

app.post("/", async (req, res) => {
  try {
    const { items } = req.body;
    const newOrder = new Order({ items });
    await newOrder.save();
    res.status().json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Order placement error:", error);
    res.status().json({ error: "Failed to place order" });
  }
});


