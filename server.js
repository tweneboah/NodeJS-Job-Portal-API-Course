require("dotenv").config();
const cors = require("cors");
const express = require("express");

const connectDb = require("./utils/dbConnect");
const app = express();

// Middleware to parse request body as JSON
app.use(express.json());
app.use(cors());

// Connect to database
connectDb();

// Not found route

// Start server on port 3000
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Server started on port + " + PORT + "...");
});
