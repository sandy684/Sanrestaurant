const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use("/orders", orderRoutes);
mongoose
  .connect("mongodb://localhost:27017/sanrestaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
