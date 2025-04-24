const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    const { items } = req.body;
    const newOrder = new Order({ items });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Order placement error:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

module.exports = router;
