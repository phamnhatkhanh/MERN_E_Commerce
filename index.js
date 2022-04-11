const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path = require("path")

// Run DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => { console.log("Mongo Connecting...") })
  .catch((err) => {
    console.log(err);
  });

// API
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/carts",cartRoute)
app.use(express.static(path.join(__dirname, "build")));


// url in client
// target: handel problem reload -> 404 when after run in heroku.
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
app.get("/product/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});
app.get("/collections/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});


// Run server
app.listen(process.env.PORT , () => {
  console.log("Backend run port " + process.env.PORT);
});
