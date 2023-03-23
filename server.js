const express = require("express");
const app = express();
const PORT = 9020;
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

const { DB_HOST, DB_NAME, DB_PORT } = process.env;
// mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
app.use(cors())

// online db connection
mongoose.connect("mongodb://mongo:wYRYkmRpoINgX4H3Mybc@containers-us-west-143.railway.app:6208/test")

app.use(express.json());
app.use("/users", require("./api/users"));
app.use("/products", require("./api/products"));
app.use("/carts", require("./api/carts"));
app.use("/orders", require("./api/orders"));



app.listen(PORT, () => console.log("Server is running on PORT: " + PORT));
mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

