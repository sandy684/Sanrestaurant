const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
    },
  ],

});

module.exports = mongoose.model("Order", orderSchema);
